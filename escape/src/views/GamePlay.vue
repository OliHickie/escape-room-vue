<script setup>
import { ref, onUnmounted } from 'vue';
import GreyCircle from '@/components/Base/GreyCircle.vue';
import FootballRiddle from '../components/FootballRiddle.vue';

const riddleOpen = ref(false);
const completedGames = ref({ riddle: false });
const width = ref('');
const time = ref(20);
const newTime = ref(20);

const openRiddle = () => {
  riddleOpen.value = true;
  document.body.classList.add('overflow-hidden');
};

const closeRiddle = () => {
  riddleOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};

const updateWidth = () => {
  newTime.value -= 1;
  width.value = `${(newTime.value / time.value) * 100}%`
};

const intervalId = setInterval(updateWidth, 500);

// Clear the interval when the component is unmounted
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="relative flex justify-center items-center">
    <div class="absolute bg-orange-300 w-full top-0 h-3 z-10" :style="{ width }" />
    <img src="../assets/images/office-space.jpg" alt="" class="w-full absolute top-0 left-0">
    <GreyCircle v-if="!completedGames.riddle" class="h-24 top-48 right-10" @click="openRiddle()" />
  </div>
  <FootballRiddle v-if="riddleOpen" class="sticky top-0 mx-auto" @close="closeRiddle()" @completed="completedGames.riddle = true" />
</template>
