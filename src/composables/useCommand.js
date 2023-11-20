import { ref } from 'vue'
import { pStatus, pMode } from 'src/composables/useStatus'
import { vp } from 'src/composables/useVideoPlayer'
import { imgSource } from 'src/composables/useImage'

const fnOpenFile = (args) => {
  console.log('Open file', args)
  try {
    vp.value.pause()
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
    case 'stop':
      vp.value.pause()
      pMode.value = 'logo'
      break
    case 'panning':
      if (args.value === 'start') {
        vp.value.pause()
      } else {
        vp.value.play()
      }
      break
    case 'seek':
      vp.value.currentTime = args.time
      break
    case 'toggleFullscreen':
      console.log('toggle fullscreen')
      break
    case 'setFullscreen':
      console.log('fullscreen', args.value)
      break
    case 'mode':
      pMode.value = args.value
      break
    case 'device':
      vp.value.setSinkId(args.value)
      break
  }
}
export { fnOpenFile, fnPCommands }
