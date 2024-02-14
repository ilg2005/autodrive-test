<script setup>

import store from '@/store/index.js'
import ButtonPopupShow from '@/components/ButtonShowPopup.vue'
import PopupForm from '@/components/popup/PopupForm.vue'
import PopupResult from '@/components/popup/PopupResult.vue'
import PopupTemplate from '@/components/popup/PopupTemplate.vue'

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
      <ButtonPopupShow cityId="1" color="blue">Заказать в Москву</ButtonPopupShow>
      <ButtonPopupShow cityId="2" class="ml-4" color="green">Заказать в Санкт-Петербург</ButtonPopupShow>

    </div>

    <PopupTemplate v-if="store.getters.getPopupVisibility" title="Заполните форму">
      <PopupForm />
    </PopupTemplate>

    <PopupTemplate v-if="store.state.isFormSubmitted" title="Результат:">
      <PopupResult />
    </PopupTemplate>

  </div>
</template>
