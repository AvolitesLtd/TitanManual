const nodeStatic = require('node-static');
const path = require('path');
const fileServer = new nodeStatic.Server(path.resolve(__dirname,'../build/AvoDocs'),{ cache: false })
const sourceServer = new nodeStatic.Server(path.resolve(__dirname,'sources'),{ cache: false })
const { createServer } = require('http')

createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response, function (e, res) {
            if (e && (e.status === 404)) {
                sourceServer.serve(request, response, function (e, res) {
                    if (e && (e.status === 404)) { // If the file wasn't found
                        fileServer.serveFile('/404.html', 404, {}, request, response);
                    }
                })
            }
        });
    }).resume();
}).listen(8000);