const { app, ipcMain, BrowserWindow, Menu } = require("electron");

let appWin;

createWindow = () => {
    appWin = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Angular and Electron",
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
}

appWin.loadURL('file://'+__dirname+'dist/index.html');

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

app.on("activate", () => {
    if (loginWin === null) {
      createWindowLogin();
    }
});