const paths = require('path');
const fs = require('fs');
const { execSync } = require("child_process");
const { program } = require("../website/node_modules/commander");

const versionedDocsPath = "../website/versioned_docs/";
const legalPath = "PDF/legal-en.md";

// Command line options
program
  .option('-v, --manversion <version>', 'specify which version to produce, use --version next to produce the /docs folder')
  .option('-s, --section <section>', 'specify a specific section to output, e.g. --section synergy')
  .option('--no-legal', 'omit the legal section of the manual')
  .parse(process.argv);

try {
  process.chdir(__dirname);
} catch (err) {
  throw(`Failed to change working directory:\n${err}`);
  process.exit(1);
}

let version = program.manversion ? program.manversion.toLowerCase() : "all";
const section = program.section ? program.section.toLowerCase() : null;

const options = {
  legal: program.legal,
}

if(version == 'all') {
  for(let version of getVersions()) {
    createPDF(version, section, options);
  }
}
else {
  createPDF(version, section, options);
}

/**
 * Get all of the versions of the docs found in `path` plus `next`
 * @param {string} path Path to look for version folders, *defaults to `versionedDocsPath`*
 * @return {array} Array of the versions, e.g. ['12.0','13.0','next']
 */
function getVersions(path=versionedDocsPath) {
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  versions = fs.readdirSync(path).map(name => paths.join(path, name)).filter(isDirectory);
  
  for(let i in versions) {
    versions[i] = versions[i].replace(`${path}version-`,"")
  }

  versions.push('next');

  return versions;
}


/**
 * Converts `filename` to a MarkDown title anchor link.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @return {string} A MarkDown title anchor link, e.g. `#cues-creating-a-cue.md`
 */
function filenameToTitleLink(filename) {
  return "#" + filename.replace("/","-");
}

/**
 * Replaces the YAML block in the file with a heading
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with YAML block in
 * @return {string} The content with the YAML block replaced
 */
function replaceYaml(filename,content) {
  // matches Yaml block with title
  return content.replace(/^---(?:[\n]|.)*title: *([\w ]*)(?:[\n]|.(?!--))*---/mgi,function (match,title) {
    titleLink = filenameToTitleLink(filename);
    if (filename.match("/")) {
      // sub page, e.g.:
      // # Cues {#cues.md}
      return `# ${title} {${titleLink}}`;
    }
    else {
      // heading page, e.g.:
      // # {#cues.md}
      // \part{Cues}
      return `# {${titleLink}}\n\\part{${title}}`;
    }
  });
}

/**
 * Replaces links to local MarkDown files with links to the title
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with the links in
 * @param {string} docsPath The path to the docs folder, e.g. `../docs/`
 * @return {string} The content with the images fixed
 */
function replaceLinks(filename,content,docsPath) {
  // matches all links which are to local .md files
  return content.replace(/(?<!!)\[([^\[]*\n*)\]\((?!https?:\/\/)(?!\/\/)(?!#)([a-zA-Z0-9-\.\/]*\.md)([^)]*)\)/mgi, function (match,text,link,anchor) {
    if(anchor) {
      // if it's got an anchor link to a title just go to that, e.g.
      // change [text](link.md#title)
      // to     [text](#title)
      return `[${text}](${anchor})`
    }
    
    let filePath = filename.split("/");
    let file = filePath.pop();
    
    if(filePath.length) {
      // filename like 'cues/creating-a-cue.md'
      filePath = filePath.join('/');
    }
    else {
      // filename like 'cues.md'
      filePath = '';
    }

    let fullFilePath = paths.resolve(paths.join(docsPath, filePath, link));

    if (!fs.existsSync(fullFilePath)) {
      // check file exists
      process.emitWarning(`${filename}: Link to '${link}' not found`);

      // remove the link
      return text;
    }

    let titleLink = fullFilePath.replace(paths.resolve(docsPath),"").substring(1);
    titleLink = filenameToTitleLink(titleLink);

    return `[${text}](${titleLink})`
  });
}

/**
 * Replaces the image URIs with relative paths (not absolute paths)
 * From ![alt](/path/to/img)
 * To   ![alt](path/to/img)
 * Also warns about missing alt text and images.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with the images in
 * @return {string} The content with the images fixed
 */
function replaceImagePaths(filename,content) {
  // matches all images with local sources
  return content.replace(/!\[([^\]]*)\]\(\/(?!\/)([^\)]*)\)/mg, function (match,alt,src) {
    src = `../website/static/${src}`;
    if (!fs.existsSync(src)) {
      // check image exists
      process.emitWarning(`${filename}: Image '${src}' not found`);
      return '';
    }
    if (!alt) {
      // check alt text is defined for image
      process.emitWarning(`${filename}: No alt text set for '${src}'`);
    }
    return `![${alt}](${src})`
  });
}

/**
 * Returns the path to the sidebars JSON file for the specified `version`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Relative path to the JSON file, e.g. `../website/sidebars.json`
 */
function sidebarPath(version) {
  if(version == "next") {
    return "../website/sidebars.json";
  }
  else {
    let path = `../website/versioned_sidebars/version-${version}-sidebars.json`;
    if (!fs.existsSync(path)) {
      throw(`Could not find sidebars JSON file: ${path}`)
    };
    return path;
  }
}

/**
 * Returns the path to the docs folder for the specified `version`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Relative path to the docs folder with trailing slash, e.g. `../docs/`
 */
function docsVersionPath(version) {
  if(version == "next") {
    return "../docs/";
  }
  else {
    let path = `${versionedDocsPath}version-${version}/`;
    if (!fs.existsSync(path)) {
      throw(`Could not find versioned docs: ${path}`)
    };
    return path;
  }
}

/**
 * Formats all of the MarkDown files specified in the sidebar object
 * @param {string} docsPath The path to the docs folder, e.g. `../docs/`
 * @param {object} sidebar An object of the form found in the sidebars.json files
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The concatenated formatted files
 */
function formatMdFiles(docsPath, sidebar, version) {
  let output = "";

  if(version == 'next') {
    docs = sidebar.docs;
  }
  else {
    docs = sidebar[`version-${version}-docs`];
  }

  let sectionFound = false;

  for(let sec in docs) {
    if(!section || section == sec.toLowerCase()) {
      sectionFound = true;
      for(let page of docs[sec]) {
        if(version != 'next') {
          page = page.replace(`version-${version}-`,"")
        }
        output += formatMd(docsPath,page+'.md');
      }
    }
  }

  if(!sectionFound || !output) {
    // we didn't get anything
    throw("No sections were found, this could be because of the section specified or there weren't any sections found in the sidebar");
    process.exit(2);
  }

  return output;
}

/**
 * Format a MarkDown file ready for PDF
 * @param {string} docsPath Path to the docs folder, e.g. `../docs/`
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @return {string} The formatted MarkDown
 */
function formatMd(docsPath,filename) {
  let filepath = docsPath + filename;

  if (!fs.existsSync(filepath)) {
    process.emitWarning(`${filename}: File referenced in sidebar not found`);
    return '';
  }
  
  let content = fs.readFileSync(filepath, 'utf-8');

  // replace YAML blocks with title
  content = replaceYaml(filename,content);

  // replace links to md files with the title links created above
  content = replaceLinks(filename,content,docsPath);

  // fix the absolute image paths
  content = replaceImagePaths(filename,content);

  content += "\n\n";

  return content;
}

/**
 * Generate a PDF version of the MarkDown file
 * @param {string} inputMdPath Path to the MD file to convert, e.g. `output/pdf.md`
 * @param {string} version Version of the manual, e.g. `12.0`
 * @param {string} version (Optional) Which section is being exported
 * @return {string} The filename of the produced PDF
 */
function generatePDF(filePath,version,section=null) {
  if(version == "next") {
    version = "Latest";
  }
  version = `Titan ${version}`;
  
  section = section ? '-' + section : '';
  
  const ISODate = new Date().toISOString().slice(0,19).replace(/[T:]/g,"-");

  let filename = `${version}${section}-${ISODate}`;
  // sanitize filename
  filename = filename.replace(/[^\w]/g,"-");
  filename += '.pdf';

  console.log(`Producing PDF: ${filename}`)

  const command = `
DATE=$(date "+%d %B %Y")

pandoc --template "PDF/eisvogel_avo.latex" \
  -o "output/${filename}" \
  --pdf-engine=xelatex \
  --highlight-style kate \
  --metadata-file PDF/header.yaml \
  --toc \
  -fmarkdown-implicit_figures \
  --self-contained \
  -M date="$DATE" \
  -M footer-center="$DATE" \
  -M footer-left="${version} Manual" \
  -M subtitle="${version}" \
  ${filePath}`;

  var hrstart = process.hrtime();

  execSync(command, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
  });

  var hrend = process.hrtime(hrstart);
  console.log('PDF produced in %ds', hrend[0]);

  return filename;
}

/**
 * Create the docs for the specified `version` & `section`
 * @param {string} version Version of the docs to produce, e.g. `12.0` or `next` to produce the latest
 * @param {string} section (Optional) Which section to output, e.g. `synergy`
 * @param {object} options (Optional) Options include:
 *  - options.legal - whether to omit the legal section
 *  - options.legalPath - the path to the legal docs (defaults to legalPath)
 * @return {string} The filename of the produced PDF
 */
function createPDF(version,section=null, options={}) {
  console.log(`Formatting version '${version}'`)

  // get the path of the sidebar file
  let sidebarFile = fs.readFileSync(sidebarPath(version));
  let sidebar = JSON.parse(sidebarFile);

  // get the path for docs of the version
  docsPath = __dirname + "/" + docsVersionPath(version);

  let output = '';
  if (options.legal) {
    output += fs.readFileSync(options.legalPath ? options.legalPath : legalPath);
    output += "\n\n";
  }

  // format the files
  output += formatMdFiles(docsPath, sidebar, version);

  // create formatted MD file
  let formattedMdPath = "output/pdf.md";
  try {
    fs.writeFileSync(formattedMdPath, output);
  }
  catch(err) {
    throw(`Failed to write formatted MarkDown file: ${formattedMdPath}\n${err}`);
    process.exit(3);
  }

  // generate the PDF
  return generatePDF(formattedMdPath,version,section);
}