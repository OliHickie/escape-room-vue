<script setup>
import { ref } from 'vue';
import Button from '@/components/Base/Button.vue';
import CloseIcon from './Base/Icons/CloseIcon.vue';
import gameData from '@/definitions/gameInfo';

const answer = ref('');
const showError = ref(false);
const riddleComplete = ref(false)

const validateAnswer = () => {
  if (answer.value.toLowerCase() === 'ronaldo') {
    gameData.riddle.completed = true;
    riddleComplete.value = true;
  } else {
    showError.value = true;
  }
};
</script>

<template>
  <div class="h-full w-screen bg-black flex justify-center items-center">
    <div class="bg-yellow-200 max-w-fit px-6 pt-2 pb-3">
      <div>
        <CloseIcon colour="#000" class="ml-auto w-6 mb-1 cursor-pointer" @click="$emit('close')" />
      </div>
      <div v-if="!riddleComplete">
        <div class="text-center italic font-kalam">
          <p>22 players chase a ball,</p>
          <p>But one stands out above them all,</p>
          <p>Most goals, most caps and twitter followers too,</p>
          <p>Are you getting close? Need one more clue?</p>
          <p class="mt-2">Portugal is from where this record breaker came,</p>
          <p>But Manchester is where he made his name,</p>
          <p>In our book, he's broken records galore,</p>
          <p>Can you spell his <strong>last name</strong> to open the door?</p>
        </div>
        <div class="mt-8 text-center">
          <input v-model="answer" type="text" class="border border-orange-700 
          h-8 px-2 py-1" />
          <p v-if="showError" class="mt-2 text-sm text-red-600">Sorry, that is incorrect. Please try again!</p>
        </div>
        <div class="text-center mt-6">
          <Button @click="validateAnswer()">Continue</Button>
        </div>
      </div>
      <div v-else-if="riddleComplete" class="text-center py-4">
        <img src="../assets/images/ronaldo.webp" alt="Cristiano Ronaldo" class="w-96">

        <p class="italic font-kalam mt-6">CORRECT!</p>
        <p class="italic font-kalam">Find out more about Cristiano Ronaldo's World Records <a href="https://www.guinnessworldrecords.com/search?term=ronaldo&page=1&type=all&max=20&partial=_Results&" target="_blank" class="underline">here</a></p>
        <div class="text-center mt-6">
          <Button @click="$emit('close')">Continue</Button>
        </div>
      </div>
    </div>
  </div>
</template>
