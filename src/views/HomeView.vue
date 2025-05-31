<script setup>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api.vue';
import CardMovie from '@/components/CardMovie.vue';
import SelectGenres from '@/components/SelectGenres.vue';
import InputSearchMovie from '@/components/InputSearchMovie.vue';

const movies = ref([]);
const genres = ref([]);

// const showFavoriteMovies = async () => {
//   try {
//     const response = await api.showFavoriteMovies();
//     console.log(response);
//     movies.value = response.data.results;
//   } catch (error) {
//     console.error('Erro ao buscar filmes:', error);
//   }
// }

const getMovies = async () => {
  try {
    const response = await api.movies();
    movies.value = response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
  }
}

const getGenres = async () => {
  try {
    const response = await api.genres();
    genres.value = response.data.genres;
  } catch (error) {
    console.error('Erro ao buscar generos:', error);
  }
}

const changeMovies = async (movie) => {
  try {
    const response = await api.getSearchedMovie(movie);
    console.log(response);

    movies.value = response.data.results;
    // console.log(movies);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
  }
}

onMounted(() => {
  getMovies();
  getGenres();

  // changeMovies();
});

</script>

<template>
  <div class="container">
    <div class="flex justify-between pb-5">
      <h1 class="text-2xl font-bold mb-4 p-3">Movies</h1>
      <InputSearchMovie @searchMovie="changeMovies" />
      <!-- <SelectGenres :genres="genres" /> -->
    </div>
    <CardMovie :movies="movies"  />
    <!-- <CardMovie :movies="movies" @getChoiceGenre="changeMovies" /> -->
  </div>
</template>
