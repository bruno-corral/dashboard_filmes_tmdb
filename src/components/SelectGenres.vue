<script setup>
const props = defineProps(['genres'])
</script>

<template>
    <select class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-3 px-2">
        <option value="" placeholder="Select a genre"></option>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
    </select>
</template>