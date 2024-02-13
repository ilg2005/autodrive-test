<script setup>

import ThePopup from '@/components/ThePopup.vue';
import store from '@/store/index.js';
import ButtonPopupShow from '@/components/ButtonPopupShow.vue'



function showPopup() {
  store.commit('showPopup');
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <header class="text-center">
      <h1 class="text-4xl font-bold">Тестовое задание</h1>
      <h2 class="text-2xl text-gray-500">на вакансию фронтенд-разработчика</h2>
    </header>

    <div class="mt-8">
      <ButtonPopupShow color="blue">Button 1</ButtonPopupShow>
      <ButtonPopupShow color="green" class="ml-4">Button 2</ButtonPopupShow>

    </div>
    <ThePopup v-if="store.getters.getPopupVisibility" />
  </div>
</template>
