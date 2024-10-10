import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowseWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO:
  })
} catch (error) {
  console.error(error)
}
