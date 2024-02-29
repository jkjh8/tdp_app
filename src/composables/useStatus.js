import { ref } from 'vue'

// variables
const pStatus = ref({})
const pMode = ref(null)
const bgColor = ref('#fff')
// functions
//status update
const fnUpdateStatus = (status) => {
  pStatus.value = { ...status }
}

// on logo
const fnGetFirstStatus = (status) => {
  if (status.showlogo) {
    pMode.value = 'logo'
  }
  // bgColor.value = status.bgColor
  fnUpdateStatus(status)
}

export { pStatus, pMode, bgColor, fnUpdateStatus, fnGetFirstStatus }
