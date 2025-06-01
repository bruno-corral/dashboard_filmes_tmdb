<script setup>
import { api } from '@/services/api.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';

let movieId = ref('');
let message = ref('');

const postFavoriteMovie = async (movieId) => {
  try {
    if (!movieId) {
      Swal.fire({
        title: 'Error!',
        text: 'Fill in the ID Movie!',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return;
    }

    const response = await api.postFavoriteMovie(movieId);
    message.value = response.message;
  } catch (error) {
    console.error('Error saving movies:', error);
  }
}

</script>

<template>
    <div class="flex justify-center items-center h-[100%]">
      <div class="w-[88%]">
        <h1 class="text-sm sm:text-lg md:text-2xl text-center md:text-left font-bold mb-2 sm:mb-4">Add Favorite Movie</h1>

        <div class="flex flex-col sm:flex-row gap-2 p-3">
            <input class="border border-gray-300 text-gray-900 text-sm outline-none rounded-2xl focus:ring-[#42b983] focus:border-[#52b989] py-1 px-2 w-full" type="text" placeholder="ID Movie" v-model="movieId">
            <button class="bg-[#42b983] text-white px-8 md:px-15 py-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
                @click="postFavoriteMovie(movieId)">
                Add
            </button>
        </div>
        <p v-if="message" class="text-[#42b983] mt-2 font-bold text-center text-[12px] sm:text-sm md:text-base">{{ message }}</p>
      </div>
    </div>
</template>

<style lang="scss" scoped>

</style>