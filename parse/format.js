var fs = require('fs');
var path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {

    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));

  });
return filelist;
}
let filelist = walkSync("../docs");


filelist.forEach((filename) => {
  if (filename.includes(".DS_Store")) {
    return;
  }
  fs.readFile(filename, 'utf-8', function(err, content) {
    //what formatting changes are we doing?
    if (!content)
      return;

    content
    //let updated = content.replace(/^[0-9]\\>\s/g, "");
    fs.writeFile(filename, updated, function(err) {
        if(err) {
          return console.log(err);
      }
    });
  });
});

// fs.readdir('input', function(err, filenames) {
//   if (err) {
//     onError(err);
//     return;
//   }
//   let i = 1;
//   filenames.forEach(function(filename) {
//     if (filename == ".DS_Store") {
//       return;
//     }
//     fs.readFile('input/' + filename, 'utf-8', function(err, content) {
//       //what formatting changes are we doing?
//       if (!content) {
//         return;
//       }
//       console.log(filename);
//       let updated = content.replace(/{width=".*" height=".*"}/g, "");
//
//       fs.writeFile("input/"+ filename, updated, function(err) {
//         if(err) {
//           return console.log(err);
//       }
//   });
//
//       //console.log(content);
//     });
//   });
// });
