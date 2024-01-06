<script setup>
import { ref, onUnmounted } from 'vue';
import GreyCircle from '@/components/Base/GreyCircle.vue';
import FootballRiddle from '../components/FootballRiddle.vue';
import gameData from '../definitions/gameInfo';
import OrderingGame from '../components/OrderingGame.vue';

const openRiddle = () => {
  gameData.riddle.open = true;
  document.body.classList.add('overflow-hidden');
};

const closeRiddle = () => {
  gameData.riddle.open = false;
  document.body.classList.remove('overflow-hidden');
};

const width = ref('');
const time = ref(300); // Number of seconds
const newTime = ref(time.value * 4);

const updateWidth = () => {
  newTime.value -= 1;
  // if (newTime.value === 0)  
  width.value = `${(newTime.value / (time.value *4)) * 100}%`
};

const intervalId = setInterval(updateWidth, 250);

// Clear the interval when the component is unmounted
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="relative flex justify-center items-center h-full">
    <div class="absolute bg-orange-300 w-full top-0 h-3 z-10" :style="{ width }" />
    <img src="../assets/images/office-space.jpg" alt="" class="h-full w-full absolute top-0 left-0 object-cover">
    <GreyCircle v-if="!gameData.riddle.completed" class="h-12 md:h-24 top-1/3 absolute right-10" @click="openRiddle()" />
    <GreyCircle class="h-12 md:h-24 bottom-1/3 absolute left-24" @click="openRiddle()" />

  </div>
  <FootballRiddle v-if="gameData.riddle.open" class="top-0 mx-auto absolute" @close="closeRiddle()" @completed="gameData.riddle.completed = true" />
  <OrderingGame class="top-0 mx-auto absolute" />
</template>
