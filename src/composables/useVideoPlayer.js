import { ref } from 'vue'

//variable
const vp = ref(null) // video player
const audioDevices = ref([])
const audioDevice = ref('default')

//functions
// update status returns
const fnUpv = (args) => {
  API.return(args)
}
// get audio devices
const fnGetAudioDevioces = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices()
  audioDevices.value = devices.find((deivce) => deivce.kind === 'audiooutput')
  fnUpv({ type: 'updateAudioDevices', list: audioDevice.value })
}

// video player callback
const pCallback = (obj) => {
  obj.onplaying = (e) => {
    fnUpv({ type: 'playing', readyState: obj.readyState })
  }
  obj.onabort = () => {
    fnUpv({ type: 'abrort', readyState: obj.readyState })
  }
  obj.canplay = () => {
    fnUpv({ type: 'canplay', readyState: obj.readyState })
  }
  obj.oncanplaythrough = () => {
    fnUpv({ type: 'oncanplaythrough', readyState: obj.readyState })
  }
  obj.ondurationchange = () => {
    fnUpv({ type: 'durationchange', duration: obj.duration })
  }
  obj.onemptied = () => {
    fnUpv({ type: 'emptied', readyState: obj.readyState })
  }
  obj.onended = () => {
    fnUpv({ type: 'ended', readyState: obj.readyState })
  }
  obj.onerror = (e) => {
    fnUpv({ type: 'error', error: obj.error, readyState: obj.readyState })
  }
  obj.onloadeddata = () => {
    fnUpv({
      type: 'loadeddata',
      src: obj.src,
      readyState: obj.readyState,
      sinkId: obj.sinkId
    })
  }
  obj.onloadedmetadata = () => {
    fnUpv({
      type: 'loadedmetadata',
      src: obj.src,
      readyState: obj.readyState,
      sinkId: obj.sinkId
    })
  }
  obj.onloadstart = () => {
    fnUpv({ type: 'loadstart', readyState: obj.readyState })
  }
  obj.onpause = () => {
    fnUpv({ type: 'paused', readyState: obj.readyState })
  }
  obj.onplay = () => {
    fnUpv({ type: 'play', readyState: obj.readyState })
  }
  obj.onstalled = () => {
    fnUpv({ type: 'stalled', readyState: obj.readyState })
  }
  obj.onsuspend = () => {
    fnUpv({ type: 'suspend', readyState: obj.readyState })
  }
  obj.onwaiting = () => {
    fnUpv({ type: 'waiting', readyState: obj.readyState })
  }
  obj.ontimeupdate = () => {
    fnUpv({
      type: 'timeupdate',
      currentTime: obj.currentTime
    })
  }
  obj.onvolumechange = () => {
    if (obj.muted) {
      fnUpv({ type: 'volumechanged', volume: 0 })
    } else {
      fnUpv({ type: 'volumdchanged', volume: obj.volume })
    }
  }
}

export { vp, audioDevices, audioDevice, fnUpv, fnGetAudioDevioces, pCallback }
