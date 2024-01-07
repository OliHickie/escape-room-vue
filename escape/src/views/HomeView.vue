<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import Button from '../components/Base/Button.vue';
import gameData from '@/definitions/gameInfo';

const num1 = ref('')
const num2 = ref('')
const num3 = ref('')
const num4 = ref('')

const router = useRouter()

const showButton = computed(() => {
  return num1.value === '1' && num2.value === '9' && num3.value === '5' && num4.value === '5'
})

const playGame = () => {
  for (const game in gameData) {
    gameData[game].completed = false;
    gameData[game].open = false;
  }
  if (localStorage.getItem('time') !== null) {
    localStorage.setItem('time', null)
  } 
  router.push('/game')
}

</script>

<template>
  <main class="space-y-4 w-full md:w-3/5 mx-auto py-4 px-6 bg-gray-100">
    <p class="text-center font-lora text-2xl font-semibold">
      Welcome to the Guinness World Records HQ
    </p>
    <p>
      Welcome to "Escape Guinness World Records HQ" – your virtual quest for 
      freedom! Trapped inside the prestigious Guinness World Records 
      Headquarters on a Friday afternoon, you must break free by tackling 
      a series of challenges and puzzles inspired by the incredible records stored on their official website and avoid being stuck in the office over the weekend!
    </p>
    <p>
      Your mission: Navigate the virtual HQ, solve mind-bending puzzles, and 
      use the <a href="https://www.guinnessworldrecords.com/" target="_blank" class="underline"><strong>Guinness World Records website</strong></a> for vital clues. 
      Time is ticking, and your escape depends on unraveling the secrets within the records.
    </p>
    <p>
      Can you prove your prowess, break out swiftly, and etch your name in 
      history as the fastest escapee from Guinness World Records HQ? The 
      challenge awaits – are you up for it?
    </p>
    <p>
      To get started, we've lost the start button! To find it, we need a year... the year it all began...
    </p>
    <form class="text-center">
    <div class="space-x-4 text-center">
        <input
          name="num1"
          v-model="num1"
          type='text'
          class="bg-gray-700 text-gray-100 w-12 aspect-square text-4xl text-center"
        />
        <input
          name="num2"
          v-model="num2"
          type='text'
          class="bg-gray-700 text-gray-100 w-12 aspect-square text-4xl text-center"
        />
        <input
          name="num3"
          v-model="num3"
          type='text'
          class="bg-gray-700 text-gray-100 w-12 aspect-square text-4xl text-center"
        />
        <input
          name="num4"
          v-model="num4"
          type='text'
          class="bg-gray-700 text-gray-100 w-12 aspect-square text-4xl text-center"
        />
      </div>
      <div class="text-center mt-4">
        <Transition name="button">
          <Button v-show="showButton" @click.prevent="playGame()">Proceed</Button>
        </Transition>
      </div>
    </form>
  </main>
</template>

<style>
.button-enter-active,
.button-leave-active {
  transition: all 0.5s ease;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
  transform: scale(0)
}

</style>
