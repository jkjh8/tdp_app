import { app } from 'electron'
import path from 'path'
import Datastore from 'nedb-promises'
import logger from '/src-electron/logger'

let db
let dbPath

const dbInit = (file) => {
  dbPath = path.resolve(app.getPath('userData'), 'tdp', file)
  return new Datastore({
    filename: dbPath,
    timestampData: true,
    autoload: true
  })
}
try {
  db = dbInit('datastore')
  logger.info(`DB initialization DB path: ${dbPath}`)
} catch (err) {
  logger.error(`DB not initialized ${err}`)
}

async function dbUpdate(key, value) {
  return await db.update({ key }, { $set: { value } }, { upsert: true })
}

export default db
export { dbUpdate }
