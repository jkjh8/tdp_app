import web from './web'
import http from 'http'
import { Server } from 'socket.io'
import logger from '/src-electron/logger'

const HTTP_PORT = 3030
const server = http.createServer(web)
const io = new Server(server)

server.listen(HTTP_PORT, () => {
  logger.info(`Web server listening on port ${HTTP_PORT}`)
})

export { io }
