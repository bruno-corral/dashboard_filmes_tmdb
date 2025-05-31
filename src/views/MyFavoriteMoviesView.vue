<script setup>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api.vue';
import SelectGenres from '@/components/SelectGenres.vue';
import CardMovie from '@/components/CardMovie.vue';

const genres = ref([]);
const movies = ref([]);

const getGenres = async () => {
  try {
    const response = await api.genres();
    genres.value = response.data.genres;
  } catch (error) {
    console.error('Erro ao buscar generos:', error);
  }
}

const showFavoriteMovies = async () => {
  try {
    const response = await api.showFavoriteMovies();
    console.log(response);
    movies.value = response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
  }
}

onMounted(() => {
  getGenres();
  showFavoriteMovies();
});

</script>

<template>
  <div class="container">
    <div class="flex justify-between pb-5">
      <h1 class="text-2xl font-bold mb-4 p-3">My Movies</h1>
      <SelectGenres :genres="genres" />
    </div>
    <CardMovie :movies="movies"  />
  </div>
</template>
