<script setup>
const props = defineProps(['movies'])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div v-if="movies.length === 0" class="col-span-4">
      <p class="text-center text-xl font-bold">Searching movies...</p>
    </div>
    <div 
      v-for="movie in movies" 
      :key="movie.id" 
      class="bg-[#42b983] p-5 rounded shadow"
    >
      <p class="font-medium text-white text-center mb-2">{{ movie.title }}</p>
      <div class="flex flex-col md:flex-row justify-around py-2">
        <div class="flex flex-col items-left justify-center bg-amber-400 rounded-md shadow-xl mb-1 md:mb-0">
          <p class="text-sm text-black font-semibold text-center md:text-left p-1">ID Movie</p>
          <p class="text-sm text-black font-semibold text-center md:text-left p-1">{{ movie.id }}</p>
        </div>
        <div class="flex flex-col items-center justify-center bg-orange-400 rounded-md mb-1 md:mb-0">
          <p class="text-sm text-black font-semibold text-center md:text-left p-1">Vote average</p>
          <p class="text-sm text-black font-semibold text-center md:text-left p-1">{{ movie.vote_average.toFixed(1) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>