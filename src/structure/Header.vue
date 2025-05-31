<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let menuAberto = ref(false);

</script>

<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div class="container max-w-2xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0">
                    <RouterLink to="/" class="md:text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">My Favorite Movies</RouterLink>
                </div>
                <nav class="hidden md:flex space-x-6">
                    <RouterLink to="/" class="text-gray-700 hover:text-blue-600 transition-colors">Início</RouterLink>
                    <RouterLink to="/" class="text-gray-700 hover:text-blue-600 transition-colors">Filmes</RouterLink>
                </nav>
                <div class="hidden md:block">
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition cursor-pointer">Add Movie</button>
                </div>
                <div class="md:hidden">
                    <button @click="menuAberto = !menuAberto" type="button" class="text-gray-800 focus:outline-none">
                    <svg  class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    </button>
                </div>
            </div>
        </div>

        <div v-if="menuAberto" class="md:hidden px-4 pb-4 space-y-2">
            <RouterLink to="/" class="block text-gray-700 hover:text-blue-600 text-center transition-colors">Início</RouterLink>
            <RouterLink to="/" class="block text-gray-700 hover:text-blue-600 text-center transition-colors">Filmes</RouterLink>
        </div>
    </header>

</template>