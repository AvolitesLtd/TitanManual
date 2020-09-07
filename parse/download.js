const avoParse = require('./avoParse')
const fs = require('fs')
const path = require('path')
const { platform } = require('process')
const { program } = require("../website/node_modules/commander")

program
  .option('-p, --pdf', 'produce the download-pdf.json file')
  .option('-w, --windows', 'produce the download-windows.json file')
  .option('-l, --linux', 'produce the download-linux.json file')
  .option('-m, --mac', 'produce the download-mac.json file')
  .parse(process.argv);

// get a list of the generated files
const downloadDir = path.resolve(__dirname, '../website/download')
let filenames = avoParse.getFilesSync(downloadDir)
filenames.forEach((filename,idx) => {
  filenames[idx] = filename.replace(downloadDir + path.sep,"")
})
filenames.sort()

let output = {}
let outputFilename = "download-"

let os = program.windows ? 'win32' : program.mac ? 'darwin' : program.linux ? 'linux' : platform

const versionRegex = /((?:[\d]+\.)+[\d]+)/m

switch(true) {
  case program.pdf:
    outputFilename += "pdf.json"

    filenames.forEach(pdf => {
      if(pdf.endsWith(".pdf")) {
        // we're in business
        
        if(pdf.includes("Latest")) {
          // link to the latest pre-production PDF
          output.latest = pdf
        }
        else {
          let pdfParts = pdf.split("-",3)
          pdfParts.shift() // remove Titan
          let version = pdfParts.join(".")
          output[version] = pdf
        }
      }
    })
    break

    case os == "win32":
      outputFilename += "windows.json"

      filenames.forEach(filename => {
        if(filename.endsWith(".exe")) {
          let version = filename.match(versionRegex)[0]

          if(!output[version]) {
            output[version] = {}
          }
          
          if(filename.includes("Setup")) {
            output[version]["installer"] = filename
          }
          else {
            output[version]["stand-alone"] = filename
          }
        }
      })
      break

    case os == "darwin":
      outputFilename += "mac.json"

      filenames.forEach(filename => {
        if(filename.endsWith("-mac.zip") || filename.endsWith(".dmg")) {
          let version = filename.match(versionRegex)[0]

          if(!output[version]) {
            output[version] = {}
          }
          
          if(filename.endsWith("-mac.zip")) {
            output[version][".zip"] = filename
          }
          else if(filename.endsWith(".dmg")) {
            output[version][".dmg"] = filename
          }
        }
      })
      break

    default:
      outputFilename += "linux.json"

      filenames.forEach(filename => {
        if(filename.endsWith(".deb") || filename.endsWith(".AppImage")) {
          let version = filename.match(versionRegex)[0]

          if(!output[version]) {
            output[version] = {}
          }
          
          if(filename.endsWith(".deb")) {
            output[version][".deb"] = filename
          }
          else if(filename.endsWith(".AppImage")) {
            output[version][".AppImage"] = filename
          }
        }
      })
}

if(Object.keys(output).length) {
  // check it found some files
  fs.writeFile(path.join(downloadDir,outputFilename), JSON.stringify(output, null, 2), function(err) {
    if(err) {
      return console.log(err);
    }
  });
}