<script setup>
const props = defineProps(['movies'])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div 
      v-for="movie in movies" 
      :key="movie.id" 
      class="bg-[#42b983] p-4 rounded shadow"
    >
      <p class="font-medium text-white">{{ movie.title }}</p>
      <div class="flex justify-between py-2">
        <p class="text-sm text-black font-semibold bg-amber-400 p-1 rounded-md">ID Movie - {{ movie.id }}</p>
        <p class="text-sm text-black font-semibold bg-amber-400 p-1 rounded-md">Vote average - {{ movie.vote_average.toFixed(1) }}</p>
      </div>
    </div>
  </div>
</template>