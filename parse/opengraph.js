const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)
const avoParse = require('./avoParse')

async function getFiles(dir) {
  const subdirs = await readdir(dir)
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir)
    return (await stat(res)).isDirectory() ? getFiles(res) : res
  }));
  return files.reduce((a, f) => a.concat(f), [])
}

console.log('Fixing OG tags');

getFiles(avoParse.paths.buildDir).then((filenames) => {
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