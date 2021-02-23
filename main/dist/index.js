"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path_1 = require("path");
var url_1 = require("url");
var win;
var isDev = process.env.NODE_ENV === 'development';
function createWin() {
    win = new electron_1.BrowserWindow({
        width: 450,
        height: 640,
        minWidth: 450,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
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
}
electron_1.app.whenReady().then(createWin);
//# sourceMappingURL=index.js.map