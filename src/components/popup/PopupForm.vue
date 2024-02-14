<script setup>
import { onBeforeMount, reactive, ref } from 'vue'
import store from '@/store/index.js'
import axios from 'axios'
import { vMaska } from 'maska'

const form = ref(null)
const name = ref('')
const phone = ref('')
const email = ref('')
const city = ref('')
const cities = ref([])

let formErrors = reactive({})

onBeforeMount(() => {
  cities.value = store.getters.getCities
  city.value = store.getters.getCurrentCityId
})

function cleanPhoneNumber(phone) {
  return phone.replace(/\D/g, '')
}

function validateForm() {

  if (!name.value) {
    formErrors.name = 'Обязательное поле'
  } else {
    formErrors.name = ''
  }

  if (!phone.value) {
    formErrors.phone = 'Обязательное поле'
  } else if (!/^\d{5,11}$/.test(cleanPhoneNumber(phone.value))) {
    formErrors.phone = 'От 5 до 11 цифр'
  } else {
    formErrors.phone = ''
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value) {
    formErrors.email = 'Обязательное поле'
  } else if (!emailRegex.test(email.value)) {
    formErrors.email = 'Введите действительный email'
  } else {
    formErrors.email = ''
  }

  if (!city.value) {
    formErrors.city = 'Обязательное поле'
  } else {
    formErrors.city = ''
  }

  return Object.keys(formErrors).every(key => !formErrors[key])
}

function submitForm() {

  if (validateForm()) {
    const formData = {
      name: name.value,
      phone: '+' + cleanPhoneNumber(phone.value),
      email: email.value,
      city_id: city.value
    }

    axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', formData)
      .then(response => store.commit('setResult', response.data))
      .catch(error => {
        store.commit('setResult', error.response.data)
      }).finally(() => {

      form.value.reset()
      store.commit('closePopup')
      store.commit('showResult')

    })
  }
}

</script>

<template>
  <form ref="form" novalidate @submit.prevent="submitForm">
    <div class="mb-4">
      <label class="block mb-2">Имя:
        <input v-model.trim="name" class="border p-2 w-full" name="name" type="text" />
      </label>
      <span class="text-red-500">{{ formErrors.name }}</span>
    </div>

    <div class="mb-4">
      <label class="block mb-2">Телефон:
        <input id="phone" v-maska v-model.trim="phone" class="border p-2 w-full" data-maska="['+7 (###) ###-##-##']"
               name="phone"
               type="text" />
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
</template>


