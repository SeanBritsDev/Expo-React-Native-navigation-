// electron-main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // Disable nodeIntegration for security; preload can be used if needed
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (process.env.ELECTRON_START_URL) {
    // Dev: load Expo web dev server
    win.loadURL(process.env.ELECTRON_START_URL);
  } else {
    // Prod: load built web files
    win.loadFile(path.join(__dirname, "web-build", "index.html"));
  }

  // win.webContents.openDevTools(); // uncomment if you want dev tools by default
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // On macOS it’s common to keep the app open until user quits explicitly
  if (process.platform !== "darwin") {
    app.quit();
  }
});
