import { BrowserWindow as bw } from 'electron'

const fnPlay = () => {
  bw.fromId(1).webContents.send('pCommands', { command: 'play' })
}

const fnPause = () => {
  bw.fromId(1).webContents.send('pCommands', { command: 'pause' })
}

export { fnPlay, fnPause }
