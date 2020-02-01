var fs = require('fs');



fs.readdir('input', function(err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function(filename) {
    if (filename == ".DS_Store") {
      return;
    }
    fs.readFile('input/' + filename, 'utf-8', function(err, content) {
      let wh = content.replace(/{width=".*"\nheight=".*"}/g, "");
      wh = wh.replace(/media\/media/g, "/docs/images");

      let lines = wh.split('\n');
      let firstline = lines[0].split('{');
      let title = firstline[0].trim();
      title = title.replace('/', '');
      let id = title.split(" ").join("-").toLowerCase();
      let output = "---\nid: " + id + " \ntitle: " + title + "\n" + "sidebar_label: " + title + "\n---\n";

      for (let i = 1; i < lines.length; i++) {
        lines[i] =  lines[i].replace(/ {.*\.Ref_Heading.}/g, "");

        output += lines[i] + "\n";
      }
      console.log(filename);
      console.log(id);
      fs.writeFile("output/" + id + ".md", output, function(err) {
        if(err) {
          return console.log(err);
      }
  });

      //console.log(content);
    });
  });
});
