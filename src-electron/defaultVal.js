const pStatus = {
  mode: 'single',
  uuid: '',
  name: '',
  ipaddress: '',
  macaddress: '',
  file: {
    type: ''
  },
  status: {
    status: '',
    playBtn: false
  },
  playlist: {
    name: '',
    list: []
  },
  device: {
    audiocurrentdevice: 'default',
    audiodevicelist: [],
    width: 800,
    height: 600
  },
  fullscreen: false,
  showlogo: true,
  bgColor: '#fff',
  recentlyFile: []
}

const pTimes = {
  duration: 0,
  currentTime: 0
}

export { pStatus, pTimes }
