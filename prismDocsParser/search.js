const path = require('path');
const fs = require('fs');
const avoParse = require('./avoParse')

function formatOutput (content) {
  let formattedContent = content;
  formattedContent = formattedContent.replace(/\n/g," ");
  formattedContent = formattedContent.replace(/-/g," ").trim();
  return formattedContent;
}

avoParse.getVersions().forEach(version => {
  const i18n = JSON.parse(fs.readFileSync(path.join(avoParse.paths.i18nDir,`${version.lang}.json`)));

  avoParse.getFiles(version.dir).then(filenames => {
    let output = [];
    filenames.forEach(filename => {
      if (!filename.includes(".DS_Store")) {
        let content = fs.readFileSync(filename, 'utf-8');
        filename = filename.replace(version.dir + path.sep, "");
		    filename = filename.replace(/\\/g, "/");
        let header = "";

        let url = filename.replace(".md", "");
        let section = "";
        content = content.replace(/\r\n/g, "\n");
        let title = content.match(/(?<=^title: ).*$/gm)[0];
        
        try {
          title = i18n["localized-strings"]["docs"][`${version.sidebarPrefix}${url}`].title;
        }
        catch {
          console.log(`Couldn't find "${version.lang}" translation for ${version.sidebarPrefix}${url}`)
        }

        url = version.lang + '/' + url;

        // description
        let desc = content.match(/(?<=^description: ).*$/gm);
        desc = desc ? desc[0] : "";

        // tags
        let tags = content.match(/(?<=^tags: ).*$/gm);
        tags = tags ? tags[0].split(",") : [];

        // remove YAML block
        content = content.replace(avoParse.regex.yamlBlockTitle,"")

        let subtitle = "";
        let match;

        // search for subtitles
        while (match = /\n.{1,}\n-{5,}\n\n|^#{1,} (?:.|\/)*/gm.exec(content)) {
          try {
            let section = content.substring(0, match.index);
            output.push({filename, url, content: formatOutput(header + " " + section), title, subtitle, desc, tags});

            header = content.substring(match.index, match.index + match[0].length);
            let headerRegex = header.match(/[A-Za-z \/]{1,}/gm);
            subtitle = headerRegex[0].trim();

            // convert subtitle text to anchor link
            url = header.toLowerCase();
            url = url.replace("/", "-");
            url = url.replace(/[^a-z0-9 -]/g, "");
            url = url.trim();
            url = url.replace(/ /g, "-");
            url = url.replace(/-+/g, "-");
            url = url.replace(/-+$/g, "");

            url = version.lang + '/' + filename.replace(".md", "") + "#" + url;
            content = content.substring(match.index + match[0].length - 1, content.length - 1);
          } catch (ex) {
            console.log(ex);
          }
        }
        output.push({filename, url, content: formatOutput(header + " " + content), title, subtitle, desc, tags});
      }
    });

    fs.writeFile(version.index, JSON.stringify(output, null, 2), function(err) {
      if(err) {
        return console.log(err);
      }
    });
  });
});