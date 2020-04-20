const nodeStatic = require('node-static');
const path = require('path');
const fileServer = new nodeStatic.Server(path.resolve(__dirname,'../build/AvoDocs'))
const sourceServer = new nodeStatic.Server(path.resolve(__dirname,'sources'))
const { createServer } = require('http')

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
      request.addListener('end', () => {
        fileServer.serve(request, response, (fe, fres) => {
          if (fe && (fe.status === 404)) {
            // not found on file server
            sourceServer.serve(request, response, (se, sres) => {
              // look on sources folder
              if (se && (se.status === 404)) { // file wasn't found anywhere
                fileServer.serveFile('/404.html', 404, {}, request, response)
              }
            })
          }
        });
      }).resume();
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