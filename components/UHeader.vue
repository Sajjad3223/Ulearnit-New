<script setup lang="ts">

</script>

<template>
<header class="py-5">
  <div class="container mx-auto">
    <div class="flex w-full items-center justify-between">
      <button class="md:hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <NuxtLink to="/" class="flex items-center flex-row-reverse md:flex-row gap-2">
        <img src="~/assets/images/logo.png" alt="logo" class="max-w-8 md:max-w-10">
        <div class="flex flex-col md:-space-y-1">
          <span class="text-base md:text-xl font-bold">یولرنیــت</span>
          <span class="text-sm md:text-base uppercase font-light">ULearnit</span>
        </div>
      </NuxtLink>
      <ul class="hidden md:flex items-center gap-10 font-light">
        <li>
          <NuxtLink to="/" class="opacity-70 hover:opacity-100 transition-opacity duration-300" exact-active-class="relative !opacity-100 before:absolute before:inset-x-0 before:h-1 before:bg-[#046BEC] before:-bottom-3 before:rounded-full">صفحه اصلی</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/courses" class="opacity-70 hover:opacity-100 transition-opacity duration-300">دوره ها</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="opacity-70 hover:opacity-100 transition-opacity duration-300">مقالات</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aboutus" class="opacity-70 hover:opacity-100 transition-opacity duration-300">درباره ما</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contactus" class="opacity-70 hover:opacity-100 transition-opacity duration-300">تماس با ما</NuxtLink>
        </li>
      </ul>
      <div>
        <button class="opacity-70 flex items-center gap-1 hover:opacity-100 transition-opacity duration-300">
          <span class="hidden md:block">ورود | ثبت نام</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.79561 4L5.10749 4C4.54855 4 4.0125 4.21071 3.61727 4.58579C3.22204 4.96086 3 5.46957 3 6V18C3 18.5304 3.22204 19.0391 3.61727 19.4142C4.0125 19.7893 4.54855 20 5.1075 20H8.79561M21 12.0011H9.05754M9.05754 12.0011L13.6207 16.5725M9.05754 12.0011L13.6207 7.42969" stroke="#F9FAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
</template>

<style scoped>

</style>