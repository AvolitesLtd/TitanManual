const avoParse = require('./avoParse')
const fs = require('fs')
const https = require('https')
const path = require('path')

const options = {
  hostname: 'api.github.com',
  path: '/repos/AvolitesLtd/TitanManual/releases',
  headers: { 'User-Agent': 'Downloads Page' }
};

https.get(options, (resp) => {
  let data = ''

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => parseReleases(JSON.parse(data)))

}).on("error", (err) => {
  console.log("Error: " + err.message)
});

function parseReleases(releases) {
  let downloads = []
  
  releases.forEach((release) => {
    if(release.assets.length) {
        var download = {
        version: release.tag_name,
        id: release.id,
        url: release.html_url,
        prerelease: release.prerelease,
        date: release.published_at,
        downloads: parseAssets(release.assets)
      }

      downloads.push(download)
    }
  })

  saveJSON(downloads)
}

class Download {
  constructor(name,size,url) {
    this.name = name,
    this.filesize = size,
    this.url = url
  }

  set filesize(size) {
    size = size / 1000000
    this.size = size.toFixed(1) + "MB"
  }
}

function parseAssets(assets) {
  let downloads = {
    Windows: {},
    Linux: {},
    Mac: {},
    PDF: {}
  }

  assets.forEach(asset => {
    let name = asset.name

    let download = new Download(name, asset.size, asset.browser_download_url)

    switch(true) {
      case name.endsWith(".pdf"):
        let version = ''

        if(name.includes('Pre-Release') || name.includes('Latest')) {
          version = 'Pre-Release'
        }
        else {
          let pdfParts = name.split("-",3)
          pdfParts.shift() // remove Titan
          version = pdfParts.join(".")
        }

        downloads.PDF[version] = download
        break
      
      case name.includes("Setup"):
        downloads.Windows["installer"] = download
        break
      
      case name.endsWith(".exe"):
        downloads.Windows["stand-alone"] = download
        break
      
      case name.endsWith(".deb"):
        downloads.Linux[".deb"] = download
        break
      
      case name.endsWith(".AppImage"):
        downloads.Linux[".AppImage"] = download
        break
      
      case name.endsWith(".dmg"):
        downloads.Mac[".dmg"] = download
        break
      
      case name.endsWith(".zip"):
        downloads.Mac[".zip"] = download
        break
    }
  })

  return downloads
}

function saveJSON(downloads) {
  if(downloads.length) {
    // check we found some files
    fs.writeFile(path.join(avoParse.paths.staticDir,"download","download.json"), JSON.stringify(downloads, null, 2), err => {
      if(err) {
        return console.log(err)
      }
    })
  }
}