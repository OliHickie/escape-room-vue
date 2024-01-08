<script setup>
import { ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import GreyCircle from '@/components/Base/GreyCircle.vue';
import FootballRiddle from '../components/FootballRiddle.vue';
import gameData from '../definitions/gameInfo';
import OrderingGame from '../components/OrderingGame.vue';
import GamePlatform from '../components/GamePlatform.vue';

// GAME PLAY
const platformOpen = ref(false)

const openGame = (game) => {
  platformOpen.value = true;
  if (game === 'riddle') gameData.riddle.open = true;
  if (game === 'ordering') gameData.ordering.open = true;
  // document.body.classList.add('overflow-hidden');
};

const closeGame = () => {
  for (const game in gameData) {
    gameData[game].open = false;
  }
  isGameComplete();
  platformOpen.value = false;
  // document.body.classList.remove('overflow-hidden');
};

const isGameComplete = () => {
  const completed = Object.values(gameData).every(game => game.completed)
  if (completed) {
    localStorage.setItem('time', (time.value - timeRemaining.value))
    router.push('/end-game')
  }
}

// TIMER 
const width = ref('');
const backgroundColor = ref('#fdba74')
const time = ref(600); // Number of seconds
const timeRemaining = ref(time.value);

const updateWidth = () => {
  if (timeRemaining.value === 0) {
    timeEnded();
  }
  timeRemaining.value -= 1;
  if (timeRemaining.value < 60) {
    backgroundColor.value = '#ff0f0f';
  } 
  width.value = `${(timeRemaining.value / time.value) * 100}%`
};

const intervalId = setInterval(updateWidth, 1000);
// Clear the interval when the component is unmounted
onUnmounted(() => {
  clearInterval(intervalId);
});

// ROUTING
const router = useRouter();

const timeEnded = () => {
  router.push('/out-of-time')
}

</script>

<template>
  <div class="relative flex justify-center items-center h-full">
    <div class="absolute bg-orange-300 w-full top-0 h-3 z-10" :style="{ width, backgroundColor }" />
    <img src="../assets/images/office-space.jpg" alt="Office image" class="h-full w-full absolute top-0 left-0 object-cover">
    <GreyCircle v-if="!gameData.riddle.completed" class="h-12 md:h-24 top-1/3 absolute right-10" @click="openGame('riddle')" />
    <GreyCircle v-if="!gameData.ordering.completed" class="h-12 md:h-24 bottom-1/3 absolute left-24" @click="openGame('ordering')" />
  </div>
  <!-- GAMES -->
  <GamePlatform v-if="platformOpen" @close="closeGame()">
    <FootballRiddle v-if="gameData.riddle.open" class="top-0 mx-auto absolute" @close="closeGame()" />
    <OrderingGame v-if="gameData.ordering.open" class="top-0 mx-auto absolute" @close="closeGame()" />
  </GamePlatform>
</template>
