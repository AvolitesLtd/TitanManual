const assert = require('assert')
const path = require('path');
const fs = require('fs');
const avoParse = require('../parse/avoParse')

describe("Links don't 404", () => {
  avoParse.getVersions().forEach(version => {
    indexFile = JSON.parse(fs.readFileSync(version.indexPath))

    indexFile.forEach(index => {
      let filePath = path.join(version.dir, index.filename)
      it(`${version.number} - ${index.filename} link to ${index.filename}`, () => {
        assert(fs.existsSync(filePath))
      })
    })
  })
})