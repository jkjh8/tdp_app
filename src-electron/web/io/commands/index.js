import { pStatus } from '/src-electron/defaultVal'
import { openFile } from '/src-electron/fn/files'
import { fnPlay, fnPause } from '/src-electron/fn/player'
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
    default:
      console.log('pCommmands: ', JSON.stringify(args))
      break
  }
}

export { fnPCommands }
