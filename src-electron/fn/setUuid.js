import { pStatus } from '/src-electron/defaultVal'
import { v4 as uuidv4 } from 'uuid'
import db from '/src-electron/db'
import logger from '/src-electron/logger'

export default async function () {
  if (pStatus.uuid === '') {
    pStatus.uuid = uuidv4()
    await db.update(
      { key: 'uuid' },
      { $set: { value: pStatus.uuid } },
      { upsert: true }
    )
    logger.warn(`Updated UUID: ${pStatus.uuid}`)
  } else {
    logger.info(`UUID: ${pStatus.uuid}`)
  }
}
