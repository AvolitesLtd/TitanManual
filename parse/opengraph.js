const fs = require('fs')
const avoParse = require('./avoParse')

console.log('Fixing OG tags');

avoParse.getFiles(avoParse.paths.buildDir).then((filenames) => {
  filenames.forEach(function(filename) {
    if(filename.endsWith('.html')) {
      fs.readFile(filename,'utf-8',(err, contents) => {
        let webPath = filename.replace(avoParse.paths.buildDir,'').replace('index.html','')

        // replace og:url
        contents = contents.replace(avoParse.regex.metaOgUrl,`<meta property="og:url" content="$1${webPath}"/>`)
  
        // matches first image
        if(imageMatch = contents.match(avoParse.regex.firstHTMLImage)) {
          let socialImage = imageMatch[1]

          // replace og:image & twitter:image
          contents = contents.replace(avoParse.regex.metaOgImage,`<meta property="og:image" content="$1${socialImage}"/>`)
                             .replace(avoParse.regex.metaTwitterImage,`<meta property="twitter:image" content="$1${socialImage}"/>`)
        }

        fs.writeFile(filename, contents, (err) => {
          if(err) throw err
        });
      })
    }
  })
})