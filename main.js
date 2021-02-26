const { app, BrowserWindow, Menu } = require('electron');

//disable default Electron menu
Menu.setApplicationMenu(null);

app.on('ready', bootWindow);

//create new browser window to load the game files
function bootWindow(){
    const win = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('game/index.html');
    win.on('ready-to-show', () => win.maximize());
};