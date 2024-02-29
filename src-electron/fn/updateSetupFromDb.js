import db from '/src-electron/db'
import { BrowserWindow as bw } from 'electron'
import { pStatus } from '../defaultVal'
import { ui } from '/src-electron/web/io'

export default async function () {
  const setupVal = await db.find()
  for (let i = 0; i < setupVal.length; i++) {
    switch (setupVal[i].key) {
      case 'showlogo':
        pStatus.showlogo = setupVal[i].value
        break
      case 'windowSize':
        pStatus.device.width = setupVal[i].width
        pStatus.device.height = setupVal[i].height
        break
      case 'fullscreen':
        pStatus.fullscreen = setupVal[i].value
        break
      case 'uuid':
        pStatus.uuid = setupVal[i].value
        break
      case 'name':
        pStatus.name = setupVal[i].value
        break
      case 'macaddress':
        pStatus.macaddress = setupVal[i].value
        break
      case 'ipaddress':
        pStatus.ipaddress = setupVal[i].value
        break
      case 'mode':
        pStatus.mode = setupVal[i].mode
        break
      case 'playlist':
        pStatus.playlist.name = setupVal[i].name
        pStatus.playlist.list = setupVal[i].list
        break
      case 'recently':
        pStatus.recentlyFile = setupVal[i].list
        break
      case 'bgColor':
        pStatus.bgColor = setupVal[i].value
        break
      case 'webport':
        pStatus.webport = setupVal[i].value
        break
      case 'udpport':
        pStatus.udpport = setupVal[i].value
        break
      case 'udpsendport':
        pStatus.udpsendport = setupVal[i].value
        break
      case 'udpsendip':
        pStatus.udpsendip = setupVal[i].value
        break
      case 'startatfullscreen':
        pStatus.startatfullscreen = setupVal[i].value
        break
      case 'loadandplay':
        pStatus.loadandplay = setupVal[i].value
        break
      case 'device':
        pStatus.device.audiocurrentdevice = setupVal[i].value
        break
      case 'controlport':
        pStatus.controlport = setupVal[i].value
        break
      case 'darkmode':
        pStatus.darkmode = setupVal[i].value
        break
    }
  }
  ui.emit('pStatus', { ...pStatus })
  // bw.fromId(1).webContents.send('updateFromBE', pStatus)
}
