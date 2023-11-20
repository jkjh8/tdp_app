import { pStatus } from '/src-electron/defaultVal'
import { openFile } from '/src-electron/fn/files'
import {
  fnPlay,
  fnStop,
  fnPause,
  fnSeek,
  fnPanning,
  fnToggleFullscreen,
  fnSetFullscreen
} from '/src-electron/fn/player'
import logger from '/src-electron/logger'

const fnPCommands = (args) => {
  switch (args.command) {
    case 'loadfile':
      openFile(args.values.fullpath)
      logger.info('Open file from ui: ' + args.values.fullpath)
      break
    case 'play':
      fnPlay()
      break
    case 'pause':
      fnPause()
      break
    case 'stop':
      fnStop()
      break
    case 'seek':
      fnSeek(args.time)
      break
    case 'panning':
      fnPanning(args.value)
      break
    case 'togglefullscreen':
      fnToggleFullscreen()
      break
    case 'fullscreen':
      fnSetFullscreen(args.value)
      break
    default:
      console.log('pCommmands: ', JSON.stringify(args))
      break
  }
}

export { fnPCommands }
