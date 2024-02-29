<script setup>
import { computed } from 'vue'
import { pStatus } from '../composables/useStatus.js'

const darkmode = computed(() => pStatus.value.darkmode)
</script>

<template>
  <img
    style="width: 200px"
    :src="darkmode ? 'harman-logo-bk.svg' : 'harman-logo.svg'"
  />
</template>

<style scoped></style>
