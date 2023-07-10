import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('API', {
  onPromise: async (args) => {
    return await ipcRenderer.invoke('onPromise', { ...args })
  },
  updateFromFE: (args) => {
    ipcRenderer.send('updateFromFE', { ...args })
  },
  fileOpen: (fn) => {
    ipcRenderer.on('fileOpen', (e, ...args) => {
      fn(...args)
    })
  },
  pCommnad: (fn) => {
    ipcRenderer.on('pCommand', (e, ...args) => {
      fn(...args)
    })
  },
  updateFromBE: (fn) => {
    ipcRenderer.on('updateFromBE', (e, ...args) => {
      fn(...args)
    })
  }
})
