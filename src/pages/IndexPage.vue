<script setup>
import { onMounted, computed } from 'vue'
import ShowLogo from 'src/components/ShowLogo'
import ShowImg from 'src/components/ShowImage'
import VideoPlayer from 'src/components/VideoPlayer'
import { pStatus, pMode } from 'src/composables/useStatus'
import { fnOpenFile, fnPCommands } from 'src/composables/useCommand'

const darkmode = computed(() => pStatus.value.darkmode)
onMounted(async () => {
  API.fileOpen((args) => fnOpenFile(args))
  API.pCommands((args) => {
    fnPCommands(args)
  })
})
</script>

<template>
  <q-page class="flex flex-center" :class="darkmode ? 'dark' : ''">
    <ShowLogo v-show="pMode === 'logo' || pMode === 'audio'" class="fw" />
    <VideoPlayer v-show="pMode === 'video'" class="fw" />
    <ShowImg v-show="pMode === 'image'" class="fw" />
  </q-page>
</template>

<style scoped>
.fw {
  width: 100%;
}
.dark {
  background: #111;
}
</style>
