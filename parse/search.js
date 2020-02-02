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

getFiles('../docs').then((filenames) => {
  let output = [];
  filenames.forEach(function(filename) {
    if (!filename.includes(".DS_Store")) {
      let content = fs.readFileSync(filename, 'utf-8');
      filename = filename.replace(path.resolve(__dirname + '/../docs/') + "/", "");
      let header = "";
      let url = filename.replace(".md", "");
      let section = "";

      let title = content.match(/(?<=^title: ).*$/gm)[0];
      let subtitle = "";
      let match;
      while (match = /\n.*\n-{5,}\n\n/g.exec(content)) {
        let section = content.substring(0, match.index);
        output.push({filename, url, content: header + section, title, subtitle});

        header = content.substring(match.index, match.index + match[0].length - 1);
        subtitle = header.match(/[A-Za-z ]{1,}/gm)[0];
        url = header.toLowerCase();
        url = url.replace(/[^a-z0-9 ]/g, "");
        url = url.trim();
        url = url.replace(/ /g, "-");
        url = url.replace(/--/g, "-");
        url = filename.replace(".md", "") + "#" + url;

        content = content.substring(match.index + match[0].length - 1, content.length - 1);
      }
      output.push({filename, url, content: header + content, title, subtitle});
    }
  });


  fs.writeFile("../website/static/index.json", JSON.stringify(output, null, 2), function(err) {
    if(err) {
      return console.log(err);
    }
  });
});
