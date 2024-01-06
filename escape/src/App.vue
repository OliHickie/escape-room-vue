<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <main class="h-screen font-alegreya relative">
    <RouterView />
  </main>
</template>
