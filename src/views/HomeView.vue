<script setup>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api.vue';
import CardMovie from '@/components/CardMovie.vue';

import InputSearchMovie from '@/components/InputSearchMovie.vue';

const movies = ref([]);

const currentPage = ref(1);
const lastPage = ref(0);

const getMovies = async () => {
  try {
    const response = await api.movies(currentPage.value);
    movies.value = response.data.results;
    lastPage.value = response.data.total_pages;
  } catch (error) {
    console.error('Error searching for movies:', error);
  }
}

const changeMovies = async (movie) => {
  try {
    if (!movie) {
      alert('Search cannot be empty!');
      return;
    }

    const response = await api.getSearchedMovie(movie);
    movies.value = response.data.results;
  } catch (error) {
    console.error('Error searching for movies:', error);
  }
}

function handleGoPage(page){
  if (page <= lastPage.value) {
    currentPage.value = page;

    getMovies();
  }
}

function handleReturnPage(page) {
  currentPage.value = page;

  if (currentPage.value < 1) {
    currentPage.value = 1;
  }

  getMovies();
}

onMounted(() => {
  getMovies();
});

</script>

<template>
  <div class="container">
    <div class="flex justify-between pb-5">
      <h1 class="text-2xl font-bold mb-4 p-3">Movies</h1>
      <InputSearchMovie @searchMovie="changeMovies" />
    </div>
    <CardMovie :movies="movies"  />
    <div class="flex justify-center my-5">
      <button 
        @click="handleReturnPage(currentPage - 1)" 
        class="bg-[#42b983] text-white px-2 py-1 m-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
        :disabled="currentPage === 1"
      >
        <
      </button> 
      <div class="flex justify-center items-center">Page {{ currentPage }} of {{ lastPage }}</div> 
      <button 
        @click="handleGoPage(currentPage + 1)" 
        class="bg-[#42b983] text-white px-2 py-1 m-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
        :disabled="currentPage === lastPage"
      >
        >
      </button>
    </div>
  </div>
</template>
