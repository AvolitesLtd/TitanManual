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

    this.portPromise = this.getAvailablePort(startingPort).then(port => {
      this.port = port
      this.serverPromise = this.run(port)
    })
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
   * @param {int} startingAt  Port number you would like to start looking for a free port from
   */
  getAvailablePort(startingAt) {
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
        getNextAvailablePort(startingAt, resolve)
    })
  }

  /**
   * Run the server
   * @param {int} port Port to start the server on
   */
  run(port = this.port) {
    return new Promise((resolve, reject) => {
      if(!this.port)
        reject(new Error("Port not defined"))
      
      createServer((request, response) => {
        request.addListener('end', () => {
          fileServer.serve(request, response, (fe, fres) => {
            if (fe && (fe.status === 404)) {
              sourceServer.serve(request, response, (se, sres) => {
                if (se && (se.status === 404)) { // If the file wasn't found
                  fileServer.serveFile('/404.html', 404, {}, request, response)
                }
              })
            }
          });
        }).resume();
      }).listen(port, () => {
        resolve("Server listening")
      })
    })
  }

  /**
   * Wait for the server to be ready
   */
  ready() {
    return new Promise(async (resolve) => {
      let port = await this.portPromise
      let server = await this.serverPromise

      resolve("Server online");
    })
  }
}

module.exports = new appServer()