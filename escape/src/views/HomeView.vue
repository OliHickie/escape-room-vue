<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router';
import Button from '../components/Base/Button.vue';

const num1 = ref(null)
const num2 = ref(null)
const num3 = ref(null)
const num4 = ref(null)

const showButton = computed(() => {
  return num1.value === '1' && num2.value === '9' && num3.value === '5' && num4.value === '5'
})

</script>

<template>
  <main>
    <div className='space-y-4'>
      <p className='text-center font-lora text-2xl font-semibold'>
        Welcome to the Guinness World Records HQ
      </p>
      <p>
        Welcome to "Escape Guinness World Records HQ" – your virtual quest for 
        freedom! Trapped inside the prestigious Guinness World Records 
        Headquarters, you must break free by tackling a series of challenges and 
        puzzles inspired by the incredible records stored on their official 
        website.
      </p>
      <p>
        Your mission: Navigate the virtual HQ, solve mind-bending puzzles, and 
        use the Guinness World Records website for vital clues. Time is ticking,
         and your escape depends on unraveling the secrets within the records.
      </p>
      <p>
        Can you prove your prowess, break out swiftly, and etch your name in 
        history as the fastest escapee from Guinness World Records HQ? The 
        challenge awaits – are you up for it?
      </p>
      <p>
        To get started, we've lost the start button! To find it, we need a year... the year it all began...
      </p>
      <form className='text-center'>
      <div className='space-x-4 text-center'>
          <input
            name="num1"
            v-model="num1"
            type='text'
            className='w-12 aspect-square text-4xl text-center'
            value={num1}
          />
          <input
            name="num2"
            v-model="num2"
            type='text'
            className='w-12 aspect-square text-4xl text-center'
            value={num2}
          />
          <input
            name="num3"
            v-model="num3"
            type='text'
            className='w-12 aspect-square text-4xl text-center'
            value={num3}
          />
          <input
            name="num4"
            v-model="num4"
            type='text'
            className='w-12 aspect-square text-4xl text-center'
            value={num4}
          />
        </div>
        <div className='text-center mt-4'>
          <Transition name="button">
            <Button v-show="showButton" to="/question-one">Proceed</Button>
          </Transition>
        </div>
      </form>
    </div>
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
