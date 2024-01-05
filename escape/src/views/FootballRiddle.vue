<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Base/Button.vue';

const router = useRouter()
const answer = ref(null)
const showError = ref(false)

const toNextQuestion = () => {
  if (answer.value.toLowerCase() === 'ronaldo') {
    router.push('/question-two');
  } else {
    showError.value = true;
  }
}

</script>

<template>
  <div>
    <p class="text-lg">Well done for making it this far!</p>
    <p>To get to the next stage, we need a word...</p>
    <div class="text-center mt-8 italic">
      <p>22 players chase a ball,</p>
      <p>But one stands out above them all,</p>
      <p>Portugal is from where this record breaker came,</p>
      <p>But Manchester is where he made his name,</p>
      <p class="mt-2">Turin, Madrid and Lisbon too,</p>
      <p>Are you getting close, or one more clue?</p>
      <p>In our book, he's broken records galore,</p>
      <p>Can you spell his last name to open the door?</p>
    </div>
    <div class="mt-8 text-center">
      <input v-model="answer" type="text" class="border border-orange-700 
      h-8 px-2 py-1" />
      <p v-if="showError" class="mt-2 text-sm text-red-600">Sorry, that is incorrect. Please try again!</p>
    </div>
    <div class="text-center mt-6">
      <Button @click="toNextQuestion()">Proceed</Button>
    </div>
  </div>
</template>
