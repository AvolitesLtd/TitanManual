const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

class avoParse {
  constructor() {
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
  }
  
  /**
   * Returns current versions as an array of objects, e.g.
   * {
   *   number: '12.0',
   *   dir: '/website/versioned_docs/version-12.0',
   *   sidebar: '/website/versioned_sidebars/version-12.0-sidebars.json',
   *   sidebarObj: 'version-12.0-docs',
   *   sidebarPrefix: 'version-12.0-',
   *   index: '/website/static/index-12.0.json'
   * }
   */
  getVersions() {
    var versionsFile = JSON.parse(fs.readFileSync(this.paths.versions))
  
    let versions = [
      {
        number: 'next',
        dir: this.paths.docsDir,
        sidebar: this.paths.sidebar,
        sidebarObj: 'docs',
        sidebarPrefix: '',
      }
    ]
  
    versionsFile.forEach(version => {
      versions.push(
        {
          number: version,
          dir: path.join(this.paths.versionedDocsDir, `version-${version}`),
          sidebar: path.join(this.paths.versionedSideberDir, `version-${version}-sidebars.json`),
          sidebarObj: `version-${version}-docs`,
          sidebarPrefix: `version-${version}-`,
        }
      )
    })

    versions.forEach(version => {
      version.index = path.join(this.paths.staticDir, `index-${version.number}.json`)
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