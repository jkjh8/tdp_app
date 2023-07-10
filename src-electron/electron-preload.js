import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('API', {
  onPromise: async (args) => {
    return await ipcRenderer.invoke('onPromise', { ...args })
  },
  update: (args) => {
    ipcRenderer.send('update', { ...args })
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
  return: (fn) => {
    ipcRenderer.on('return', (e, ...args) => {
      fn(...args)
    })
  }
})
