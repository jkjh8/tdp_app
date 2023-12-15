import dgram from 'dgram'
import logger from '../logger'
import udpParser from './udpCommnads'

const server = dgram.createSocket('udp4')

function initUdpServer(port) {
  server.on('error', (err) => {
    logger.error(`UDP server error: ${err}`)
  })

  server.on('message', (msg, rinfo) => {
    udpParser(msg)
  })

  server.on('listening', () => {
    const address = server.address()
    logger.info(`UDP server listening on ${address.address}:${address.port}`)
  })

  server.bind(port)
}

export { initUdpServer }
