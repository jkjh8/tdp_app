import dgram from 'dgram'
import { pStatus, pTimes } from '../defaultVal'
import logger from '../logger'

const multicastAddress = '228.228.228.114'
const multicastPort = 12300
let interval
const multicast = dgram.createSocket('udp4')

const initMulticast = () => {
  try {
    multicast.bind(multicastPort, () => {
      multicast.setBroadcast(true)
      multicast.setMulticastTTL(128)
      multicast.addMembership(multicastAddress)
      logger.info('Multicast socket initialized')
    })
  } catch (err) {
    logger.error('Multicast socket initialization error: ' + err)
  }
}

const sendMulticastToStatus = () => {
  try {
    const status = JSON.stringify({ pStatus, pTimes })
    multicast.send(status, multicastPort, multicastAddress)
  } catch (err) {
    logger.error('Multicast send error: ' + err)
  }
}
const setMulticastInterval = () => {
  interval = setInterval(sendMulticastToStatus, 1000)
}

const clearMulticastInterval = () => {
  clearInterval(interval)
}

export {
  initMulticast,
  sendMulticastToStatus,
  setMulticastInterval,
  clearMulticastInterval
}
