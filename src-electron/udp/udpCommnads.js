import dgram from 'dgram'
import { Buffer } from 'node:buffer'

import { pStatus } from '/src-electron/defaultVal'
import logger from '../logger'
import { getVideoFilesName, getAudioFilesName } from '../fn/folders'
import { openFileSimple } from '/src-electron/fn/files'
import { fnPlay, fnStop } from '../fn/player'

function dec2hex(dec, padding) {
  return parseInt(dec, 10).toString(16).padStart(padding, '0')
}

function utf8StringToUtf16String(str) {
  var utf16 = []
  for (var i = 0, strLen = str.length; i < strLen; i++) {
    utf16.push(dec2hex(str.charCodeAt(i), 4))
  }
  return utf16.join('')
}

function fnSendUdp(msg) {
  const client = dgram.createSocket('udp4')
  const message = Buffer.from(msg)
  client.send(message, pStatus.udpsendport, pStatus.udpsendip, (err) => {
    if (err) {
      logger.error(`udp send error ${err}`)
    }
    console.log('send udp', message, pStatus.udpsendport, pStatus.udpsendip)
    client.close()
  })
}

export default async function udpParser(command) {
  try {
    const arr = command.toString().split(',')
    console.log(arr)
    let files16 = []
    switch (arr[0]) {
      case 'getvideolist':
        fnSendUdp(`getvideolist,${getVideoFilesName().join(',')}`)
        break
      case 'getaudiolist':
        fnSendUdp(`getaudiolist,${getAudioFilesName().join(',')}`)
        break
      case 'getvideolist16':
        let videoFilesName = getVideoFilesName()
        for (let item of videoFilesName) {
          files16.push(utf8StringToUtf16String(item))
        }
        fnSendUdp(`getvideolist16,${files16.join(',')}`)
        break
      case 'getaudiolist16':
        let audioFilesName = getAudioFilesName()
        for (let item of audioFilesName) {
          files16.push(utf8StringToUtf16String(item))
        }
        fnSendUdp(`getaudiolist16,${files16.join(',')}`)
        break
      case 'play':
        openFileSimple(arr[1])
        break
      case 'stop':
        fnStop()
        break
    }
  } catch (error) {
    logger.error(`UDP parser error: ${error}`)
  }
}

export { fnSendUdp }
