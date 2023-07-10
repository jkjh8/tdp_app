<script setup>
import { onMounted } from 'vue'
import {
  vp,
  fnGetAudioDevioces,
  pCallback
} from 'src/composables/useVideoPlayer'

onMounted(async () => {
  pCallback(vp.value)
  await fnGetAudioDevioces()
  console.log('video player mounted successfully')
})
</script>

<template>
  <video ref="vp" controls />
</template>

<style scoped></style>
