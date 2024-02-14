<script setup>
import store from '@/store/index.js'
import ButtonPopupClose from '@/components/popup/PopupButtonClose.vue'
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
    <div class="bg-white rounded-lg p-8">
      <div class="flex justify-between mb-4">

        <h2 class="text-xl font-bold">Результат: </h2>
        <ButtonPopupClose />
      </div>
      <div v-html="store.getters.getResult"></div>
    </div>
  </div>
</template>

<style scoped>

</style>
