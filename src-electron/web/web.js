import path from 'path'
import express from 'express'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import httpLogger from 'morgan'
import session from 'express-session'
import logger from '/src-electron/logger'
// set dot env
import * as dotenv from 'dotenv'
dotenv.config()

// quasar electron public folder
const publicFolder = path.resolve(__dirname, process.env.QUASAR_PUBLIC_FOLDER)

const web = express()

// middleware
web.use(express.json())
web.use(express.urlencoded({ extended: false }))
web.use(cookieParser())
web.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true
    }
  })
)

// debug mode
if (process.env.NODE_ENV === 'development') {
  web.use(httpLogger('dev'))
  web.use(
    cors({
      origin: (origin, callback) => {
        callback(null, origin)
      }
      // credentials: true
    })
  )
}

// static path for web
web.use(express.static(path.join(publicFolder, 'spa')))
export default web
