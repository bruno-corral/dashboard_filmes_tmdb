<script setup>
import { api } from '@/services/api.vue';
import { ref } from 'vue';

let movieId = ref('');
let message = ref('');

const postFavoriteMovie = async (movieId) => {
  try {
    if (!movieId) {
      alert('Fill in the movie ID Movie!');
    }

    const response = await api.postFavoriteMovie(movieId);
    message.value = response.message;
  } catch (error) {
    console.error('Error saving movies:', error);
  }
}

</script>

<template>
    <div class="container">
        <h1 class="text-2xl font-bold mb-4 p-3">Add Favorite Movie</h1>

        <div class="flex gap-2">
            <input class="border border-gray-300 text-gray-900 text-sm outline-none rounded-2xl focus:ring-[#42b983] focus:border-[#52b989] py-1 px-2 w-full" type="text" placeholder="ID Movie" v-model="movieId">
            <button class="bg-[#42b983] text-white px-4 py-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
                @click="postFavoriteMovie(movieId)">
                Search
            </button>
        </div>
        <p v-if="message" class="text-green-500 mt-2 font-bold">{{ message }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>