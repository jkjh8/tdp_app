import { ipcMain, BrowserWindow as bw } from 'electron'
import { pStatus, pTimes } from '/src-electron/defaultVal'
import logger from '/src-electron/logger'

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
      pStatus.device.audiodevicelist = args.devices
      // io.emit('devices', args.devices)
      break
    case 'device':
      pStatus.device.audiocurrentdevice = args.device
      // io.emit('device', { device: args.device })
      break
    default:
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
}

const upt = (args) => {
  for (const key in args) {
    if (key !== 'type') {
      pTimes[key] = args[key]
    }
  }
}
