<script setup>
import MagnifyGlass from './Icons/MagnifyGlass.vue';
import CheckIcon from './Icons/CheckIcon.vue';

defineProps({
  completed: { type: Boolean, default: false  },
})

</script>

<template>
  <div class="flex justify-center items-center rounded-full bg-black/50 aspect-square cursor-pointer">
    <MagnifyGlass v-if="!completed" class="w-6 md:w-12" />
    <CheckIcon v-else class="w-6 md:w-12" />
  </div>
</template>
