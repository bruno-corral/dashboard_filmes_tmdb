<script setup>
import { ref } from 'vue';

let movie = ref('');

function searchMovie() {
    emits("searchMovie", movie.value);
}

const emits = defineEmits(['searchMovie']);

</script>

<template>
    <div class="flex gap-2 w-2xs">
        <input class="border border-gray-300 text-gray-900 text-sm outline-none rounded-2xl focus:ring-[#42b983] focus:border-[#52b989] py-1 px-2 w-full" type="text" placeholder="Search movie" v-model="movie">
        <button class="bg-[#42b983] text-white px-4 py-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer"
            @click="searchMovie">
            Send
        </button>
    </div>
</template>