const nodeStatic = require('node-static');
const path = require('path');
const fileServer = new nodeStatic.Server(path.resolve(__dirname,'../build/AvoDocs'),{ cache: false })
const sourceServer = new nodeStatic.Server(path.resolve(__dirname,'sources'),{ cache: false })
const { createServer } = require('http')

details = {
  port: 8000,
  host: 'localhost',
  protocol: 'http'
}
details.url = `${details.protocol}://${details.host}:${details.port}`

exports.details = details

exports.run = () => {
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
  }).listen(details.port)
}