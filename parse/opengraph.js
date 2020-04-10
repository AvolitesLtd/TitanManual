const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const buildDir = path.resolve(__dirname,'../website/build/AvoDocs')

async function getFiles(dir) {
  const subdirs = await readdir(dir)
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir)
    return (await stat(res)).isDirectory() ? getFiles(res) : res
  }));
  return files.reduce((a, f) => a.concat(f), [])
}

console.log('Fixing OG tags');

getFiles(buildDir).then((filenames) => {
  filenames.forEach(function(filename) {
    if(filename.endsWith('.html')) {
      fs.readFile(filename,'utf-8',(err, contents) => {
        let webPath = filename.replace(buildDir,'').replace('index.html','')

        // replace og:url
        contents = contents.replace(/<meta property="og:url" content="(https?:\/\/.*?)\/.*?"\/>/mi,`<meta property="og:url" content="$1${webPath}"/>`)
  
        // matches first image
        if(imageMatch = contents.match(/<article>[\s\S]*?<img.*?src="(\/[^"]*?(?:\.png|\.jpe?g))"[^>]*?>[\s\S]*?<footer/mi)) {
          let socialImage = imageMatch[1]

          // replace og:image & twitter:image
          contents = contents.replace(/<meta property="og:image" content="(https?:\/\/.*?)\/.*?"\/>/mi,`<meta property="og:image" content="$1${socialImage}"/>`)
            .replace(/<meta name="twitter:image" content="(https?:\/\/.*?)\/.*?"\/>/mi,`<meta property="twitter:image" content="$1${socialImage}"/>`)
        }

        fs.writeFile(filename, contents, (err) => {
          if(err) throw err
        });
      })
    }
  })
})