<script setup>
import { onBeforeMount, ref } from 'vue'
import ButtonPopupClose from '@/components/ButtonPopupClose.vue'
import store from '@/store/index.js'

const title = 'Заполните форму'
const name = ref('')
const phone = ref('')
const email = ref('')
const city = ref('')
const cities = ref([])

onBeforeMount(() => {
  cities.value = store.getters.getCities;
  city.value = store.getters.getCurrentCityId;
})

function submitForm() {
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

      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-2">Имя:
            <input v-model="name" class="border p-2 w-full" name="name" type="text" />
          </label>
        </div>

        <div class="mb-4">
          <label class="block mb-2">Телефон:
            <input v-model="phone" class="border p-2 w-full" name="phone" type="tel" />
          </label>
        </div>

        <div class="mb-4">
          <label class="block mb-2">Email:
            <input v-model="email" class="border p-2 w-full" name="email" type="email" />
          </label>
        </div>

        <div class="mb-4">
          <label class="block mb-2">Город:
            <select v-model="city" class="border p-2 w-full" name="city_id">
              <option v-for="cityOption in cities" :key="cityOption" :value="cityOption.id">{{ cityOption.name }}
              </option>
            </select>
          </label>
        </div>

        <button class="btn blue mt-6 w-full rounded" type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>


