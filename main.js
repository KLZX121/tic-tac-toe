const { app, BrowserWindow, Menu, shell } = require('electron');

//disable default Electron menu
Menu.setApplicationMenu(null);

app.on('ready', bootWindow);

//create new browser window to load the game files
function bootWindow(){
    const win = new BrowserWindow({
        show: false
    });
    win.loadFile('game/index.html');
    win.on('ready-to-show', () => win.maximize());

    win.webContents.on('new-window', (event, url) => {
        event.preventDefault();
        shell.openExternal(url);
    });
    win.webContents.openDevTools();
};