import { BrowserWindow as bw } from 'electron'
import { pStatus } from '/src-electron/defaultVal'

const fnPlay = () => {
  switch (pStatus.file.type) {
    case 'audio':
    case 'video':
      bw.fromId(1).webContents.send('pCommands', { command: 'play' })
      break
  }
}

const fnPause = () => {
  bw.fromId(1).webContents.send('pCommands', { command: 'pause' })
}

const fnSeek = (time) => {
  bw.fromId(1).webContents.send('pCommands', { command: 'seek', time: time })
}

const fnPanning = (value) => {
  bw.fromId(1).webContents.send('pCommands', {
    command: 'panning',
    value: value
  })
}

export { fnPlay, fnPause, fnSeek, fnPanning }
