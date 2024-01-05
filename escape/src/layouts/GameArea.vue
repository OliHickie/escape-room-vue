<script setup>
import { RouterView, useRoute } from 'vue-router';
import ProgressBar from '../components/ProgressBar.vue'

const route = useRoute();

</script>

<template>
<div class="bg-gray-100 w-3/5 mx-auto p-8">
  <ProgressBar v-if="route.meta.question" />
  <RouterView />
</div>
</template>
