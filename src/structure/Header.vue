<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

let menuOpening = ref(false);

</script>

<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container max-w-2xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0">
                    <RouterLink to="/" class="md:text-xl font-bold text-gray-800 hover:text-[#42b983] transition-colors">My Movies</RouterLink>
                </div>
                <nav class="hidden md:flex space-x-6">
                    <RouterLink to="/" class="text-gray-700 hover:text-[#42b983] transition-colors">Begin</RouterLink>
                    <RouterLink to="/my-favorite-movies" class="text-gray-700 hover:text-[#42b983] transition-colors">Favorite Movies</RouterLink>
                </nav>
                <div class="hidden md:block">
                    <RouterLink to="/post-favorite-movie">
                        <button class="bg-[#42b983] text-white px-4 py-2 rounded-lg shadow hover:bg-[#42b983] transition cursor-pointer">Add Favorite Movie</button>
                    </RouterLink>
                </div>
                <div class="md:hidden">
                    <button @click="menuOpening = !menuOpening" type="button" class="text-gray-800 focus:outline-none">
                    <svg  class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>

        <div v-if="menuOpening" class="md:hidden px-4 pb-4 space-y-2">
            <RouterLink to="/" class="block text-gray-700 hover:text-[#42b983] text-center transition-colors">Begin</RouterLink>
            <RouterLink to="/my-favorite-movies" class="block text-gray-700 hover:text-[#42b983] text-center transition-colors">Favorite Movies</RouterLink>
            <RouterLink to="/post-favorite-movie" class="block text-gray-700 hover:text-[#42b983] text-center transition-colors">Add Favorite Movie</RouterLink>
        </div>
    </header>

</template>