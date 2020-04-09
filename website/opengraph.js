const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const buildDir = path.resolve(__dirname,'build/AvoDocs')

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

        contents = contents.replace(/<meta property="og:url" content="(https:\/\/manual\.avolites\.com)[^"]*"\/>/mi,`<meta property="og:url" content="$1${webPath}"/>`)
  
        fs.writeFile(filename, contents, (err) => {
          if(err) throw err
        });
      })
    }
  })
})