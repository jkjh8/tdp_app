<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'
import {
  pStatus,
  fnUpdateStatus,
  fnGetFirstStatus
} from 'src/composables/useStatus'

import AboutDialog from 'src/components/dialogs/helpPopup'

const $q = useQuasar()

const fnUpdateWindowSize = () => {
  API.updateFromFE({
    type: 'windowsize',
    height: window.outerHeight,
    width: window.outerWidth
  })
}

onMounted(async () => {
  API.help((command) => {
    if (command.command === 'help') {
      $q.dialog({
        component: AboutDialog,
        componentProps: {
          pStatus: pStatus.value
        }
      })
    }
  })
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
