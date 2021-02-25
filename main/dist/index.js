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
            enableRemoteModule: true
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
var com1 = /** @class */ (function () {
    function com1() {
    }
    return com1;
}());
var com2 = /** @class */ (function () {
    function com2() {
    }
    return com2;
}());
var a = null;
var arr = [
    {
        name: '234324',
        com1Prop: '234234',
        com2Prop: 234234
    }
];
var prop = {
    name: '234324',
    com1Prop: '234234',
    com2Prop: 234234
};
var prop3 = {
    name: '234324',
    com1Prop: '234234',
    com2Prop: 42342
};
function test3(arg) {
}
test3(prop3);
var args;
(function (args) {
})(args || (args = {}));
function test1(arg) {
    if (arg instanceof com1) { }
    if (arg instanceof com2) { }
}
test1({
    name: '234324',
    com1Prop: '234234',
    com2Prop: 234234
});
var arr1 = [
    {
        name: '234324',
        com2Prop: 234234,
        com1Prop: '24324'
    }
];
//# sourceMappingURL=index.js.map