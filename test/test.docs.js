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

describe("Links", () => {
  avoParse.getVersions().forEach(async version => {
    const filenames = avoParse.getFilesSync(version.dir)
    filenames.forEach(filename => {
      if(filename.endsWith(".md")) {
        let content = fs.readFileSync(filename, 'utf-8');
        let links = [...content.matchAll(avoParse.regex.linksLocalMd)]

        links.forEach(link => {
          if(link.groups.link) {
            let filePath = filename.split("/");
            let file = filePath.pop();

            if(filePath.length) {
              // filename like 'cues/creating-a-cue.md'
              filePath = filePath.join('/');
            }
            else {
              // filename like 'cues.md'
              filePath = '';
            }

            let fullFilePath = path.resolve(version.dir, filePath, link.groups.link)
            
            it(`${version.number} - ${filename} link to ${link.groups.link} ("${link.groups.text}")`, () => {
              assert(fs.existsSync(fullFilePath))
            })
          }
        })
      }
    })
  })
})