<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';

const imagesData = ref([]);
const answerData = ref([]);

onMounted(async () => {
  imagesData.value = [
    { 
      id: 1,
      alt: 'Cow',
      src: (await import('../assets/images/tallest-cow.webp')).default 
    },
    { 
      id: 2,
      alt: 'Dog',
      src: (await import('../assets/images/tallest-dog.webp')).default
    },
    { 
      id: 3,
      alt: 'Man',
      src: (await import('../assets/images/tallest-man.webp')).default 
    },
    { id: 4,
      alt: 'Waffles',
      src: (await import('../assets/images/tallest-waffles.webp')).default 
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

  for (let i = 0; i < answerData.value.length; i++) {
    if (answerData.value[i].id !== order[i]) {
      console.log('INCORRECT')
      return false;
    }
  }

  console.log('CORRECT')
}

</script>

<template>
  <div class="h-full w-screen bg-black text-center pt-12 text-gray-100">
    <h2 class="text-2xl font-lora">Can you solve this problem?</h2>
    <p class="mt-4">
      Somebody has mixed up these people, can you put them back in height order?
    </p>
    <div class="mt-12 flex justify-center gap-1">
      <div v-for="image in imagesData" :key="image.id" class="relative" @click="addToAnswer(image)">
        <img :src="image.src" :alt="image.alt" class="w-28 h-40 object-cover" >
        <div v-if="!answerData.includes(image)" class="absolute bottom-0 left-0 right-0 bg-black/50 h-full flex items-center justify-center opacity-0 hover:opacity-100">
          <span class="font-semibold text-2xl">+</span>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-center gap-1">
      <div v-for="image in answerData" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="w-48 h-60 object-cover" @click="removeFromAnswer(image)">
      </div>
    </div>
  </div>
</template>
