import { ipcMain, BrowserWindow as bw } from 'electron'
import db from '/src-electron/db'
import { ui } from '/src-electron/web/io'
import logger from '/src-electron/logger'

import { pStatus, pTimes } from '/src-electron/defaultVal'

ipcMain.on('updateFromFE', async (e, args) => {
  switch (args.type) {
    case 'loadeddata':
    case 'loadedmetadata':
      upv({ ...args, status: 'ready', playBtn: false })
      logger.info(`${args.type}: ${args.src}`)
      break
    case 'volumechanged':
      upv(args)
      logger.info(`${args.type}: ${args.volume}`)
      break
    case 'timeupdate':
      // upv({ status: 'play' })
      upt(args)
      break
    case 'durationchange':
      upt(args)
      upv(args)
      break
    case 'playing':
    case 'play':
      upv({ ...args, status: 'playing', playBtn: true })
      logger.info(`${args.type} file: ${pStatus.file.name}`)
      break
    case 'paused':
      upv({ ...args, playBtn: false, status: 'paused' })
      logger.info(`${args.type} file: ${pStatus.file.name}`)
      break
    case 'error':
      logger.error(`player error: ${args.error}`)
      break
    case 'waiting':
      upv(args)
      logger.warn(args.type)
      break
    case 'ended':
      upv({ ...args, playBtn: false, status: 'ended' })
      logger.info(`${args.type} file: ${pStatus.file.name}`)
      // bw.fromId(1).webContents.send('command', {
      //   command: 'ended',
      //   mode: pStatus.status.status
      // })
      break
    case 'devices':
      pStatus.device.audiodevicelist = JSON.parse(args.list)
      // io.emit('devices', args.devices)
      break
    case 'device':
      pStatus.device.audiocurrentdevice = args.device
      // io.emit('device', { device: args.device })
      break
    case 'windowsize':
      pStatus.device.height = args.height
      pStatus.device.width = args.width
      await db.update(
        { key: 'windowSize' },
        { $set: { height: args.height, width: args.width } },
        { upsert: true }
      )
      break
    default:
      console.log('ipc default', args)
      // upv(args)
      // logger.info(args.type)
      break
  }
})

const upv = (args) => {
  for (const key in args) {
    if (key !== 'type') {
      pStatus.status[key] = args[key]
    }
  }
  bw.fromId(1).webContents.send('updateFromBE', pStatus)
  ui.emit('pStatus', pStatus)
}

const upt = (args) => {
  for (const key in args) {
    if (key !== 'type') {
      pTimes[key] = args[key]
    }
  }
  ui.emit('pTimes', pTimes)
}
