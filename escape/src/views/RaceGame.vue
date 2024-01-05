<script setup>
import { ref } from 'vue';
import Button from '@/components/Base/Button.vue';

const gameMode = ref(false)

</script>

<template>
  <div class="space-y-2">
    <p>
      CORRECT! You've made it to the next level!
    </p>
    <p>
      Unfortunately, time is running out before HQ will be locked down for the weekend!
    </p>
    <p>The Guinness World Record for the fastest motorised toilet is 70.545 MPH. Can you get this toilet past the finish line before the time runs out to continue...</p>
    <p>Click your mouse to make the toilet move</p>
  </div>
  <div class="text-center h-96">
    <Button v-if="!gameMode" class="mt-24" @click="gameMode = true">
      START!
    </Button>
    <div v-if="gameMode" class="mt-8 relative">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-poster-of-track-and-field-race-in-campus-games-image_925132.jpg" alt="" class="w-full absolute top-0 left-0">
      <p>HELLO</p>
    </div>
  </div>


</template>