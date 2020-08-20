const assert = require('assert')
const path = require('path')
const fs = require('fs')

const avoParse = require('../parse/avoParse')

describe("Docs", () => {
  describe("Sidebars exist", () => {
    avoParse.getVersions().forEach(version => {
      it(`${version.number} - sidebar file`, () => {
        assert(fs.existsSync(version.sidebar),
          `Could not find sidebar for "${version.number}": ${version.sidebar}`)
      })
    })
  })

  describe("Files in sidebar", () => {
    avoParse.getVersions().forEach(version => {
      let sidebarFile = JSON.parse(fs.readFileSync(version.sidebar))

      for(let section in sidebarFile[version.sidebarObj]) {
        sidebarFile[version.sidebarObj][section].forEach(filename => {
          filename = filename.replace(version.sidebarPrefix,'')
          let filepath = path.join(version.dir,filename + '.md')
          
          it(`${version.number} - ${section} - ${filename}`, () => {
            assert(fs.existsSync(filepath),
              `Could not find "${filepath}", referenced in "${version.number}" sidebar under "${section}"`)
          })
        })
      }
    })
  })

  avoParse.getVersions().forEach(async version => {
    const filenames = avoParse.getFilesSync(version.dir)
    filenames.forEach(filename => {
      if(filename.endsWith(".md")) {
        describe(`${version.number} - ${filename}`, () => {
          let content = fs.readFileSync(filename, 'utf-8')

          describe(`Links to local .md files`, () => {
            let links = [...content.matchAll(avoParse.regex.linksLocalMd)]

            links.forEach(link => {
              if(link.groups.link) {
                let filePath = filename.split("/");
                let file = filePath.pop()

                if(filePath.length) {
                  // filename like 'cues/creating-a-cue.md'
                  filePath = filePath.join('/')
                }
                else {
                  // filename like 'cues.md'
                  filePath = '';
                }

                let fullFilePath = path.resolve(version.dir, filePath, link.groups.link)
                
                it(`Link to ${link.groups.link}`, () => {
                  assert(fs.existsSync(fullFilePath), 
                    `Could not find "${fullFilePath}"
                    Linked from "${filename}" (with the link text "${link.groups.text}")`)
                })
              }
            })
          })

          describe("Local images", () => {
            let images = [...content.matchAll(avoParse.regex.imagesLocal)]

            images.forEach(image => {
              let filePath = path.join(avoParse.paths.staticDir, image.groups.src)
              
              it(`Image ${image.groups.src}`, () => {
                assert(fs.existsSync(filePath), 
                  `Could not find "${filePath}"
                  Linked from "${filename}" (with the alt text "${image.groups.alt}")`)

                assert(image.groups.alt,
                  `No alt text set for "${image.groups.src}" in "${filename}"`)
              })
            })
          })

        })
      }
    })
  })
})