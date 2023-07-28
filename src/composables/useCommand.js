import { ref } from 'vue'
import { pStatus, pMode } from 'src/composables/useStatus'
import { vp } from 'src/composables/useVideoPlayer'
import { imgSource } from 'src/composables/useImage'

const fnOpenFile = (args) => {
  console.log('Open file', args)
  try {
    switch (args.file.type) {
      case 'video':
        pMode.value = 'video'
        vp.value.src = `local://${args.file.src}`
        break
      case 'audio':
        pMode.value = 'audio'
        vp.value.src = `local://${args.file.src}`
        break
      case 'image':
        pMode.value = 'image'
        imgSource.value = `local://${args.file.src}`
        break
    }
  } catch (err) {
    console.error(err)
  }
}

const fnPCommands = (args) => {
  console.log(args)
  switch (args.command) {
    case 'play':
      vp.value.play()
      break
    case 'pause':
      vp.value.pause()
      break
  }
}
export { fnOpenFile, fnPCommands }
