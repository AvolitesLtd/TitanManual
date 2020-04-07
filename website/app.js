const { app, BrowserWindow, session, protocol } = require('electron')
const { readFile } = require('fs')
const path = require('path')
const url = require('url');

const { fork } = require('child_process')
const server = fork(`${__dirname}/app/server.js`)
const localJs = fork(`${__dirname}/app/local.js`)

process.on('exit', () => {
  server.kill();
  localJs.kill();
})

let win;

function createWindow () {

  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true
    },
    frame: false
  })

  win.setMenu(null)

  win.webContents.on('did-finish-load', function() {
    // add custom css
    readFile('./app/app.css', "utf-8", function(error, data) {
      if(!error){
        win.webContents.insertCSS(data)
      }
    })

    win.webContents.executeJavaScript(`
const bodyOnline = () => {
  document.body.classList.add(navigator.onLine ? 'online' : 'offline')
  document.body.classList.remove(navigator.onLine ? 'offline' : 'online')
}

window.addEventListener('online',  bodyOnline)
window.addEventListener('offline',  bodyOnline)

bodyOnline();

const header = document.querySelectorAll('.fixedHeaderContainer')[0];
//header.style.backgroundColor = "blue"
    `);
  })

  const filterUrls = {
    search: {
      url: '/js/search.js',
      file: 'local/search.js'
    },
    video: {
      url: '/js/video.js',
      file: 'local/video.js'
    },
    highlight: {
      url: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css',
      file: 'remote/highlight.css'
    },
    buttons: {
      url: '//buttons.github.io/buttons.js',
      file: 'remote/buttons.js'
    },
    jquery: {
      url: '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      file: 'remote/jquery.js'
    }
  }

  const filter = {
    urls: Object.values(filterUrls).map(function(item) {
      return (item.file.startsWith('local') ? '*://localhost:*':"*:")+item.url
    })
  }

  session.defaultSession.webRequest.onBeforeRequest(filter, (details, callback) => {
    for(let filterUrl in filterUrls) {
      if(details.url.endsWith(filterUrls[filterUrl].url)) {
        callback({ 
          cancel: false,
          redirectURL: 'http://localhost:8001/' + filterUrls[filterUrl].file
        })

        return
      }
    }

    callback({ cancel: true })
  })

  // and load the index.html of the app.
  win.loadURL('http://localhost:8000/index.html')

  win.on('ready-to-show',function(){
    win.show();
  })

  // Open the DevTools.
  win.webContents.openDevTools()

  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

app.allowRendererProcessReuse = true;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  server.kill();
  app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.