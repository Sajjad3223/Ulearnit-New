<template>
  <div class="overflow-hidden">
<!--    <header class="w-full">
      <div class="flex items-center justify-between container mx-auto my-6">
        <NuxtLink to="/" class="flex items-center gap-4">
          <img src="~/assets/images/logo.png" alt="logo" class="max-w-[50px]">
          <div class="flex flex-col">
            <span class="text-2xl font-lalezar">یولرنیت</span>
            <span class="font-monserrat text-sm">ULearnit</span>
          </div>
        </NuxtLink>
        <div class="bg-[#D9D9D9]/10 backdrop-blur-lg p-4 px-6 rounded-lg flex font-light items-center gap-12 border-l border-b border-l-white/20 border-b-white/20 ">
          <NuxtLink to="/" class="opacity-100 font-semibold">
            صفحه اصلی
          </NuxtLink>
          <NuxtLink to="/" class="opacity-50">
            دوره ها
          </NuxtLink>
          <NuxtLink to="/" class="opacity-50">
            تماس با ما
          </NuxtLink>
          <NuxtLink to="/" class="opacity-50">
            درباره ما
          </NuxtLink>
        </div>
        <button class="relative group grid w-max place-items-center" @click="authStore.showAuthModal = true">
          <svg class="absolute transition-all duration-200 text-white group-hover:text-indigo-600" width="178" height="57" viewBox="0 0 178 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.5" x="1" y="1" width="176" height="55" rx="9" stroke="url(#paint0_linear_1570_789)" stroke-width="2"/>
            <defs>
              <linearGradient id="paint0_linear_1570_789" x1="89" y1="57" x2="89" y2="-7.2381" gradientUnits="userSpaceOnUse">
                <stop stop-color="currentColor"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.79561 4L5.10749 4C4.54855 4 4.0125 4.21071 3.61727 4.58579C3.22204 4.96086 3 5.46957 3 6V18C3 18.5304 3.22204 19.0391 3.61727 19.4142C4.0125 19.7893 4.54855 20 5.1075 20H8.79561M21 12.0011H9.05754M9.05754 12.0011L13.6207 16.5725M9.05754 12.0011L13.6207 7.42969" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
              ورود / ثبت نام
            </span>
          </span>
        </button>
      </div>
    </header>-->
    <UHeader />
    <main>
      <slot></slot>
    </main>
    <footer class="mt-12"></footer>
  </div>
</template>

<style>
body{
  @apply bg-[#03060D] text-white;
  font-family: 'Yekan Bakh FaNum',serif;
}
.container{
  @apply px-4 md:px-0;
}
</style>