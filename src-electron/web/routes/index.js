import path from 'path'
import express from 'express'
import api from './api'

const router = express.Router()
const publicPath = path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER)

//routes
router.use('/api', api)

// static path for web
router.get('/', (req, res, next) => {
  res.sendFile(path.join(publicPath, 'spa', 'index.html'))
})

export default router
