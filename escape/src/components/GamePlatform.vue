<script setup>
import CloseIcon from './Base/Icons/CloseIcon.vue';
</script>

<template>
  <div class="min-h-full w-full bg-black absolute top-0">
    <CloseIcon colour="#fff" class="ml-auto mr-4 mt-4 w-6 mb-1 cursor-pointer" @click="$emit('close')" @click.prevent="$emit('close')" />
    <div class="flex justify-center">
      <slot />
    </div>
  </div>
</template>
