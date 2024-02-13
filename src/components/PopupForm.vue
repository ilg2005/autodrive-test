<script setup>
import { onBeforeMount, reactive, ref } from 'vue'
import ButtonPopupClose from '@/components/ButtonPopupClose.vue'
import store from '@/store/index.js'

const title = 'Заполните форму'
const form = ref(null);
const name = ref('')
const phone = ref('')
const email = ref('')
const city = ref('')
const cities = ref([])

let formErrors = reactive({})

onBeforeMount(() => {
  cities.value = store.getters.getCities;
  city.value = store.getters.getCurrentCityId;
})

function cleanPhoneNumber (phone) {
  return phone.replace(/\D/g, '');
}
function isValidPhoneNumber(phone) {
  const cleaned = cleanPhoneNumber(phone);
  return /^\d+$/.test(cleaned);
}

function validateForm() {

  if (!name.value) {
    formErrors.name = 'Обязательное поле'
  } else {
    formErrors.name = '';
  }

  if (!phone.value) {
    formErrors.phone = 'Обязательное поле'
  } else if (!isValidPhoneNumber(phone.value)) {
    formErrors.phone = 'Введите валидный телефон'
  } else {
    formErrors.phone = '';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    formErrors.email = 'Обязательное поле';
  } else if (!emailRegex.test(email.value)) {
    formErrors.email = 'Введите действительный email';
  } else {
    formErrors.email = '';
  }

  if (!city.value) {
    formErrors.city = 'Обязательное поле'
  } else {
    formErrors.city = '';
  }

  return Object.keys(formErrors).every(key => !formErrors[key]);
}
function submitForm() {

   if (validateForm()) {
     console.log('name:', name.value);
     console.log('phone:', phone.value);
     console.log('name:', email.value);
     console.log('name:', city.value);
   }

  // Handle form submission logic here
}

</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
    <div class="bg-white rounded-lg p-8">
      <div class="flex justify-between mb-4">

        <h2 class="text-xl font-bold">{{ title }}</h2>
        <ButtonPopupClose />
      </div>

      <form ref="form" @submit.prevent="submitForm" novalidate>
        <div class="mb-4">
          <label class="block mb-2">Имя:
            <input v-model.trim="name" class="border p-2 w-full" name="name" type="text" />
          </label>
          <span class="text-red-500">{{ formErrors.name }}</span>
        </div>

        <div class="mb-4">
          <label class="block mb-2">Телефон:
            <input v-model.trim="phone" class="border p-2 w-full" name="phone" type="tel" />
          </label>
          <span class="text-red-500">{{ formErrors.phone }}</span>
        </div>

        <div class="mb-4">
          <label class="block mb-2">Email:
            <input v-model.trim="email" class="border p-2 w-full" name="email" type="email" />
          </label>
          <span class="text-red-500">{{ formErrors.email }}</span>
        </div>

        <div class="mb-4">
          <label class="block mb-2">Город:
            <select v-model.trim="city" class="border p-2 w-full" name="city_id">
              <option v-for="cityOption in cities" :key="cityOption" :value="cityOption.id">{{ cityOption.name }}
              </option>
            </select>
          </label>
          <span class="text-red-500">{{ formErrors.city }}</span>
        </div>

        <button class="btn blue mt-6 w-full rounded" type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>


