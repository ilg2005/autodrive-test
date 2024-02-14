<script setup>
import PopupButtonClose from '@/components/popup/PopupButtonClose.vue'

defineProps({
  title: String
})
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900">
    <div class="bg-white rounded-lg p-8">
      <div class="flex justify-between mb-4">
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <PopupButtonClose />
      </div>

      <slot></slot>

    </div>
  </div>
</template>

