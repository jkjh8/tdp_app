import web from '../web'
import http from 'http'
import { Server } from 'socket.io'
import logger from '/src-electron/logger'

const httpServer = http.createServer(web)
const io = new Server(httpServer)

// set io namespace
const ui = io.of('/ui')
const server = io.of('/server')

ui.on('connection', (socket) => {
  logger.info(`socket.io connected ui : ${socket.id}`)

  socket.on('disconnect', () => {
    logger.info(`socket.io disconnected ui : ${socket.id}`)
  })
})

server.on('connection', (socket) => {
  logger.info(`socket.io connected server : ${socket.id}`)

  socket.on('disconnect', () => {
    logger.info(`socket.io disconnected server : ${socket.id}`)
  })
})

// start server listening
const fnStartServer = (HTTP_PORT) => {
  try {
    httpServer.listen(HTTP_PORT, () => {
      logger.info(`Web server listening on port ${HTTP_PORT}`)
    })
  } catch (error) {
    logger.error(`Web server open error: ${error}`)
  }
}

export { io, ui, server, httpServer, fnStartServer }
