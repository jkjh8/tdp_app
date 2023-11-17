const pStatus = {
  mode: 'single',
  uuid: '',
  name: '',
  nics: [],
  webport: 3030,
  controlport: 4040,
  file: {
    type: '',
    name: '',
    size: 0
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
  startatfullscreen: false,
  showlogo: true,
  bgColor: '#fff',
  recentlyFile: [],
  loadandplay: false
}

const pTimes = {
  duration: 0,
  currentTime: 0
}

export { pStatus, pTimes }
/*
Constant          Value	Description
HAVE_NOTHING	    0     No information is available about the media resource.
HAVE_METADATA	    1     Enough of the media resource has been retrieved that the metadata attributes are initialized. Seeking will no longer raise an exception.
HAVE_CURRENT_DATA	2     Data is available for the current playback position, but not enough to actually play more than one frame.
HAVE_FUTURE_DATA	3     Data for the current playback position as well as for at least a little bit of time into the future is available (in other words, at least two frames of video, for example).
HAVE_ENOUGH_DATA	4     Enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption.
*/
