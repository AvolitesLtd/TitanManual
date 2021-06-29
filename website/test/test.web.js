const { fail } = require("assert");
const fs = require('fs')
var assert = require("assert"),
  webdriver = require("selenium-webdriver");


var buildDriver = function(caps) {
  return new webdriver.Builder()
    .forBrowser("chrome")
    .build();
};

describe("Test all pages", function() {
  var driver;
  this.timeout(0);

  beforeEach(function(done) {
    driver = buildDriver();
    done();
  });

  it ("Check for page valid", async () => {
    await driver.get('http://localhost:8080/docs');
    let elem = null;

    do {
      let title = await driver.getTitle();
      console.log(title);
      let matches = await driver.findElements(webdriver.By.css(".markdown"));
      if (matches.length > 0) {
        //todo figure out how to match broken files
        const text = await matches[0].getText();
        if (text.match(/\[.*?\]\(.*?\)/gm))
          fail("Page contained a link that wasn't properly formatted");
      }
      
      elem = await driver.findElements(webdriver.By.css(".pagination-nav__item--next .pagination-nav__link"));
      if (elem.length > 0) {
        await elem[0].click();
      }
      
    } while (elem.length > 0);
  });

  afterEach(function(done) {
    if (this.currentTest.isPassed) {
      driver.executeScript("lambda-status=passed");
    } else {
      driver.executeScript("lambda-status=failed");
    }
    driver.quit().then(function() {
      done();
    });
  });
});