"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path_1 = require("path");
var url_1 = require("url");
var win;
var isDev = process.env.NODE_ENV === 'development';
function createWin() {
    win = new electron_1.BrowserWindow({
        width: 900,
        height: 720,
        resizable: false,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            webviewTag: true
        }
    });
    win.webContents.openDevTools();
    var URL = isDev ? "http://localhost:3000" : path_1["default"].join(__dirname, '../../release', 'index.html');
    if (isDev) {
        win.loadURL(URL);
    }
    else {
        win.loadURL(url_1["default"].format({
            pathname: URL,
            protocol: 'file:',
            slashes: true
        }));
    }
    win.webContents.on('dom-ready', function () {
        win.webContents.insertCSS("\n      body::-webkit-scrollbar {\n        display: none;\n      }\n    ");
    });
}
electron_1.app.whenReady().then(createWin);
//# sourceMappingURL=index.js.map