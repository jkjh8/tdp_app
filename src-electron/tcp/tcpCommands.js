import logger from '/src-electron/logger'
import db, { dbUpdate } from '/src-electron/db'
import updateSetupFromDb from '../fn/updateSetupFromDb.js'
import { getMediaFolder, getFileNames } from '../fn/folders/index.js'

import { ui } from '/src-electron/web/io'
import { pStatus } from '/src-electron/defaultVal'

export default async function tcpParser(command) {
  try {
    switch (command) {
      case 'getfiles':
        return JSON.stringify(getMediaFolder())
      case 'getfilenames':
        return JSON.stringify(getFileNames())
      case 'setloadandplay':
        await dbUpdate('loadandplay', true)
        await updateSetupFromDb()
        return 'ok'
      case 'resetloadandplay':
        await dbUpdate('loadandplay', false)
        await updateSetupFromDb()
        return 'ok'
      case 'setstartatfullscreen':
        await dbUpdate('startatfullscreen', true)
        await updateSetupFromDb()
        return 'ok'
      case 'resetstartatfullscreen':
        await dbUpdate('startatfullscreen', false)
        await updateSetupFromDb()
        return 'ok'
      case 'resetAllPorts':
        await dbUpdate('webport', 3030)
        await dbUpdate('controlport', 4040)
        await updateSetupFromDb()
        return 'ok'
      default:
        logger.warn(`Unknown command ${command}`)
        return `Unknown command`
    }
  } catch (error) {
    logger.error(`tcp parser error: ${error.message}`)
    return 'error'
  }
}
