import { ipcMain } from 'electron'
import { pStatus } from '/src-electron/defaultVal'

ipcMain.handle('onPromise', async (e, args) => {
  let result
  switch (args.command) {
    case 'getFirstStatus':
      result = pStatus
      break
  }
  return result
})
