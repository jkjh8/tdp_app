import { app, BrowserWindow, nativeTheme } from 'electron'
import path from 'path'
import os from 'os'
import logger from './logger'

import { pStatus, pTimes } from './defaultVal'
import { setLocalFileProtocol } from './fn/fileProtocols'
import updateSetupFromDb from './fn/updateSetupFromDb'
import setUUID from './fn/setUuid'

import './ipc'
import './menu'
// global variables
global.pStatus = pStatus
global.pTimes = pTimes
// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

try {
  if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(
      path.join(app.getPath('userData'), 'DevTools Extensions')
    )
  }
} catch (_) {}

// mainwindow
let mainWindow

async function createWindow() {
  // update valiables
  await updateSetupFromDb()
  // check and update UUID
  await setUUID()

  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      sandbox: false,
      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  logger.info('APP started')
  // local protocol load
  setLocalFileProtocol()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
