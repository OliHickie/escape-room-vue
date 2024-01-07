<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';
import Arrow from './Base/Icons/Arrow.vue';

const imagesData = ref([]);
const answerData = ref([]);

onMounted(async () => {
  imagesData.value = [
    { 
      id: 1,
      alt: 'Cow',
      src: (await import('../assets/images/tallest-cow.webp')).default,
      shake: false,
    },
    { 
      id: 2,
      alt: 'Dog',
      src: (await import('../assets/images/tallest-dog.webp')).default,
      shake: false,
    },
    { 
      id: 3,
      alt: 'Man',
      src: (await import('../assets/images/tallest-man.webp')).default,
      shake: false, 
    },
    { id: 4,
      alt: 'Waffles',
      src: (await import('../assets/images/tallest-waffles.webp')).default,
      shake: false, 
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
  // If the 
  for (let i = 0; i < answerData.value.length; i++) {
    if (answerData.value[i].id !== order[i]) {
      clearAnswers();
      return false;
    }
  }
  console.log('CORRECT')
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
  <div class="h-full w-screen bg-black text-center pt-12 text-gray-100">
    <h2 class="text-2xl font-lora">Can you solve this problem?</h2>
    <p class="mt-4">
      Somebody has mixed up this collection of 'World's tallest' records, can you put them back in height order, from shortest to tallest?
    </p>
    <div class="mt-12 flex justify-center gap-1">
      <div v-for="image in imagesData" :key="image.id" class="relative" @click="addToAnswer(image)">
        <img :src="image.src" :alt="image.alt" class="w-28 h-40 object-cover" >
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
    <div v-for="image in answerData" :key="image.id" class="relative" @click="removeFromAnswer(image)">
      <img :src="image.src" :alt="image.alt" class="w-48 h-60 object-cover" :class="{ shake: image.shake }">
      <div class="absolute bottom-0 left-0 right-0 bg-black/70 h-full flex items-center justify-center opacity-0 hover:opacity-100">
        <span class="font-semibold text-4xl">-</span>
      </div>
    </div>
    <div v-for="index in (4 - answerData.length)" :key="index">
      <div class="w-48 h-60 border border-orange-300" />
    </div>
  </div>
  </div>
</template>

<style>
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px) rotate(0.5deg); }
    50% { transform: translateX(5px) rotate(-0.5deg); }
    75% { transform: translateX(-5px) rotate(0.5deg); }
    100% { transform: translateX(0); }
  }

  .shake {
    animation: shake 0.2s ease-in-out;
  }
</style>
