<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue';

const imagesData = ref([]);

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
</script>

<template>
  <div class="h-full w-screen bg-black text-center pt-12 text-gray-100">
    <h2 class="text-2xl font-lora">Can you solve this problem?</h2>
    <p class="mt-4">
      Somebody has mixed up these people, can you put them back in height order?
    </p>
    <div class="mt-12 flex justify-center gap-1">
      <div v-for="image in imagesData" :key="image.id">
        <img :src="image.src" :alt="image.alt" class="w-60 h-80 object-cover">
      </div>
    </div>
  </div>
</template>
