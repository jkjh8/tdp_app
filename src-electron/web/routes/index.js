import path from 'path'
import express from 'express'

const router = express.Router()
const publicPath = path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER)

// static path for web
router.get('/', (req, res, next) => {
  res.sendFile(path.join(publicPath, 'spa', 'index.html'))
})
