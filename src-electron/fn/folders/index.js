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

function getVideoFilesName() {
  const mediaFiles = getMediaFolder()
  const videoFiles = []
  for (let item of mediaFiles) {
    switch (item.ext) {
      case '.mp4':
      case '.mkv':
        videoFiles.push(item)
        break
    }
  }
  return videoFiles.map((e) => e.base)
}

function getAudioFilesName() {
  const mediaFiles = getMediaFolder()
  const audioFiles = []
  for (let item of mediaFiles) {
    switch (item.ext) {
      case '.mp3':
      case '.wav':
      case '.asf':
      case 'aac':
        audioFiles.push(item)
        break
    }
  }
  return audioFiles.map((e) => e.base)
}

function getImageFilesName() {
  const mediaFiles = getMediaFolder()
  const imageFiles = []
  for (let item of mediaFiles) {
    switch (item.ext) {
      case '.png':
      case '.jpg':
        imageFiles.push(item)
        break
    }
  }
  return imageFiles.map((e) => e.base)
}

export {
  homeFolder,
  mediaFolder,
  getMediaFolder,
  getFileNames,
  getVideoFilesName,
  getAudioFilesName,
  getImageFilesName
}
