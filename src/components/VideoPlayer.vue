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
})
</script>

<template>
  <video ref="vp" controls />
</template>

<style scoped></style>
