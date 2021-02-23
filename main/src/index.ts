import {app,BrowserWindow} from 'electron'
import path from 'path'
import url from 'url';

let win:BrowserWindow
let isDev = process.env.NODE_ENV === 'development'
function createWin() {
  win = new BrowserWindow({
    width: 450,
    height: 640,
    minWidth: 450,
    autoHideMenuBar:true,
    webPreferences: {
      nodeIntegration: true,
    },
  })
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
}

app.whenReady().then(createWin)


const arr: Array<string & number> = [
  
]
