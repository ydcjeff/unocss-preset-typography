// @ts-check

import fs from 'fs'
import path from 'path'
import url from 'url'

const snapshotDirName = '__snapshots__'
const _dirname = path.dirname(url.fileURLToPath(import.meta.url))

/**
 *
 * @param {string} data
 * @param {string} fname
 * @param {boolean} update
 * @returns data
 */
export function genSnapshot(data, fname, update) {
  const snapshotDir = path.resolve(_dirname, snapshotDirName)
  const fpath = path.join(snapshotDir, fname + '.css')

  if (!fs.existsSync(snapshotDir)) {
    fs.mkdirSync(snapshotDir)
  }

  if (!fs.existsSync(fpath) || update) {
    fs.writeFileSync(fpath, data, 'utf-8')
    return data
  } else {
    return fs.readFileSync(fpath, 'utf-8')
  }
}
