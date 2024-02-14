<script setup>

import store from '@/store/index.js'
import ButtonShowPopup from '@/components/ButtonShowPopup.vue'
import PopupForm from '@/components/popup/PopupForm.vue'
import PopupResult from '@/components/popup/PopupResult.vue'
import PopupTemplate from '@/components/popup/PopupTemplate.vue'

</script>

<template>
  <div class="flex flex-col items-center justify-center mt-10">
    <header class="text-center">
      <h1 class="text-4xl font-bold">Тестовое задание</h1>
      <h2 class="text-2xl text-gray-500">на вакансию фронтенд-разработчика</h2>
    </header>

    <div class="mt-8">
      <ButtonShowPopup cityId="1" color="blue">Заказать в Москву</ButtonShowPopup>
      <ButtonShowPopup cityId="2" class="ml-4" color="green">Заказать в Санкт-Петербург</ButtonShowPopup>

    </div>

    <PopupTemplate v-if="store.getters.getPopupVisibility" title="Заполните форму">
      <PopupForm />
    </PopupTemplate>

    <PopupTemplate v-if="store.state.isFormSubmitted" title="Результат:">
      <PopupResult />
    </PopupTemplate>

  </div>
</template>
