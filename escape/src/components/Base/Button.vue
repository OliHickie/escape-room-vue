<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <router-link class="px-6 py-2 bg-gray-100 border border-orange-700 text-orange-700 rounded font-semibold hover:bg-gray-300" @click="">
    <slot />
  </router-link>
</template>


