<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main class=" font-alegreya">
    <RouterView />
  </main>
</template>
