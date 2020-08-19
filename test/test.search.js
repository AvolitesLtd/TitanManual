const assert = require('assert')
const path = require('path');
const fs = require('fs');
const avoParse = require('../parse/avoParse')

describe("Indexes exist", () => {
  avoParse.getVersions().forEach(version => {
    it(`${version.number}`, () => {
      assert(fs.existsSync(version.index),"Try running search.js")
    })
  })
})


describe("Titles", () => {
  avoParse.getVersions().forEach(version => {
    indexFile = JSON.parse(fs.readFileSync(version.index))

    indexFile.forEach(index => {
      it(`${version.number} - ${index.filename} title`, () => {
        assert(index.title.trim())
      })
    })
  })
})

describe("Links don't 404", () => {
  avoParse.getVersions().forEach(version => {
    indexFile = JSON.parse(fs.readFileSync(version.index))

    indexFile.forEach(index => {
      let filePath = path.join(version.dir, index.filename)
      it(`${version.number} - ${index.filename} link to ${index.filename}`, () => {
        assert(fs.existsSync(filePath))
      })
    })
  })
})