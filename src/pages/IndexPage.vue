<script setup>
import { onMounted } from 'vue'
import ShowLogo from 'src/components/ShowLogo'
import ShowImg from 'src/components/ShowImage'
import VideoPlayer from 'src/components/VideoPlayer'
import {
  pStatus,
  pMode,
  bgColor,
  fnUpdateStatus,
  fnGetFirstStatus
} from 'src/composables/useStatus'
import { fnOpenFile, fnPCommands } from 'src/composables/useCommand'

onMounted(async () => {
  API.updateFromBE((args) => fnUpdateStatus(args))
  API.fileOpen((args) => fnOpenFile(args))
  API.pCommands((args) => {
    console.log('pcommands: ' + args)
    fnPCommands(args)
  })
  // get first start values and functions
  fnGetFirstStatus(await API.onPromise({ command: 'getFirstStatus' }))
})
</script>

<template>
  <q-page class="flex flex-center backgroundColor">
    <ShowLogo v-show="pMode === 'logo'" class="fw" />
    <VideoPlayer v-show="pMode === 'video'" class="fw" />
    <ShowImg v-show="pMode === 'image'" class="fw" />
  </q-page>
</template>

<style scoped>
.fw {
  width: 100%;
}
.backgroundColor {
  background: v-bind(bgColor);
}
</style>
