<template>
    <div class="flex justify-center items-center h-[100%]">
      <div class="w-[88%]">
        <h1 class="text-sm sm:text-lg md:text-2xl text-center font-bold mb-2 sm:mb-4">404 - Page not found</h1>
        <p class="text-sm sm:text-lg md:text-xl text-center mb-2 sm:mb-4">The page you are looking for does not exist.</p>
        <div class="flex items-center justify-center gap-2 p-3">
            <router-link to="/">
                <button class="bg-[#42b983] text-white px-8 md:px-15 py-2 rounded-lg shadow hover:bg-[#52b989] transition cursor-pointer">
                    <p class="text-sm sm:text-lg md:text-xl">Back to top</p>
                </button>
            </router-link>
        </div>
      </div>
    </div>
</template>