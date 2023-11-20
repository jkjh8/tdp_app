import { BrowserWindow as bw } from 'electron'
import { pStatus } from '/src-electron/defaultVal'
import db from '/src-electron/db'
import { ui } from '/src-electron/web/io'
import updateSetupFromDb from '../updateSetupFromDb'

const fnPlay = () => {
  switch (pStatus.file.type) {
    case 'audio':
    case 'video':
      bw.fromId(1).webContents.send('pCommands', { command: 'play' })
      break
    case 'image':
      pStatus.playBtn = true
      ui.emit('pStatus', { ...pStatus })
      break
  }
}

const fnPause = () => {
  bw.fromId(1).webContents.send('pCommands', { command: 'pause' })
}

const fnStop = () => {
  bw.fromId(1).webContents.send('pCommands', { command: 'stop' })
  pStatus.status.playBtn = false
  pStatus.status.status = ''
  ui.emit('pStatus', { ...pStatus })
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

const fnToggleFullscreen = () => {
  bw.fromId(1).webContents.send('pCommands', { command: 'toggleFullscreen' })
}

const fnSetFullscreen = async (value) => {
  // bw.fromId(1).webContents.send('pCommands', {
  //   command: 'setFullscreen',
  //   value: value
  // })
  await db.update({ key: 'fullscreen' }, { $set: { value } }, { upsert: true })
  await updateSetupFromDb()
  ui.emit('pStatus', { ...pStatus })
  bw.fromId(1).setFullScreen(value)
}

const fnSetLogo = async (value) => {
  return await db.update(
    { key: 'showlogo' },
    { $set: { value: value } },
    { upsert: true }
  )
}

const fnStartAtFullscreen = async (value) => {
  await db.update(
    { key: 'startatfullscreen' },
    { $set: { value: value } },
    { upsert: true }
  )
  await updateSetupFromDb()
  ui.emit('pStatus', { ...pStatus })
}

export {
  fnPlay,
  fnPause,
  fnStop,
  fnSeek,
  fnPanning,
  fnToggleFullscreen,
  fnSetLogo,
  fnStartAtFullscreen,
  fnSetFullscreen
}
