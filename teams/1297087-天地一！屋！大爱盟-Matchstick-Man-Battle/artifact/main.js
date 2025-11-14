const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // 加载你的 index.html
  win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(createWindow)
