import path from 'path'
import express from 'express'
import player from './player'
import files from './files'
import setup from './setup'

const router = express.Router()

// static path for web
router.use('/player', player)
router.use('/files', files)
router.use('/setup', setup)

export default router
