<script setup>
import { ref } from 'vue';

const props = defineProps(['genres']);

const genreId = ref(0);

const emits = defineEmits(['getMoviesByGenre']);

const searchMovie = async (event) => {
    genreId.value = event.target.value;

    emits("getMoviesByGenre", genreId.value);
}
</script>

<template>
    <div class="flex gap-2">
        <select class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#42b983] focus:border-[#52b989] py-3 px-2"
        @change="searchMovie">
            <option value="" placeholder="Select a genre">{{ 'Select a genre' }}</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id" >{{ genre.name }}</option>
        </select>
    </div>
</template>