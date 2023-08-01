<script setup>
import { onMounted } from 'vue'
import {
  pStatus,
  fnUpdateStatus,
  fnGetFirstStatus
} from 'src/composables/useStatus'

const fnUpdateWindowSize = () => {
  API.updateFromFE({
    type: 'windowsize',
    height: window.innerHeight,
    width: window.innerWidth
  })
}

onMounted(async () => {
  window.addEventListener('resize', () => fnUpdateWindowSize())
  // get first start values and functions
  fnGetFirstStatus(await API.onPromise({ command: 'getFirstStatus' }))
  API.updateFromBE(async (args) => fnUpdateStatus(args))
  fnUpdateWindowSize()
})
</script>

<template>
  <q-layout view="lHh Lpr lFf" class="layout">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.layout {
  background: v-bind(pStatus.bgColor);
}
</style>
