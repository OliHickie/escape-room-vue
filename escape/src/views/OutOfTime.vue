<script setup>
import Button from '@/components/Base/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <main class="space-y-4 w-full md:w-3/5 mx-auto py-4 px-6 bg-gray-100 text-center space-y-10">
    <h1 class="text-2xl">YOU'RE OUT OF TIME!</h1>
    <p>Unlucky, you ran out of time!</p>
    <p>Either have another go, or take a look at the Guinness World Records website to see if there are any records you'd like to break!</p>
    <Button @click="goHome()">Play again</Button>
    <a href="https://www.guinnessworldrecords.com/" target="_blank">
      <img src="../assets/images/logo.webp" alt="Guinness World Records logo" class="w-20 mx-auto mt-10">
    </a>
  </main>
</template>