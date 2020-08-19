const assert = require('assert')
const path = require('path')
const fs = require('fs')

const avoParse = require('../parse/avoParse')

describe("Sidebars exist", () => {
  avoParse.getVersions().forEach(version => {
    it(`${version.number} - sidebar file`, () => {
      assert(fs.existsSync(version.sidebar))
    })
  })
})

describe("Files in sidebar exist", () => {
  avoParse.getVersions().forEach(version => {
    let sidebarFile = JSON.parse(fs.readFileSync(version.sidebar))

    for(let section in sidebarFile[version.sidebarObj]) {
      sidebarFile[version.sidebarObj][section].forEach(filename => {
        filename = filename.replace(version.sidebarPrefix,'')
        let filepath = path.join(version.dir,filename + '.md')
        
        it(`${version.number} - ${section} - ${filename}`, () => {
          assert(fs.existsSync(filepath))
        })
      })
    }
  })
})