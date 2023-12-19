import express from 'express'
import { app } from 'electron'
import path from 'path'
import fs from 'fs'
import multer from 'multer'
import logger from '/src-electron/logger'
import { mediaFolder, getMediaFolder } from '/src-electron/fn/folders'

const router = express.Router()

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
      cb(null, decodeURIComponent(file.fieldname))
    }
  })
})

// routes
// get files
router.get('/', async (req, res) => {
  try {
    res.status(200).json({ files: getMediaFolder(), defaultpath: mediaFolder })
  } catch (error) {
    logger.error('Web file get error: ' + error)
    res.status(500).json(error)
  }
})

// upload files
router.post('/upload', upload.any(), (req, res) => {
  try {
    const uploadedFiles = req.files.map((file) => file.originalname)
    logger.info(`update files: ${JSON.stringify(uploadedFiles)}`)
    res.status(200).json({ result: true, files: uploadedFiles })
  } catch (error) {
    logger.error('Web file upload error: ' + error)
    res.status(500).json(error)
  }
})

router.delete('/', async (req, res) => {
  try {
    const { fullpath } = req.query
    if (fs.existsSync(fullpath)) {
      fs.rmSync(fullpath, { recursive: true })
    }
    res.status(200).json({ result: true })
  } catch (error) {
    logger.error('Web file delete error: ' + error)
    res.status(500).json(error)
  }
})

router.post('/rename', async (req, res) => {
  const { fullpath, newname } = req.body
  fs.rename(fullpath, path.join(mediaFolder, newname), function (err) {
    if (err) {
      logger.error('Web file rename error: ' + err)
      res.status(500).json(err)
    }
    res.status(200).json({ result: true })
  })
  // try {
  //   const { fullpath, newname } = req.body
  //   await fs.renameSync(fullpath, path.join(mediaFolder, newname))
  //   res.status(200).json({ result: true })
  // } catch (error) {
  //   logger.error('Web file rename error: ' + error)
  //   res.status(500).json(error)
  // }
})

export default router
