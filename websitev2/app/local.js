const { promisify } = require('util')
const path = require('path')
const fs = require('fs')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const webLocalJsDir = path.resolve(__dirname,'../static/js')
const sourcesDir = path.resolve(__dirname,'sources')
const appLocalJsDir = path.join(sourcesDir,'local')

const path404 = path.join(sourcesDir, '404.html')

async function getFiles(dir) {
  const subdirs = await readdir(dir)
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir)
    return (await stat(res)).isDirectory() ? getFiles(res) : res
  }));
  return files.reduce((a, f) => a.concat(f), [])
}

/* now done manually
getFiles(webLocalJsDir).then((filenames) => {
  filenames.forEach(function(filename) {
    fs.readFile(filename,'utf-8',(err, contents) => {
      contents = `
if (typeof module === 'object') {window.module = module; module = undefined;}

${contents}

if (window.module) module = window.module;`

      let appFilename = path.join(appLocalJsDir,path.basename(filename))
      fs.writeFile(appFilename, contents, (err) => {
        if(err) throw err
      });
    })
  })
})
*/

fs.readFile(path404,'utf-8',(err, contents) => {
  contents = contents.replace(/<div class="docMainWrapper wrapper">((.|\s)*)<\/footer>/mgi,function (match,page) {
    return `
<div class="docMainWrapper wrapper offline404">
  <h1>Currently Offline</h1>
</div>`;
    }
  );

  let offlineFilename = path.join(sourcesDir,'offline.html');
  fs.writeFile(offlineFilename, contents, (err) => {
    if(err) throw err
  });
})