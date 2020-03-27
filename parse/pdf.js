const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const { execSync } = require("child_process");

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

function filenameToTitleLink(filename) {
  return "#" + filename.replace("/","-");
}

getFiles('../docs').then((filenames) => {
  let output = "";
  filenames.forEach(function(filename) {
    if (!filename.includes(".DS_Store")) {
      let content = fs.readFileSync(filename, 'utf-8');
      filename = filename.replace(path.resolve(__dirname + '/../docs/') + "/", "");
      
      // change ![alt](/path/to/img)
      // to     ![alt](path/to/img)
      content = content.replace(/!\[([^\]]*)\]\(\/(?!\/)([^\)]*)\)/mg, function (match,alt,src) {
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

      // replace YAML blocks with title
      content = content.replace(/^---(?:[\n]|.)*title: *([\w ]*)(?:[\n]|.(?!--))*---/mgi,function (match,title) {
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

      output += content + "\n\n";
    }
  });


  fs.writeFile("output/pdf.md", output, function(err) {
    if(err) {
      return console.log(err);
    }
  });
});

console.log("Producing PDF")

const command = `
DATE=$(date "+%d %B %Y")
ISODATE=$(date "+%F %H-%M-%S")
VERSION="Titan"

pandoc --template "PDF/eisvogel_avo.latex" \
  -o "output/$ISODATE $VERSION Manual $DATE.pdf" \
  --pdf-engine=xelatex \
  --highlight-style kate \
  --metadata-file PDF/header.yaml \
  --toc \
  -fmarkdown-implicit_figures \
  --self-contained \
  -M date="$DATE" \
  -M footer-center="$DATE" \
  -M footer-left="$VERSION Manual" \
  -M subtitle="$VERSION" \
  output/pdf.md`;

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