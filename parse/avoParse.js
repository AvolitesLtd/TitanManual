const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
class avoParse {
  constructor() {
    // standard language used in main docs
    this.lang = 'en'

    this.paths = {
      sidebar: path.resolve(__dirname,"../website/sidebars.json"),
      versionedSideberDir: path.resolve(__dirname,"../website/versioned_sidebars"),
      versions: path.resolve(__dirname,"../website/versions.json"),
      versionedDocsDir: path.resolve(__dirname,"../website/versioned_docs"),
      outputDir: path.resolve(__dirname,"./output"),
      docsDir: path.resolve(__dirname,"../docs"),
      staticDir: path.resolve(__dirname,`../website/static`),
      staticImagesDir: path.resolve(__dirname,'../website/static/docs/images'),
      buildDir: path.resolve(__dirname,'../website/build/AvoDocs'),
      transDocsDir: path.resolve(__dirname,'../website/translated_docs'),
      i18nDir: path.resolve(__dirname,'../website/i18n'),
    }
  
    this.regex = {
      // matches Yaml block with title
      yamlBlockTitle: /^---(?:[\n]|.)*title: *([\w ]*)(?:[\n]|.(?!--))*---/mgi,
  
      // matches all links which are to local .md files
      linksLocalMd: /(?<![\\!])\[(?<text>[^\]]*)(?<!\\)\]\((?!https?:\/\/)(?!\/\/)(?!#)(?<link>[a-zA-Z0-9-\.\/]*\.md)(?<anchor>[^)]*)\)/mgi,
  
      // matches all images with local sources
      imagesLocal: /!\[(?<alt>[^\]]*)\]\(\/(?!\/)(?<src>[^\)]*)\)/mg,
  
      // matches all images without a space before
      imagesSpaceBefore: /(?<!\n\n) *!\[[^\]]*\]\([^\)]*\)/gm,
  
      // matches all images without a space after
      imagesSpaceAfter: /!\[[^\]]*\]\([^\)]*\) *(?!\n\n)/gm,
  
      // matches og:url tag
      metaOgUrl: /<meta property="og:url" content="(https?:\/\/.*?)\/.*?"\/>/mi,
  
      // matches og:image tag
      metaOgImage: /<meta property="og:image" content="(https?:\/\/.*?)\/.*?"\/>/mi,
  
      // matches twitter:image tag
      metaTwitterImage: /<meta name="twitter:image" content="(https?:\/\/.*?)\/.*?"\/>/mi,
  
      // matches first image in <article>
      firstHTMLImage: /<article>[\s\S]*?<img.*?src="(\/[^"]*?(?:\.png|\.jpe?g))"[^>]*?>[\s\S]*?<footer/mi,
    }

    this.Version = class {
      constructor (v) {
        this.number = v.number
        this.dir = v.dir
        this.sidebar = v.sidebar
        this.sidebarObj = v.sidebarObj
        this.sidebarPrefix = v.sidebarPrefix
        this.lang = v.lang ? v.lang : 'en'
      }

      get index() {
        return path.join(path.resolve(__dirname,`../website/static/js/index`), `index-${this.number}-${this.lang}.json`)
      }
    }
  }
  
  /**
   * Returns current versions as an array of this.Version objects
   */
  getVersions() {
    let versions = [
      new this.Version({
        number: 'next',
        dir: this.paths.docsDir,
        sidebar: this.paths.sidebar,
        sidebarObj: 'docs',
        sidebarPrefix: '',
      })
    ]

    const versionsFile = JSON.parse(fs.readFileSync(this.paths.versions))
    const trans = [this.lang, ...fs.readdirSync(this.paths.transDocsDir)]
  
    trans.forEach(tran => {
      const mainLang = tran == this.lang

      const tranDir = path.join(this.paths.transDocsDir,tran)
      const tranVers = !mainLang ? fs.readdirSync(tranDir) : null

      versionsFile.forEach(version => {
        if(mainLang || tranVers.includes(`version-${version}`)) {
          let dir = path.join(this.paths.versionedDocsDir, `version-${version}`)

          if(!mainLang)
            dir = path.join(tranDir, `version-${version}`)

          versions.push(
            new this.Version({
              number: version,
              dir: dir,
              sidebar: path.join(this.paths.versionedSideberDir, `version-${version}-sidebars.json`),
              sidebarObj: `version-${version}-docs`,
              sidebarPrefix: `version-${version}-`,
              lang: tran,
            })
          )
        }
      })
    })
  
    return versions
  }

  /**
   * Returns all files in the dir recursively (asynchronously)
   * @param {string} dir 
   */
  async getFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? this.getFiles(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
  }

  /**
   * Returns all files in the dir recursively (synchronously)
   * @param {string} dir 
   */
  getFilesSync(dir) {
    return fs.statSync(dir).isDirectory()
      ? [].concat(...fs.readdirSync(dir).map(f => this.getFilesSync(path.join(dir, f))))
      : dir;
  }
}

module.exports = new avoParse()