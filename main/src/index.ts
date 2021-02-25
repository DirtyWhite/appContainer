import {app,BrowserWindow} from 'electron'
import path from 'path'
import url from 'url';

let win:BrowserWindow
let isDev = process.env.NODE_ENV === 'development'
function createWin() {
  win = new BrowserWindow({
    width: 900,
    height: 720,
    resizable:false,
    frame:false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      webviewTag:true
    },
  })
  win.webContents.openDevTools();

  const URL = isDev ? `http://localhost:3000` : path.join(__dirname, '../../release', 'index.html')
  if (isDev) {
    win.loadURL(URL)
  } else {
    win.loadURL(url.format({
      pathname: URL,
      protocol: 'file:',
      slashes: true
    }))
  }


  win.webContents.on('dom-ready',function() {
    win.webContents.insertCSS(`
      body::-webkit-scrollbar {
        display: none;
      }
    `)
  })

}

app.whenReady().then(createWin)





