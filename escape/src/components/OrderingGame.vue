<script setup>
import { onMounted, ref, computed} from 'vue';
import Arrow from './Base/Icons/Arrow.vue';
import gameData from '../definitions/gameInfo';
import Button from './Base/Button.vue';
import CloseIcon from './Base/Icons/CloseIcon.vue';

const imagesData = ref([]);
const answerData = ref([]);

onMounted(async () => {
  imagesData.value = [
    { 
      id: 1,
      name: 'Largest ever cow',
      src: (await import('../assets/images/tallest-cow.webp')).default,
      shake: false,
      url: 'https://www.guinnessworldrecords.com/world-records/70851-largest-cow-ever',
      height: 190,
    },
    { 
      id: 2,
      name: 'Tallest ever dog',
      src: (await import('../assets/images/tallest-dog.webp')).default,
      shake: false,
      url: 'https://www.guinnessworldrecords.com/world-records/tallest-dog-ever',
      height: 111,
    },
    { 
      id: 3,
      name: 'Tallest man ever',
      src: (await import('../assets/images/tallest-man.webp')).default,
      shake: false,
      url: 'https://www.guinnessworldrecords.com/world-records/tallest-man-ever',
      height: 272, 
    },
    { 
      id: 4,
      name: 'Tallest stack of waffles',
      src: (await import('../assets/images/tallest-waffles.webp')).default,
      shake: false,
      url: 'https://www.guinnessworldrecords.com/world-records/437476-tallest-stack-of-waffles',
      height: 91.5
    },
  ];
});

const addToAnswer = (image) => {
  if (!answerData.value.some((data) => data.id === image.id)) {
    answerData.value.push(image);
  }
  if (answerData.value.length === imagesData.value.length) {
    checkAnswers()
  }
}

const removeFromAnswer = (image) => {
  answerData.value = answerData.value.filter((data) => {
    return data.id != image.id;
  })
}

const checkAnswers = () => {
  const order = [4, 2, 1, 3];
  let correctItems = 0
  for (let i = 0; i < answerData.value.length; i++) {
    // If the order is incorrect
    if (answerData.value[i].id !== order[i]) {
      clearAnswers();
    } else {
      correctItems += 1
      // If the order is correct
      if (correctItems === imagesData.value.length) {
        gameData.ordering.completed = true;
      }
    }
  }
}

const clearAnswers = () => {
  answerData.value.forEach((data) => {
    data.shake = true;
    setTimeout(() => {
      removeFromAnswer(data)
      data.shake = false;
    }, 500)
  })
}

</script>

<template>
    <div v-if="!gameData.ordering.completed" class="text-gray-100 text-center">
      <h2 class="text-2xl font-lora">Can you solve this problem?</h2>
      <p class="mt-4">
        Somebody has mixed up this collection of 'World's tallest' records, can you put them back in height order, from shortest to tallest?
      </p>
      <div class="mt-12 flex justify-center gap-1">
        <div v-for="image in imagesData" :key="image.id" class="relative cursor-pointer" @click="addToAnswer(image)">
          <img :src="image.src" :alt="image.name" class="w-28 h-40 object-cover" >
          <div :class="['absolute bottom-0 left-0 right-0 bg-black/70 h-full flex items-center justify-center hover:opacity-100', answerData.includes(image) ? 'opacity-100' : 'opacity-0' ]">
            <span v-if="!answerData.includes(image)" class="font-semibold text-4xl">+</span>
          </div>
        </div>
      </div>
      <div>Click on the image to add it to the order</div>
      <div class="mt-12 flex justify-between w-[768px] mx-auto">
        <span>Shortest</span>
        <Arrow />
        <span>Tallest</span>
      </div>
      <div class="flex justify-center gap-1">
        <div v-for="image in answerData" :key="image.id" class="relative cursor-pointer" @click="removeFromAnswer(image)">
          <img :src="image.src" :alt="image.name" class="w-48 h-60 object-cover" :class="{ shake: image.shake }">
          <div class="absolute bottom-0 left-0 right-0 bg-black/70 h-full flex justify-end opacity-0 hover:opacity-100">
            <span class="font-semibold text-4xl mr-2">x</span>
          </div>
        </div>
        <div v-for="index in (4 - answerData.length)" :key="index">
          <div class="w-48 h-60 border border-orange-300" />
        </div>
      </div>
    </div>
    <div v-if="gameData.ordering.completed" class="space-y-6">
      <h2 class="text-4xl">CONGRATULATIONS</h2>
      <p>You have managed to succesfully put our World's Tallest Records back in height order!</p>
      <div class="flex gap-2 justify-center">
        <a
          v-for="image in answerData" 
          :href="image.url" 
          target="_blank"  
          :key="image.id" 
          class="relative"
        >
          <img :src="image.src" :alt="image.name" class="w-48 h-60 object-cover" :class="{ shake: image.shake }">
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 h-full flex items-end justify-center">
            <div>
              <p class="font-semibold text-lg">{{ image.name }}</p>
              <p>Height: {{ image.height }}cm</p>
              <a :href="image.url">Read more</a>
            </div>
          </div>
        </a>
      </div>
      <Button @click="$emit('close')">Continue</Button>
    </div>
  <!-- </div> -->
</template>

<style>
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px) rotate(1deg); }
    50% { transform: translateX(10px) rotate(-1deg); }
    75% { transform: translateX(-10px) rotate(1deg); }
    100% { transform: translateX(0); }
  }

  .shake {
    animation: shake 0.2s ease-in-out;
  }
</style>
