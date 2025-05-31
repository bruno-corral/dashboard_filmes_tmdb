<script setup>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api.vue';
import CardMovie from '@/components/CardMovie.vue';

import InputSearchMovie from '@/components/InputSearchMovie.vue';

const movies = ref([]);

const getMovies = async () => {
  try {
    const response = await api.movies();
    movies.value = response.data.results;
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
  </div>
</template>
