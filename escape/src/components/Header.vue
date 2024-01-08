<script setup>
import { useRouter, useRoute } from 'vue-router'; 
import HomeIcon from './Base/Icons/HomeIcon.vue';

const router = useRouter();
const route = useRoute();

const directToHome = () => {
  router.push('/');
}

</script>

<template>
  <div class="text-center py-4 relative">
    <HomeIcon v-if="route.name !== 'home'" class="w-6 md:w-12 absolute top-5 md:top-3 left-4 cursor-pointer" @click="directToHome()" /> 
    <h1 class="text-2xl md:text-4xl font-lora uppercase font-semibold text-gray-100">Escape GWR HQ</h1>
  </div>
</template>