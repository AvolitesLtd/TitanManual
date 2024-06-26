const path = require('path');
const fs = require('fs');
const avoParse = require('./avoPrismParse')
const { execSync } = require("child_process");
const { program } = require("../website/node_modules/commander");

const legalPath = path.join(__dirname,"PDF/prism-legal-en.md");
const templatePath = path.join(__dirname,"PDF/eisvogel_avo.latex");
const sectionNumberFilter = path.join(__dirname,"PDF/lua-section-number-filter.lua");
const headerPath = path.join(__dirname,"PDF/header.yaml");
const logoPath = path.join(__dirname,"PDF/avo.png");

let previousHeading = ""; //use to help determine when a page break should happen

const docs = [
    { sidebar: 'player', appName: 'Prism Player', version: "v1.3", path: 'Player' },
    { sidebar: 'zero',  appName: 'Prism Zero', version: "v1.3", path: 'Zero' },
    { sidebar: 'prism', appName: 'Prism', version: "v1.3", path: 'Prism' },
    // Add more pages as needed
]

for (doc of docs)
{
    createPDF(doc, null);
}

/**
 * Get all of the versions of the docs specified in the versions.json file, plus `next`
 * @return {array} Array of the versions, e.g. ['12.0','13.0','next']
 */
function getVersions() {
  let allVersions = versions;
  allVersions.push('next');
  return allVersions;
}

/**
 * Request a path to output to, creating it if necessary
 * @param {string} req (Optional) The path to the requested output directory
 * @param {string} def (Optional) The default path to output to
 * @return {string} The absolute path to the output directory without the trailing slash
 */
function setOutputDir(req='',def=avoParse.paths.outputDir) {
  if(req) {
    let userOutputDir = path.resolve(req);

    fs.access(userOutputDir, fs.constants.W_OK, function(err) {
      if(err){
        req = def;
        process.emitWarning(`Could not write to ${userOutputDir}, instead writing to ${def}`);
      }

      req = userOutputDir;
    });
  }
  else {
    req = def
  }

  // create the output folder if it doesn't exist
  if(!fs.existsSync(req)) {
    fs.mkdirSync(req);
  }

  return req;
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
 * Replaces the headings with lower level so the levels work correctly
 * @param {string} content Contents of the .md file with YAML block in
 * @return {string} The content with the headings replaced
 */
 function replaceHeadings(content) {
  content = content.replace(/^### (.*)/gm,"#### $1");
  content = content.replace(/^## (.*)/gm,"### $1");

  return content;
}

/**
 * Replaces the YAML block in the file with a heading
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with YAML block in
 * @return {string} The content with the YAML block replaced
 */
function replaceYaml(filename, content, sectionHeading) {
  // matches Yaml block with title
  return content.replace(avoParse.regex.yamlBlockTitle,function (match,title) {

    titleLink = filenameToTitleLink(filename);
    let sectionHeadingText = "";

    if (previousHeading != sectionHeading) {
      sectionHeadingText = `\\pagebreak \n# ${sectionHeading}\n\n`
      previousHeading = sectionHeading
    }
    
    return `${sectionHeadingText}## ${title} {${titleLink}}`;
  });
}

/**
 * Replaces links to local MarkDown files with links to the title
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with the links in
 * @param {string} docsPath The path to the docs folder, e.g. `../docs/`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The content with the images fixed
 */
function replaceLinks(filename,content,docsPath,version) {
  // matches all links which are to local .md files
  return content.replace(avoParse.regex.linksLocalMd, function (match,text,link,anchor) {
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

    let fullFilePath = path.resolve(docsPath, filePath, link);

    let resolvedPath = resolvePageVersion(path.join(filePath, link),version)

    if (!resolvedPath) {
      // check file exists
      process.emitWarning(`[${version}] ${filename}: Link to '${link}${anchor ? anchor : ''}' not found`);

      // remove the link
      return text;
    }

    if(anchor) {
      // if it's got an anchor link to a title just go to that, e.g.
      // change [text](link.md#title)
      // to     [text](#title)
      return `[${text}](${anchor})`
    }

    // change the link to the title anchor created in replaceYaml, e.g.
    // change [text](link.md)
    // to     [text](#link-md)
    let titleLink = fullFilePath.replace(path.resolve(docsPath),"").substring(1);
    titleLink = filenameToTitleLink(titleLink);

    return `[${text}](${titleLink})`
  });
}

/**
 * Replaces the image URIs with relative path (not absolute path)
 * From ![alt](/path/to/img)
 * To   ![alt](path/to/img)
 * Also warns about missing alt text and images.
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} content Contents of the .md file with the images in
 * @return {string} The content with the images fixed
 */
function replaceImagepath(filename,content) {
  // matches all images with local sources
  return content.replace(avoParse.regex.imagesLocal, function (match,alt,src) {
    let fullSrc = path.join(avoParse.paths.staticDir, src);
    if (!fs.existsSync(fullSrc)) {
      // check image exists
      process.emitWarning(`${filename}: Image '${src}' not found`);
      return '';
    }
    if (!alt) {
      // check alt text is defined for image
      process.emitWarning(`${filename}: No alt text set for '${src}'`);
    }
    return `![${alt}](${fullSrc})`
  });
}

/**
 * Add spacing before and after images
 * @param {string} content Contents of the .md file with the images in
 * @return {string} The content with the spacing added
 */
function addImageSpacing(content) {
  // add spacing before images that don't have it
  content = content.replace(avoParse.regex.imagesSpaceBefore,"\n\n$&");
  // add spacing after images that don't have it
  return content.replace(avoParse.regex.imagesSpaceAfter,"$&\n\n");
}

/**
 * Replace <br> tags with \newline
 * @param {string} content Contents of the .md file with the tags in
 * @return {string} The content with the breaks replaced
 */
function replaceBr(content) {
  return content.replace(/<br\/>/gmi,"&ZeroWidthSpace; \\newline &ZeroWidthSpace;");
}

/**
 * Replace key tags with normal tags
 * @param {string} content Contents of the .md file with the tags in
 * @return {string} The content with the breaks replaced
 */
 function replaceJSX(content) {
  content = content.replace(/<Keys\.ContextKey>(.*?)<\/Keys\.ContextKey>/gmis,"{$1}");
  content = content.replace(/<Keys\.PrismKey>(.*?)<\/Keys\.PrismKey>/gmis,"{$1}");
  content = content.replace(/<Keys\.HardKey>(.*?)<\/Keys\.HardKey>/gmis,"\\\<$1\\\>");
  content = content.replace(/<Keys\.SoftKey>(.*?)<\/Keys\.SoftKey>/gmis,"\\\[$1\\\]");
  content = content.replace(/<Keys\.Annotation>(.*?)<\/Keys\.Annotation>/gmis,"($1)");
  content = content.replace(/<strong>(.*?)<\/strong>/gmis,"**$1**");
  content = content.replace(/<em>(.*?)<\/em>/gmis,"*$1*");
  content = content.replace(/import .*? from '.*?';\n/gmi,"");
  return content;
}

/**
 * Replace HTML Comments tags with normal tags
 * @param {string} htmlContent Contents of the .md file with the tags in
 * @return {string} The content with the breaks replaced
 */
function removeHtmlComments(htmlContent) {
  // Regex pattern to find HTML comments
  const commentPattern = /<!--[\s\S]*?-->/g;

  // Replace all HTML comments with an empty string
  const cleanedContent = htmlContent.replace(commentPattern, '');

  return cleanedContent;
}

/**
 * Replace P Tags with just its contents
 * @param {string} htmlContent Contents of the .md file with the tags in
 * @return {string} The content with the breaks replaced
 */
function removePTags(htmlContent) {
  // Regex pattern to find HTML comments
  const commentPattern = /<p([^>]*)>(.*?)<\/p>/gi;

  // Replace all HTML comments with an empty string
  const cleanedContent = htmlContent.replace(commentPattern, "$2");

  return cleanedContent;
}

/**
 * Returns the path to the sidebars JSON file for the specified `version`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Relative path to the JSON file, e.g. `../website/sidebars.json`
 */
function sidebarPath(version) {
  if(version == "next") {
    return avoParse.paths.sidebar;
  }
  else {
    let filePath = path.join(avoParse.paths.versionedSideberDir,`version-${version}-sidebars.json`)

    if (!fs.existsSync(filePath)) {
      throw(`Could not find '${version}' sidebars JSON file: ${filePath}`);
    };
    return filePath;
  }
}

/**
 * Returns the path to the docs folder for the specified `version`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Absolute path to the docs folder without the trailing slash, e.g. `/Users/user/AvoDocs/docs`
 */
function docsVersionPath(version, appName) {
  if(version == "next") {
    return path.resolve(avoParse.paths.docsDir+ "/" + appName);
  }
  else {
    let filePath = path.join(avoParse.paths.versionedDocsDir,`version-${version}/`);
    if (!fs.existsSync(filePath)) {
      throw(`Could not find versioned docs: ${filePath}`)
    };
    return filePath;
  }
}

/**
 * Formats all of the MarkDown files specified in the sidebar object
 * @param {string} docsPath The path to the docs folder, e.g. `../docs/`
 * @param {object} sidebar An object of the form found in the sidebars.json files
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The concatenated formatted files
 */
function formatMdFiles(docsPath, sidebar, version, appName) {
  let output = "";
  let docs = sidebar
    
  for(let index in docs) {
    const doc = docs[index];

    if (doc.items)
    {
      for(let page of doc.items) {
        let sec = page.label;
        
        if(page.link)
        {
          const path = page.link.id.replace(appName + "/", '');
          output += formatMd(docsPath,path+'.md',version, sec, appName);
        }

        if (page.items)
        {
          for (item of page.items)
          {
            const paths = item.id.replace(appName+"/", '');
            output += formatMd(docsPath,paths+'.md',version, sec, appName);
          }
        }
        else {
          const paths = page.id.replace(appName+"/", '');
          output += formatMd(docsPath,paths+'.md',version, sec, appName);
        }
      }
    }
    else
    {
      const path = docs[index].id.replace(appName + "/", '');
      output += formatMd(docsPath,path+'.md',version,sec, appName);
    console.log(docs[index])
    }
  }

  return output;
}

/**
 * Resolves the latest version of the file
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md` 
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} Absolute file path to the latest version (null if not found)
 */
function resolvePageVersion(filename, version, appName = "") {
  let filepath = path.resolve(docsVersionPath(version, appName), filename);
  if (fs.existsSync(filepath)) {
    return filepath;
  }

  return null
}

/**
 * Format a MarkDown file ready for PDF
 * @param {string} docsPath Path to the docs folder, e.g. `../docs/`
 * @param {string} filename Name of the file, e.g. `cues/creating-a-cue.md`
 * @param {string} version Version of the manual, e.g. `12.0` or `next`
 * @return {string} The formatted MarkDown
 */
function formatMd(docsPath,filename,version,sectionHeading, appName) {
  let filepath = resolvePageVersion(filename,version, appName);

  if (!filepath) {
    process.emitWarning(`[${version}] ${filename}: File referenced in sidebar not found`);
    return '';
  }

  let content = fs.readFileSync(filepath, 'utf-8');

  // Replace the # headings with lower levels
  content = replaceHeadings(content);

  // replace YAML blocks with title
  content = replaceYaml(filename,content,sectionHeading);

  // replace links to md files with the title links created above
  content = replaceLinks(filename,content,docsPath,version);

  // fix the absolute image path
  content = replaceImagepath(filename,content);

  // fix the absolute image path
  content = addImageSpacing(content);

  // replace <br> tags
  content = replaceBr(content);

  content = replaceJSX(content);

  content = removeHtmlComments(content);

  content = removePTags(content);

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
function generatePDF(filePath, appName, options={}) {
  // current date and time

  // format & sanitize the filename
  let filename = `${appName}`;
  filename = filename.replace(/[^\w]/g,"-");
  filename += '.pdf';
  filename = path.join(avoParse.paths.outputDir, filename);

  // options
  options.templatePath = options.templatePath ? options.templatePath : templatePath;
  options.headerPath = options.headerPath ? options.headerPath : headerPath;
  options.logoPath = options.logoPath ? options.logoPath : logoPath;

  console.log(`Producing PDF: ${filename}`)

  const command = `
    DATE=$(date "+%d %B %Y")

    pandoc --template "${options.templatePath}" \
      -o "${filename}" \
      --pdf-engine=xelatex \
      --highlight-style kate \
      --metadata-file "${options.headerPath}" \
      --toc \
      --number-sections \
      -fmarkdown-implicit_figures \
      --self-contained \
      --lua-filter="${sectionNumberFilter}" \
      -V fontsize=8pt \
      -M date="$DATE" \
      -M footer-center="$DATE" \
      -M footer-left="${appName} Manual" \
      -M title="Avolites Prism Manual" \
      -M subtitle="${appName}" \
      -M logo="${options.logoPath}" \
      -V colorlinks=true \
      -V block-headings \
      "${filePath}"
  `;

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
 *  - options.legal - whether to omit the legal section (defaults to true)
 *  - options.legalPath - the path to the legal docs (defaults to legalPath)
 *  - options.outputDir - the output directory to write to
 * @return {string} The filename of the produced PDF
 */
function createPDF(doc, section=null, options={}) {
  const version = "next"

  // get the path of the sidebar file
  let sidebarFile = fs.readFileSync(sidebarPath(version));
  let sidebar = JSON.parse(sidebarFile)[doc.sidebar];
  // get the path for docs of the version
  docsPath = docsVersionPath(version, sidebar)+ "/" + doc.path;

  let output = '';
  output += fs.readFileSync(legalPath);
  output += "\n\n";

  // format the files
  output += formatMdFiles(docsPath, sidebar, version, doc.sidebar);

  // create formatted MD file
  let formattedMdPath = path.join(avoParse.paths.outputDir, doc.sidebar + "-" + doc.version + "-pdf.md");
  try {
    fs.writeFileSync(formattedMdPath, output);
  }
  catch(err) {
    process.exitCode = 3;
    throw(`Failed to write formatted MarkDown file: ${formattedMdPath}\n${err}`);
  }

  // generate the PDF
  return generatePDF(formattedMdPath, doc.appName + "-" + doc.version,options);
}
