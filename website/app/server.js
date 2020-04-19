const nodeStatic = require('node-static');
const path = require('path');
const fileServer = new nodeStatic.Server(path.resolve(__dirname,'../build/AvoDocs'),{ cache: false })
const sourceServer = new nodeStatic.Server(path.resolve(__dirname,'sources'),{ cache: false })
const { createServer } = require('http')
const EventEmitter = require('events');

class appServer extends EventEmitter {
  constructor(startingPort = 8000) {
    super();

    this.host = 'localhost'
    this.protocol = 'http'

    this.getAvailablePort(startingPort).then(port => {
      this.port = port
      this.run()
    })
  }

  get url() {
    if(!this.port)
      throw "Port not defined"

    return `${this.protocol}://${this.host}:${this.port}`
  }

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

  run(port = this.port) {
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
      this.emit('ready')
    })
  }
}

module.exports = new appServer()