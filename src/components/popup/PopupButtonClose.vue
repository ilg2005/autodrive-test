<script setup>
import store from '@/store/index.js'
</script>

<template>
  <button class="text-gray-500 hover:text-gray-700 focus:outline-none"
          @click="store.commit('closePopup')">
    <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
      <path
        d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.357 5.652a.5.5 0 00-.707.707L9.293 10l-3.64 3.643a.5.5 0 00.707.707L10 10.707l3.643 3.64a.5.5 0 00.707-.707L10.707 10l3.64-3.648a.5.5 0 000-.707z"
      />
    </svg>
  </button>
</template>


