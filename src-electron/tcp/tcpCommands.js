import logger from '/src-electron/logger'
import db, { dbUpdate } from '/src-electron/db'
import updateSetupFromDb from '../fn/updateSetupFromDb.js'
import {
  getMediaFolder,
  getFileNames,
  getVideoFilesName,
  getAudioFilesName,
  getImageFilesName
} from '../fn/folders/index.js'
import {
  fnPlay,
  fnPause,
  fnStop,
  fnSeek,
  fnPanning,
  fnToggleFullscreen,
  fnSetFullscreen,
  fnSetLogo,
  fnStartAtFullscreen
} from '../fn/player'

import { openFileSimple } from '../fn/files'

import { ui } from '/src-electron/web/io'
import { pStatus } from '/src-electron/defaultVal'

function dec2hex(dec, padding) {
  return parseInt(dec, 10).toString(16).padStart(padding, '0')
}

function utf8StringToUtf16String(str) {
  var utf16 = []
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    utf16.push(dec2hex(str.charCodeAt(i), 4))
  }
  return utf16
}
export default async function tcpParser(command) {
  try {
    const arr = command.split(',')
    let files16 = []
    switch (arr[0]) {
      case 'getfile':
        return JSON.stringify(getMediaFolder())
      case 'getfilename':
        return JSON.stringify(getFileNames())
      case 'setloadandplay':
        await dbUpdate('loadandplay', true)
        await updateSetupFromDb()
        return 'OK'
      case 'resetloadandplay':
        await dbUpdate('loadandplay', false)
        await updateSetupFromDb()
        return 'OK'
      case 'setstartatfullscreen':
        await dbUpdate('startatfullscreen', true)
        await updateSetupFromDb()
        return 'OK'
      case 'resetstartatfullscreen':
        await dbUpdate('startatfullscreen', false)
        await updateSetupFromDb()
        return 'OK'
      case 'resetAllPorts':
        await dbUpdate('webport', 3030)
        await dbUpdate('controlport', 4040)
        await updateSetupFromDb()
        return 'OK'
      case 'getfilename16':
        let filesname = getFileNames()
        for (let item of filesname) {
          files16.push(utf8StringToUtf16String(item))
        }
        return JSON.stringify(files16)
      case 'getaudiofilename16':
        let audioFilesName = getAudioFilesName()
        for (let item of audioFilesName) {
          files16.push(utf8StringToUtf16String(item))
        }
        return JSON.stringify(files16)
      case 'getvideofilename16':
        let videoFilesName = getVideoFilesName()
        for (let item of videoFilesName) {
          files16.push(utf8StringToUtf16String(item))
        }
        return JSON.stringify(files16)
      case 'getimagefilename16':
        let imageFilesName = getImageFilesName()
        for (let item of imageFilesName) {
          files16.push(utf8StringToUtf16String(item))
        }
        return JSON.stringify(files16)
      case 'play':
        fnPlay()
        return 'OK'
      case 'stop':
        fnStop()
        return 'OK'
      case 'pause':
        fnPause()
        return 'OK'
      case 'load':
        // arr[1] filename
        try {
          openFileSimple(arr[1])
          return 'OK'
        } catch (error) {
          return 'ERROR'
        }
      case 'fullscreen':
        fnSetFullscreen(arr[1] === 'true')
        return 'OK'
      default:
        logger.warn(`Unknown command ${command}`)
        return `Unknown command`
    }
  } catch (error) {
    logger.error(`tcp parser error: ${error.message}`)
    return 'error'
  }
}
