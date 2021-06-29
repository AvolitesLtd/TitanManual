const assert = require('assert')
const path = require('path')
const fs = require('fs')
const avoParse = require('../../parse/avoParse')

describe("Search", () => {
  describe("Index exists", () => {
    assert(fs.existsSync("build/search-index.json"));
  })
})