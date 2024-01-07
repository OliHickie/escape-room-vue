<script setup>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import GreyCircle from '@/components/Base/GreyCircle.vue';
import FootballRiddle from '../components/FootballRiddle.vue';
import gameData from '../definitions/gameInfo';
import OrderingGame from '../components/OrderingGame.vue';

const openGame = (game) => {
  if (game === 'riddle') gameData.riddle.open = true;
  if (game === 'ordering') gameData.ordering.open = true;
  document.body.classList.add('overflow-hidden');
};

const closeGame = () => {
  for (const game in gameData) {
    gameData[game].open = false;
  }
  document.body.classList.remove('overflow-hidden');
};

const width = ref('');
const backgroundColor = ref('#fdba74')
const time = ref(13); // Number of seconds
const newTime = ref(time.value);

const updateWidth = () => {
  newTime.value -= 1;
  if (newTime.value === 0) {
    timeEnded();
  }
  if (newTime.value < 10) {
    backgroundColor.value = '#ff0f0f';
  } 
  width.value = `${(newTime.value / time.value) * 100}%`
};

const router = useRouter();

const timeEnded = () => {
  router.push('/out-of-time')
}

const intervalId = setInterval(updateWidth, 1000);
// Clear the interval when the component is unmounted
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="relative flex justify-center items-center h-full">
    <div class="absolute bg-orange-300 w-full top-0 h-3 z-10" :style="{ width, backgroundColor }" />
    <img src="../assets/images/office-space.jpg" alt="Office image" class="h-full w-full absolute top-0 left-0 object-cover">
    <GreyCircle v-if="!gameData.riddle.completed" class="h-12 md:h-24 top-1/3 absolute right-10" @click="openGame('riddle')" />
    <GreyCircle v-if="!gameData.ordering.completed" class="h-12 md:h-24 bottom-1/3 absolute left-24" @click="openGame('ordering')" />
  </div>
  <!-- GAMES -->
  <FootballRiddle v-if="gameData.riddle.open" class="top-0 mx-auto absolute" @close="closeGame()" />
  <OrderingGame v-if="gameData.ordering.open" class="top-0 mx-auto absolute" @close="closeGame()" />
</template>
