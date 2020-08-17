const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
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

function getVersions() {
  var versionsFile = JSON.parse(fs.readFileSync("../website/versions.json"));

  let versions = [
    {
      path: '../docs',
      number: 'next'
    }
  ];

  versionsFile.forEach(function(version) {
    versions.push(
      {
        path: "../website/versioned_docs/version-" + version,
        number: version
      }
    );
  });

  return versions;
}

function formatOutput (content) {
  let formattedContent = content;
  formattedContent = formattedContent.replace(/\n/g," ");
  formattedContent = formattedContent.replace(/-/g," ");
  return formattedContent;
}

getVersions().forEach(function(version) {
  getFiles(version.path).then((filenames) => {
    let output = [];
    filenames.forEach(function(filename) {
      if (!filename.includes(".DS_Store")) {
        let content = fs.readFileSync(filename, 'utf-8');
        filename = filename.replace(path.resolve(version.path) + path.sep, "");
        let header = "";
		filename = filename.replace(/\\/g, "/");
		
        let url = filename.replace(".md", "");
        let section = "";
		content = content.replace(/\r\n/g, "\n");
        let title = content.match(/(?<=^title: ).*$/gm)[0];
        let subtitle = "";
        let match;
        while (match = /\n.{1,}\n-{5,}\n\n|^#{1,} (?:.|\/)*/gm.exec(content)) {
          try {
            let section = content.substring(0, match.index);
            output.push({filename, url, content: formatOutput(header + " " + section), title, subtitle});

            header = content.substring(match.index, match.index + match[0].length);
            let headerRegex = header.match(/[A-Za-z \/]{1,}/gm);
            subtitle = headerRegex[0];
            url = header.toLowerCase();
            url = url.replace("/", "-");

            url = url.replace(/[^a-z0-9 -]/g, "");
            url = url.trim();
            url = url.replace(/ /g, "-");
            url = url.replace(/-+/g, "-");
            url = url.replace(/-+$/g, "");

            url = filename.replace(".md", "") + "#" + url;
            content = content.substring(match.index + match[0].length - 1, content.length - 1);
          } catch (ex) {
            console.log(ex);
          }
        }
        output.push({filename, url, content: formatOutput(header + " " + content), title, subtitle});
      }
    });

    fs.writeFile("../website/static/index-" + version.number + ".json", JSON.stringify(output, null, 2), function(err) {
      if(err) {
        return console.log(err);
      }
    });
  });
});
