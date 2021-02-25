import {app,BrowserWindow} from 'electron'
import path from 'path'
import url from 'url';

let win:BrowserWindow
let isDev = process.env.NODE_ENV === 'development'
function createWin() {
  win = new BrowserWindow({
    width: 400,
    height: 720,
    resizable:false,
    frame:false,
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


  win.webContents.on('dom-ready',function() {
    win.webContents.insertCSS(`
      body::-webkit-scrollbar {
        display: none;
      }
    `)
  })

}

app.whenReady().then(createWin)


interface com {
  name:string
}

class com1 implements com {
  name: string
  com1Prop:string
}

class com2 implements com {
  name: string
  com2Prop:number
}

const a : coupon = null;

const arr: Array<com1 | com2> = [
  {
    name: '234324',
    com1Prop: '234234',
    com2Prop: 234234
  }
]



const prop: com1 | com2  = {
  name: '234324',
  com1Prop: '234234',
  com2Prop: 234234,
}


type com01 = {
  name:string,
  com1Prop: string
}
type com02 = {
  name:string,
  com2Prop:number
}


type union = com01 | com02

let prop3: com01 | com02 = {
  name: '234324',
  com1Prop: '234234',
  com2Prop: 42342,
}


function test3(arg:union) {
   
}

test3(prop3);

enum args  {

}










function test1(arg: com1 | com2) {
    if(arg instanceof com1){}
    if(arg instanceof com2){}
}

test1 ({
  name: '234324',
  com1Prop: '234234',
  com2Prop: 234234
})
 


const arr1: Array<com1 & com2> = [
  {
    name: '234324',
    com2Prop: 234234,
    com1Prop: '24324'
  }
]


interface commonReward {
  id:string
}






