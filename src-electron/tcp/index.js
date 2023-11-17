import net from 'net'
import db from '/src-electron/db'
import logger from '/src-electron/logger'

import tcpCommands from './tcpCommands'

const sockets = new Set()
const ipaddr = '0.0.0.0'

let controlServer = net.createServer((socket) => {
  logger.info(`TCP Socket -- ${socket.address().address} Connected`)
  sockets.add(socket)
  // sockets.push(socket)
  socket.setEncoding(`utf8`)
  socket.on('data', async (data) => {
    // console.log(await tcpCommands(data))
    socket.write(await tcpCommands(data))
  })
  socket.on('end', () => {
    sockets.delete(socket)
    logger.info(`TCP Socket -- ${socket.address().address} disconnected`)
  })

  socket.on('error', (err) => {
    logger.error(`TCP Socket -- ${socket.address().address} error: ${err}`)
  })
})

controlServer.on('error', (err) => {
  logger.error(`TCP Control Server Error: ${err}`)
})

async function initControlServer(port) {
  let controlPort
  if (port === undefined || port === null) {
    controlPort = 4040
  } else {
    controlPort = port
  }

  controlServer.listen(controlPort, ipaddr, () => {
    logger.info(`TCP Control Server listening on ${ipaddr}: ${controlPort}`)
  })
}

function broadcastControlSockets(data) {
  for (let sock in sockets) {
    console.log(sock + 'send')
    sock.write(data)
  }
}

export { controlServer, initControlServer, broadcastControlSockets }
