const {platform} = require('os');
const { app, BrowserWindow, session, BrowserView, ipcMain, Menu } = require('electron')
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

let win, browserViewContent;

function createWindow () {

  Menu.setApplicationMenu(null)

  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 550,
    minHeight: 400,
    show: false,
    backgroundColor: '#ffffff',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true
    },
    frame: false
  })

  // content view
  browserViewContent = new BrowserView({
    backgroundColor: '#91001b',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.addBrowserView(browserViewContent)
  let curSize = win.getSize()
  browserViewContent.setBounds({ x: 0, y: 25, width: curSize[0], height: curSize[1]-25 })
  browserViewContent.setAutoResize({width: true, height: true})

  browserViewContent.webContents.on('did-fail-load', (e, errCode, errDesc, vUrl, isMainFrame) => {
    if(isMainFrame) {
      let activeIndex = browserViewContent.webContents.getActiveIndex()
      browserViewContent.webContents.history[activeIndex] = browserViewContent.webContents.history[activeIndex-1]
      if(errDesc == 'ERR_INTERNET_DISCONNECTED')
        browserViewContent.webContents.loadURL('http://localhost:8000/offline.html')
      else
        browserViewContent.webContents.loadURL('http://localhost:8000/404.html')
    }
  })
  
  browserViewContent.webContents.on('did-navigate', canNavigate)

  browserViewContent.webContents.on('did-finish-load', () => {
    // add custom js
    browserViewContent.webContents.executeJavaScript(`
const bodyOnline = () => {
  $('body').addClass(navigator.onLine ? 'online' : 'offline');
  $('body').removeClass(navigator.onLine ? 'offline' : 'online')
}

window.addEventListener('online',  bodyOnline)
window.addEventListener('offline',  bodyOnline)
bodyOnline()
    `).catch(() => {
      console.log("Failed to execute JS")
    })

    canNavigate()
  })

  // and load the index.html of the app.
  browserViewContent.webContents.loadURL('http://localhost:8000/index.html')
  win.loadURL('http://localhost:8000/nav.html')

  win.show();

  win.on('ready-to-show',function(){
    browserViewContent.on('ready-to-show',function(){
      win.show();
    })
  })

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
app.whenReady().then(urlFilter).then(createWindow)

app.on('browser-window-created',function(e,window) {
  window.setMenu(null);
  Menu.setApplicationMenu(null)
});

app.allowRendererProcessReuse = true

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

// redirects
function urlFilter() {
  const filterUrls = {
    search: {
      url: '/js/search.js',
      file: 'local/search.js'
    },
    video: {
      url: '/js/video.js',
      file: 'local/video.js'
    },
    css: {
      url: '/css/main.css',
      file: 'local/app.css'
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
          redirectURL: 'http://localhost:8000/' + filterUrls[filterUrl].file
        })

        return
      }
    }

    callback({ cancel: true })
  })
}

// window controls
ipcMain.on("cntrl-back",function (event, arg) {
  if(browserViewContent.webContents.canGoBack()) {
    browserViewContent.webContents.goBack()
  }
})

ipcMain.on("cntrl-forward",function (event, arg) {
  if(browserViewContent.webContents.canGoForward()) {
    browserViewContent.webContents.goForward()
  }
})

ipcMain.on("cntrl-min",function (event, arg) {
  win.minimize()
})

ipcMain.on("cntrl-max",function (event, arg) {
  /*if(platform() == 'darwin')
    win.setSimpleFullScreen(!win.isSimpleFullScreen())
  else*/
    win.isMaximized() ? win.unmaximize() : win.maximize()
  
})

ipcMain.on("cntrl-close",function (event, arg) {
  win.close()
})

function canNavigate() {
  win.webContents.send('cntrl-can-back', browserViewContent.webContents.canGoBack())
  win.webContents.send('cntrl-can-forward', browserViewContent.webContents.canGoForward())
}