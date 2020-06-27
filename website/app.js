const { app, BrowserWindow, session, BrowserView, ipcMain, Menu, shell } = require('electron')
const appServer = require('./app/server.js')
const { fork } = require('child_process')
const localJs = fork(`${__dirname}/app/local.js`)
process.on('exit', () => {
  localJs.kill()
})

let win, browserViewContent

const createWindow = () => {
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
  defaultWindowSize();

  browserViewContent.webContents.on('did-fail-load', (e, errCode, errDesc, vUrl, isMainFrame) => {
    if(isMainFrame) {
      let activeIndex = browserViewContent.webContents.getActiveIndex()
      browserViewContent.webContents.history[activeIndex] = browserViewContent.webContents.history[activeIndex-1]
      if(errDesc == 'ERR_INTERNET_DISCONNECTED')
        browserViewContent.webContents.loadURL(`${appServer.url}/offline.html`)
      else
        browserViewContent.webContents.loadURL(`${appServer.url}/404.html`)
    }
  })

  browserViewContent.webContents.on('will-navigate', handleExternal)
  browserViewContent.webContents.on('new-window', handleExternal)

  browserViewContent.webContents.on('did-navigate', canNavigate)
  browserViewContent.webContents.on('did-finish-load', canNavigate)

  // and load the homepage of the app.
  appServer.ready().then(() => {
    let url = "/docs/introduction/";
    const args = require('minimist')(process.argv.slice(1))
    if (args['startUrl']) {
      url = args['startUrl'];
    }
    console.info(`${appServer.url}${url}`)
    browserViewContent.webContents.loadURL(`${appServer.url}${url}`)
    win.loadURL(`${appServer.url}/nav.html`)
  })

  browserViewContent.webContents.on('dom-ready', () => {
    win.show()
  });

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  //This ridiculous fix is needed because on windows if you maximise a frameless window then the
  //width provided by windows assumes that it the border was there so the window renders the wrong size
  win.on('maximize', () => {
    const bounds = win.getBounds();
    if (bounds['x'] == -8 && bounds['y'] == -8) {
      bounds['width'] -= 16;
      bounds['height'] -= 16;
    }
    browserViewContent.setBounds({ x: 0, y: 25, width: bounds['width'], height: bounds['height']-25 })
    browserViewContent.setAutoResize({width: false, height: false})
  });

  win.on('unmaximize', () => {
    defaultWindowSize();
  });

  win.on('will-resize', () => {
    defaultWindowSize();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  urlFilter()
})

app.on('browser-window-created', (e,window) => {
  window.setMenu(null);
  Menu.setApplicationMenu(null)
})

app.allowRendererProcessReuse = true

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// external links
function handleExternal(e, reqUrl)  {
  if(!reqUrl.startsWith(appServer.url)) {
    e.preventDefault()
    shell.openExternal(reqUrl)
  }
  else {
    browserViewContent.webContents.loadURL(reqUrl)
  }
}

//Sets the window to the default resize behaviour
function defaultWindowSize() {
  let curSize = win.getSize()
  browserViewContent.setBounds({ x: 0, y: 25, width: curSize[0], height: curSize[1]-25 })
  browserViewContent.setAutoResize({width: false, height: false})
}

// redirects
function urlFilter() {
  const filterUrls = {
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
      file: 'remote/jquery.js?v=5'
    }
  }

  const filter = {
    urls: Object.values(filterUrls).map((item) => {
      return (item.file.startsWith('local') ? `*://${appServer.host}:*` : "*:") + item.url
    })
  }

  session.defaultSession.webRequest.onBeforeRequest(filter, (details, callback) => {
    for(let filterUrl in filterUrls) {
      if(details.url.endsWith(filterUrls[filterUrl].url)) {
        callback({
          cancel: false,
          redirectURL: appServer.url + '/' + filterUrls[filterUrl].file
        })

        return
      }
    }

    callback({ cancel: true })
  })
}

// window controls
const canNavigate = () => {
  win.webContents.send('cntrl-can-back', browserViewContent.webContents.canGoBack())
  win.webContents.send('cntrl-can-forward', browserViewContent.webContents.canGoForward())
}

ipcMain.on("cntrl-back",(e, arg) => {
  if(browserViewContent.webContents.canGoBack())
    browserViewContent.webContents.goBack()
})

ipcMain.on("cntrl-forward", (e, arg) => {
  if(browserViewContent.webContents.canGoForward())
    browserViewContent.webContents.goForward()
})

ipcMain.on("cntrl-min", (e, arg) => {
  win.minimize()
})

ipcMain.on("cntrl-max", (e, arg) => {
  win.isMaximized() ? win.unmaximize() : win.maximize()
})

ipcMain.on("cntrl-close", (e, arg) => {
  win.close()
})
