const {app, BrowserWindow, globalShortcut, dialog, session} = require('electron')
const path = require('path')
const url = require('url')
const client = require('electron-connect').client;
//api: api.openweathermap.org/data/2.5/forecast?zip=76131,de&APPID=c314e4b540eac4e88cee00e53b7bf99f

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'app/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
    client.create(win)
}

function defineGlobalShortcuts() {
    globalShortcut.register('CommandOrControl+X', () => {
        app.quit();
    });
}

function readCookies() {
    global.cookies = win.webContents.session.cookies;
}

/*
function showWelcomeMessage() {
	dialog.showMessageBox( { type: "info", message: "Willkommen!", buttons: ["OK"] });
}
*/

app.on('ready', createWindow)
app.on('ready', readCookies)
app.on('ready', defineGlobalShortcuts)
//app.on('ready', showWelcomeMessage)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})