<script setup>
import store from '@/store/index.js'

const props = defineProps({
  color: {
    type: String,
  },
  cityId: {
    type: String
  }
})

function showPopup () {
  store.commit('setCurrentCityId', props.cityId);
  store.commit('showPopup');
}
</script>

<template>
  <button :class="props.color"
          class="btn"
          @click="showPopup">
    <slot></slot>
  </button>
</template>

