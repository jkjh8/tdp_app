import path from 'path'
import express from 'express'
import player from './player'
import files from './files'
const router = express.Router()

// static path for web
router.use('/player', player)
router.use('/files', files)

export default router
