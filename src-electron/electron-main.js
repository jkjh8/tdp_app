import { app, BrowserWindow, nativeTheme } from 'electron'
import path from 'path'
import os from 'os'
import logger from './logger'

import { pStatus, pTimes } from './defaultVal'
import { setLocalFileProtocol } from './fn/fileProtocols'
import updateSetupFromDb from './fn/updateSetupFromDb'
import setUUID from './fn/setUuid'
import getMacAddress from './fn/getNICs'
import { initControlServer } from './tcp'
import { initUdpServer } from './udp'

// inclutes
import './ipc'
import './menu'
import { io, fnStartServer } from './web/io'
import { fnSetFullscreen } from '/src-electron/fn/player'

// global variables
global.pStatus = pStatus
global.pTimes = pTimes
global.io = io
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
  // initialize app data
  try {
    // update valiables
    await updateSetupFromDb()
    // check and update UUID
    await setUUID()
    // start web server from specified port number
    fnStartServer(pStatus.webport)
    // start control tcp server
    initControlServer(pStatus.controlport)
    // start udp server
    initUdpServer(pStatus.udpport)
    // get nics info
    pStatus.nics = await getMacAddress()
  } catch (error) {
    console.error(error)
  }

  // init main window
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: pStatus.device.width ? pStatus.device.width : 1000,
    height: pStatus.device.heigth ? pStatus.device.height : 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      sandbox: false,
      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })
  logger.info(`Window Size: ${pStatus.device.width} x ${pStatus.device.height}`)
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
  mainWindow.on('enter-full-screen', () => {
    if (platform !== 'darwin') {
      mainWindow.setMenuBarVisibility(false)
    }
  })

  mainWindow.on('leave-full-screen', () => {
    if (platform !== 'darwin') {
      mainWindow.setMenuBarVisibility(true)
    }
  })

  logger.info('APP started')
  // local protocol load
  setLocalFileProtocol()
  // start at fullscreen
  if (pStatus.startatfullscreen) {
    fnSetFullscreen(true)
  }
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
