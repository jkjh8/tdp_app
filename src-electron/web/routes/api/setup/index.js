import express from 'express'
import db from '/src-electron/db'
import { BrowserWindow as bw } from 'electron'
import { ui } from '/src-electron/web/io'
import { pStatus } from '/src-electron/defaultVal'
import logger from '/src-electron/logger'
import updateSetupFromDb from '/src-electron/fn/updateSetupFromDb'

const router = express.Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json({ result: true, status: pStatus })
  } catch (error) {
    logger.error(`web router setup ${error.message}`)
    res.status(500).json({ result: false, error })
  }
})

router.post('/', async (req, res) => {
  try {
    const status = req.body
    console.log(status)
    await db.update(
      { key: 'showlogo' },
      { $set: { value: status.showlogo } },
      { upsert: true }
    )
    await db.update(
      { key: 'startatfullscreen' },
      { $set: { value: status.startatfullscreen } },
      { upsert: true }
    )
    await db.update(
      { key: 'loadandplay' },
      {
        $set: {
          value: status.loadandplay
        }
      },
      { upsert: true }
    )
    await db.update({ key: '' })
    await updateSetupFromDb()
    ui.emit('pStatus', { ...pStatus })
    res.status(200).json({ result: true, status: pStatus })
  } catch (error) {
    res.status(500).json({ result: false, error })
  }
})

router.put('/device', async (req, res) => {
  try {
    const device = req.body.device
    console.log(device)
    await db.update(
      { key: 'device' },
      { $set: { value: device } },
      { upsert: true }
    )
    bw.fromId(1).webContents.send('pCommands', {
      command: 'device',
      value: device
    })
    await updateSetupFromDb()
    ui.emit('pStatus', { ...pStatus })
    res.status(200).json({ result: true, status: pStatus })
  } catch (error) {
    logger.error(`web setup device ${error.message}`)
    res.status(500).json({ result: false, error })
  }
})

export default router
