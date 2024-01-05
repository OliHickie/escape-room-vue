<script setup>
import { useRoute} from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const progress = computed(() => {
  const width = route.meta.question * 20
  console.log(width)
  return {
    width: `${width}%`
  }
})

</script>

<template>
  <div class="border border-orange-700 w-full h-8">
    <div class="bg-orange-300 h-full" :style="progress"></div>
  </div>
</template>