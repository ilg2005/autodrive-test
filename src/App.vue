<script setup>

import store from '@/store/index.js'
import ButtonPopupShow from '@/components/ButtonPopupShow.vue'
import PopupForm from '@/components/PopupForm.vue'

function showPopup() {
  store.commit('showPopup')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <header class="text-center">
      <h1 class="text-4xl font-bold">Тестовое задание</h1>
      <h2 class="text-2xl text-gray-500">на вакансию фронтенд-разработчика</h2>
    </header>

    <div class="mt-8">
      <ButtonPopupShow color="blue" cityId="1">Заказать в Москву</ButtonPopupShow>
      <ButtonPopupShow class="ml-4" color="green" cityId="2">Заказать в Санкт-Петербург</ButtonPopupShow>

    </div>
    <PopupForm v-if="store.getters.getPopupVisibility" />
  </div>
</template>
