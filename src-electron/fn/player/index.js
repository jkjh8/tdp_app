import { BrowserWindow as bw } from 'electron'

const fnPlay = () => {
  bw.webContents.send({})
}
