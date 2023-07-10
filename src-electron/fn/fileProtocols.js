import { protocol } from 'electron'
import logger from '/src-electron/logger'

const setLocalFileProtocol = () => {
  protocol.registerFileProtocol('local', (req, cb) => {
    const pathname = decodeURIComponent(req.url.replace('local://', ''))
    try {
      logger.info('local file protocol registered')
      cb(pathname)
    } catch (err) {
      logger.error(`local file protocol loading faild: ${err}`)
    }
  })
}

export { setLocalFileProtocol }
