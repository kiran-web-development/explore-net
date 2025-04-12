const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: `${__dirname}/preload.js`, // Preload script
    },
  });

  mainWindow.loadFile('index.html'); // Load the browser UI
});
