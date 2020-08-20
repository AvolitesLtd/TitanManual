const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const avoParse = require('./avoParse')

avoParse.getVersions().forEach(function(version) {
  avoParse.getFiles(version.dir).then((filenames) => {
    let output = [];
    filenames.forEach(function(filename) {
      if (!filename.includes(".DS_Store")) {
        let content = fs.readFileSync(filename, 'utf-8');
        console.log(filename);
        filename = filename.replace(version.dir + path.sep, "");
        let header = "";
        let url = filename.replace(".md", "");
        let section = "";
        let title = content.match(/(?<=^title: ).*$/gm)[0];
        let subtitle = "";
        let match;
        while (match = /\n.{1,}\n-{5,}\n\n|^#{1,} (?:.|\/)*/gm.exec(content)) {
          try {
            let section = content.substring(0, match.index);
            output.push({filename, url, content: header + section, title, subtitle});

            header = content.substring(match.index, match.index + match[0].length);
            let headerRegex = header.match(/[A-Za-z \/]{1,}/gm);
            subtitle = headerRegex[0].trim();
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
        output.push({filename, url, content: header + content, title, subtitle});
      }
    });

    fs.writeFile(version.index, JSON.stringify(output, null, 2), function(err) {
      if(err) {
        return console.log(err);
      }
    });
  });
});