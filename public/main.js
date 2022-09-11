const { app, BrowserWindow } = require("electron");
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require("electron-devtools-installer");
const url = require("url");
const path = require("path");


const isProduction = false;

function createWindow() {
    const window = new BrowserWindow({
        width: 900,
        height: 600,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    if (isProduction) {
        const startURL = url.format({
            pathname: path.join(__dirname, "../index.html"),
            protocol: 'file:',
            slashes: true
        });

        window.loadURL(startURL);
    } 
    else {
        window.loadURL("http://localhost:3000");
        window.webContents.openDevTools();
    }
}

app.whenReady().then(() => {
    // Installs the extensions for react developer tools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension: ${name}`))
      .catch((err) => console.log(`An error occured: ${err}`))

    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
