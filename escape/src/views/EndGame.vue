<script setup>
import Button from '@/components/Base/Button.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

const goHome = () => {
  router.push('/')
}

const timeRemaining = computed(() => {
  const time = localStorage.getItem('time')
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return minutes > 0 ? `${minutes} mins & ${seconds} secs` : `${seconds} secs`
})

</script>

<template>
  <main class="space-y-4 w-full md:w-3/5 mx-auto py-4 px-6 bg-gray-100 text-center space-y-10 mt-12">
    <h1 class="text-2xl uppercase">Congratualtions!</h1>
    <p class="text-lg font-semibold">You managed to escape in {{ timeRemaining }}</p>
    <p class="text-lg font-semibold">To learn more about Guinness World Records, check out the website <a href="https://www.guinnessworldrecords.com/" target="_blank" class="underline">here</a></p>
    <Button @click="goHome()">Play again</Button>
    <a href="https://www.guinnessworldrecords.com/" target="_blank">
      <img src="../assets/images/logo.webp" alt="Guinness World Records logo" class="w-20 mx-auto mt-10">
    </a>
  </main>
</template>
