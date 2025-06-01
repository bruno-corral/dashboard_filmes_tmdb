<script setup>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api.vue';
import SelectGenres from '@/components/SelectGenres.vue';
import CardMovie from '@/components/CardMovie.vue';

const genres = ref([]);
const movies = ref([]);

const currentPage = ref(1);
const lastPage = ref(0);

const getGenres = async () => {
  try {
    const response = await api.genres();
    genres.value = response.data.genres;
  } catch (error) {
    console.error('Error searching for genres:', error);
  }
}

const showFavoriteMovies = async () => {
  try {
    const response = await api.showFavoriteMovies(currentPage.value);
    movies.value = response.data.results;
    lastPage.value = response.data.total_pages;
  } catch (error) {
    console.error('Error searching for movies:', error);
  }
}

const changeFavoriteMovies = async (genreId) => {
  try {
    const response = await api.showFavoriteMovies();
    movies.value = response.data.results;
  } catch (error) {
    console.error('Error searching for movies:', error);
  }
}

function handleGoPage(page){
  if (page <= lastPage.value) {
    currentPage.value = page;

    showFavoriteMovies();
  }
}

function handleReturnPage(page) {
  currentPage.value = page;

  if (currentPage.value < 1) {
    currentPage.value = 1;
  }

  showFavoriteMovies();
}

onMounted(() => {
  getGenres();
  showFavoriteMovies(currentPage);
});

</script>

<template>
  <div class="flex flex-col md:flex-row justify-between pb-5">
    <h1 class="text-center lg:text-left text-xl md:text-2xl font-bold mb-4 p-3">Favorite Movies</h1>
    <div class="flex items-center justify-end md:w-[20%]">
      <SelectGenres :genres="genres" @getMoviesByGenre="changeFavoriteMovies" />
    </div>
  </div>
  <CardMovie :movies="movies"  />
  <div class="flex justify-center my-5">
    <button 
      @click="handleReturnPage(currentPage - 1)" 
      class="bg-[#42b983] text-white font-bold px-2 py-1 m-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
      :disabled="currentPage === 1"
    >
      <
    </button> 
    <div class="flex justify-center items-center text-[13px] sm:text-sm md:text-base">Page {{ currentPage }} of {{ lastPage }}</div> 
    <button 
      @click="handleGoPage(currentPage + 1)" 
      class="bg-[#42b983] text-white font-bold px-2 py-1 m-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
      :disabled="currentPage === lastPage"
    >
      >
    </button>
  </div>
</template>
