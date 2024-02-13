<script setup>
import { ref } from 'vue'
import ButtonPopupClose from '@/components/ButtonPopupClose.vue'

const title = 'Popup Form'
const name = ref('')
const email = ref('')

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
          <label class="block mb-2" for="name">Name:</label>
          <input id="name" v-model="name" class="border p-2 w-full" type="text" />
        </div>
        <div class="mb-4">
          <label class="block mb-2" for="email">Email:</label>
          <input id="email" v-model="email" class="border p-2 w-full" type="email" />
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>


