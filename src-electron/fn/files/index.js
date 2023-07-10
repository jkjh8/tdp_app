import path from 'path'
import { dialog, BrowserWindow as bw } from 'electron'
import ffmpeg from 'fluent-ffmpeg'
import sizeOf from 'image-size'

import logger from '/src-electron/logger'
import db from '/src-electron/db'
import { pStatus } from '/src-electron/defaultVal'

ffmpeg.setFfmpegPath(
  require('ffmpeg-static').replace('app.asar', 'app.asar.unpacked')
)
ffmpeg.setFfprobePath(
  require('ffprobe-static').path.replace('app.asar', 'app.asar.unpacked')
)

const getFileDialog = async () => {
  return dialog.showOpenDialogSync({
    title: 'Select Media File',
    filters: [
      {
        name: 'Media',
        extensions: [
          'wav',
          'mp3',
          'mp4',
          'mkv',
          'mov',
          'jpg',
          'bmp',
          'gif',
          'png',
          'jpeg'
        ]
      },
      { name: 'Video', extensions: ['mp4', 'mkv', 'mov'] },
      { name: 'Audio', extensions: ['mp3', 'wav'] },
      { name: 'Image', extensions: ['jpg', 'bmp', 'png', 'jpeg', 'gif'] },
      { name: 'All Files', extensions: ['*'] }
    ],
    properties: ['openFile']
  })
}

const getMeidaFileMetaData = (file) => {
  ffmpeg.ffprobe(file, (err, meta) => {
    if (err) return logger.error(`metadata read failed: ${err}`)
    pStatus.file.meta = meta
    bw.fromId(1).webContents.send('status', pStatus)
  })
}

const openFile = async (filePath) => {
  try {
    const parsedFilePath = path.parse(filePath)
    //update pStatus file values
    pStatus.file.name = parsedFilePath.name + parsedFilePath.ext
    pStatus.file.ext = parsedFilePath.ext
    pStatus.file.src = encodeURI(filePath)
    pStatus.file.filePath = filePath
    // file types
    switch (pStatus.file.ext) {
      case '.mp4':
      case '.mkv':
      case 'webm':
        getMeidaFileMetaData(filePath)
        pStatus.file.type = 'video'
        break
      case '.mp3':
      case '.aac':
      case '.wav':
        getMeidaFileMetaData(filePath)
        pStatus.file.type = 'audio'
        break
      case '.jpg':
      case '.jpeg':
      case '.png':
      case '.bmp':
      case '.gif':
        pStatus.file.type = 'image'
        pStatus.file.dimensions = sizeOf(filePath)
        break
    }
    bw.fromId(1).webContents.send('fileOpen', pStatus)
    // update current source file
    await db.update(
      { key: 'currentSrc' },
      { $set: { source: filePath } },
      { upsert: true }
    )
    // update recent file
    addRecentlyFile(filePath)
  } catch (err) {
    logger.error(`file open faild: ${err}`)
  }
}

const openFileDialog = async () => {
  try {
    const filePath = await getFileDialog()
    console.log(filePath)
    await openFile(filePath[0])
  } catch (err) {
    logger.error(`open file dialog error: ${err}`)
  }
}

const addRecentlyFile = async (filePath) => {
  pStatus.recentlyFile.unshift(filePath)
  if (pStatus.recentlyFile.length > 10) {
    pStatus.recentlyFile.pop()
  }
  await db.update(
    { key: 'recently' },
    { $set: { list: pStatus.recentlyFile } },
    { upsert: true }
  )
}
export {
  getFileDialog,
  getMeidaFileMetaData,
  openFile,
  openFileDialog,
  addRecentlyFile
}
