import { app } from 'electron'
import path from 'path'
import fs from 'fs'

import logger from '/src-electron/logger'

const homeFolder = app.getPath('home')
const mediaFolder = path.resolve(homeFolder, 'Media')

if (!fs.existsSync(mediaFolder)) {
  fs.mkdirSync(mediaFolder)
}

logger.info(`Home folder ${homeFolder}`)
logger.info(`Media folder ${mediaFolder}`)

function getMediaFolder() {
  let mediaFiles = []
  const files = fs.readdirSync(mediaFolder)
  for (let curr of files) {
    const fullpath = path.resolve(mediaFolder, curr)
    mediaFiles.push({
      fullpath,
      ...fs.statSync(fullpath),
      ...path.parse(fullpath)
    })
  }
  return mediaFiles
}

function getFileNames() {
  const mediaFiles = getMediaFolder()
  return mediaFiles.map((e) => e.base)
}

export { homeFolder, mediaFolder, getMediaFolder, getFileNames }
