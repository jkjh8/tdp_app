import path from 'path'
import express from 'express'

const router = express.Router()

// static path for web
router.get('/', (req, res) => {
  console.log('/api/play')
  res.status(200).json({ result: true })
})

export default router
