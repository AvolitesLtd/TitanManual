const sirv = require('sirv');
const fs = require('fs');
const path = require('path');
const { createServer } = require('http');

const buildDir = path.resolve(__dirname, '../build');
const sourcesDir = path.resolve(__dirname, 'sources');
const notFoundPage = path.join(sourcesDir, '404.html');

const serveBuild = sirv(buildDir, { dev: true, etag: true });
const serveSources = sirv(sourcesDir, { dev: true, etag: true });

class appServer {
  /**
   * Start the server
   * @param {int} startingPort Port number you would like to start looking for a free port from
   */
  constructor(startingPort = 8000) {
    this.protocol = 'http'
    this.host = 'localhost'

    this.server = this.run(startingPort)
  }

  /**
   * Get the base URL of the server - **must be called after the server is ready()**
   */
  get url() {
    if(!this.port)
      throw "Port not defined"

    return `${this.protocol}://${this.host}:${this.port}`
  }

  /**
   * Get the next available port to start a server
   * @param {int} startingPort  Port number you would like to start looking for a free port from
   */
  getAvailablePort(startingPort) {
    function getNextAvailablePort (currentPort, cb) {
      const server = createServer()
      server.listen(currentPort, _ => {
        server.once('close', _ => {
          cb(currentPort)
        })
        server.close()
      })
      server.on('error', _ => {
        getNextAvailablePort(++currentPort, cb)
      })
    }
  
    return new Promise(resolve => {
      getNextAvailablePort(startingPort, resolve)
    })
  }

  /**
   * Run the server
   * @param {int} startingPort  Port number you would like to start looking for a free port from
   */
  async run(startingPort) {
    this.port = await this.getAvailablePort(startingPort)

    createServer((request, response) => {
      serveBuild(request, response, () => {
        serveSources(request, response, () => {
          response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
          fs.createReadStream(notFoundPage).pipe(response)
        })
      })
    }).listen(this.port)
  }

  /**
   * Wait for the server to be ready
   */
  async ready() {
    await this.server
  }
}

module.exports = new appServer()
