import path from 'path'
import express from 'express'
import { BrowserWindow as bw } from 'electron'
import { pStatus } from '/src-electron/defaultVal'

const router = express.Router()

// static path for web
router.get('/', (req, res) => {
  try {
    res.status(200).json({ result: true, status: pStatus })
  } catch (err) {
    logger.error(`Web router error: ${err}`)
  }
})

router.get('/play', (req, res) => {
  try {
    if (pStatus.file.type === 'audio' || pStatus.file.type === 'video') {
      bw.fromId(1).webContents.send('pCommands', { command: 'play' })
      return res.status(200).json({ result: true })
    }
    return res.status(503).json({ result: false, message: 'file not found' })
  } catch (error) {
    res
      .status(500)
      .json({ result: false, error: error, message: 'server error' })
  }
})

router.get('/pause', (req, res) => {
  try {
    bw.fromId(1).webContents.send('pCommands', { command: 'pause' })
  } catch (error) {
    res
      .status(500)
      .json({ result: false, error: error, message: 'server error' })
  }
})
export default router
