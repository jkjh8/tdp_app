import express from 'express'
import { app } from 'electron'
import path from 'path'
import fs from 'fs'
import multer from 'multer'
import logger from '/src-electron/logger'

const router = express.Router()
// const docu = app.getPath('documents')

// get Documemts and Media folders
const homeFolder = app.getPath('home')
const mediaFolder = path.resolve(homeFolder, 'Media')

logger.info(`Home folder ${homeFolder}`)
logger.info(`Media folder ${mediaFolder}`)

// check and create Media folder
if (!fs.existsSync(mediaFolder)) {
  fs.mkdirSync(mediaFolder)
}

// multer get upload folder and filename
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     // check upload path from headers
//     const { uploadPath } = req.headers
//     const currentPath = uploadPath ? path.resolve(mediaFolder, uploadPath) : mediaFolder
//     cb(null, currentPath)
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname)
//   }
// })

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // check upload path from headers
      const { uploadPath } = req.headers
      const currentPath = uploadPath
        ? path.resolve(mediaFolder, uploadPath)
        : mediaFolder
      cb(null, currentPath)
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname)
    }
  })
})

// routes
// get files
router.get('/', async (req, res) => {
  try {
    let mediaFiles = []
    // get files name from media folder
    const files = fs.readdirSync(mediaFolder)
    console.log(files)
    // get files info
    for (let curr of files) {
      const fullpath = path.resolve(mediaFolder, curr)
      const state = fs.statSync(fullpath)
      const paths = path.parse(fullpath)
      mediaFiles.push({
        fullpath: fullpath,
        ...state,
        ...paths
      })
    }

    res.status(200).json({ files: mediaFiles, defaultpath: mediaFolder })
  } catch (err) {
    logger.error('Web file get error: ' + err)
    res.status(500).json(err)
  }
})

// upload files
router.post('/upload', upload.any(), (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => file.originalname)
    logger.info(`update files: ${JSON.stringify(uploadedFiles)}`)
    res.status(200).json({ result: true, files: uploadedFiles })
  } catch (err) {
    logger.error('Web file upload error: ' + err)
    res.status(500).json(err)
  }
})

export default router
