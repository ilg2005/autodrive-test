<script setup>
import store from '@/store/index.js'
</script>

<template>
  <div v-html="store.getters.getResult"></div>
</template>

<style scoped>

</style>
