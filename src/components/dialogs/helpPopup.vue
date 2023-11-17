<script setup>
import { ref, onMounted } from 'vue'
import { useDialogPluginComponent } from 'quasar'
import { pStatus } from 'src/composables/useStatus.js'
const emit = defineEmits([...useDialogPluginComponent.emits])

// initialize
const { dialogRef, onDialogCancel, onDialogOK } = useDialogPluginComponent()
</script>

<template>
  <q-dialog ref="dialogRef">
    <div class="q-dialog-plugin card_background">
      <div class="row justify-center">
        <q-img src="logo2.png" style="width: 50px" />
      </div>
      <div class="row justify-center text-h5 text-bold">Media Player</div>
      <q-separator class="q-my-sm" />
      <div class="q-px-md q-pb-lg">
        <div class="row no-wrap justify-between">
          <span>IP ADDRESS</span>
          <span>
            <div v-for="nic in pStatus.nics" :key="nic">
              <div>
                {{ nic.ipv4 }}
              </div>
              <div class="text-caption">
                {{ nic.mac }}
              </div>
            </div>
          </span>
        </div>

        <div class="row no-wrap justify-between">
          <span>WEB PORT</span>
          <span>{{ pStatus.webport }}</span>
        </div>

        <div class="row no-wrap justify-between">
          <span>TCP PORT</span>
          <span>{{ pStatus.controlport }}</span>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<style scoped>
.card_background {
  background: #ffffffbb;
  border-radius: 10px;
}
</style>
