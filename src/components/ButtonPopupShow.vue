<script setup>
import store from '@/store/index.js'

defineProps({
  color: {
    type: String,
    /*default: 'blue'*/
  }
})
</script>

<template>
  <button :class="color"
          class="px-6 py-3 text-white  rounded-md  focus:outline-none"
          @click="store.commit('showPopup')">
    <slot></slot>
  </button>
</template>

<style scoped>
.blue {
  @apply bg-blue-500 hover:bg-blue-600 active:bg-blue-700
}

.green {
  @apply bg-green-500 hover:bg-green-600 active:bg-green-700
}
</style>
