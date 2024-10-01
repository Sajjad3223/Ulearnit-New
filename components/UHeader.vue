<template>
<header class="py-5">
  <div class="container mx-auto">
    <div class="flex w-full items-center justify-between">
      <button class="md:hidden" @click="showResponsiveNavbar = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <NuxtLink to="/" class="flex items-center flex-row-reverse md:flex-row gap-2">
        <img src="~/assets/images/logo.png" alt="logo" class="max-w-8 lg:max-w-10">
        <div class="flex flex-col md:-space-y-1">
          <span class="text-base lg:text-xl font-bold">یولرنیــت</span>
          <span class="text-xs lg:text-base uppercase font-light">ULearnit</span>
        </div>
      </NuxtLink>
      <ul class="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base font-light">
        <li>
          <NuxtLink to="/" class="opacity-70 hover:opacity-100 transition-opacity duration-300" exact-active-class="activeLink">صفحه اصلی</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/courses" class="opacity-70 hover:opacity-100 transition-opacity duration-300" exact-active-class="activeLink">دوره ها</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" class="opacity-70 hover:opacity-100 transition-opacity duration-300" exact-active-class="activeLink">مقالات</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aboutus" class="opacity-70 hover:opacity-100 transition-opacity duration-300" exact-active-class="activeLink">درباره ما</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contactus" class="opacity-70 hover:opacity-100 transition-opacity duration-300" exact-active-class="activeLink">تماس با ما</NuxtLink>
        </li>
      </ul>
      <div>
        <button class="opacity-70 flex items-center gap-1 hover:opacity-100 transition-opacity duration-300" @click="authStore.showAuthModal = true">
          <span class="hidden lg:block">ورود | ثبت نام</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.93311 5.04016C6.13977 2.64016 7.37311 1.66016 10.0731 1.66016H10.1598C13.1398 1.66016 14.3331 2.85349 14.3331 5.83349V10.1802C14.3331 13.1602 13.1398 14.3535 10.1598 14.3535H10.0731C7.39311 14.3535 6.15977 13.3868 5.93977 11.0268" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.3335 8H9.92016" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.43311 5.76758L10.6664 8.00091L8.43311 10.2342" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xs font-light lg:hidden">ورود</span>
        </button>
      </div>
    </div>
  </div>
  <Transition name="navbar">
    <div class="fixed md:hidden inset-0 bg-black/20 z-40" v-if="showResponsiveNavbar" @click.self="showResponsiveNavbar = false" style="pointer-events: all">
      <div class="flex w-3/4 h-full bg-[#03060D]/60 backdrop-blur-sm flex-col p-5 border-l border-white/20 gap-4 ">
        <NuxtLink to="/" class="flex items-center flex-row-reverse md:flex-row gap-2 self-center">
          <img src="~/assets/images/logo.png" alt="logo" class="max-w-10">
          <div class="flex flex-col md:-space-y-1">
            <span class="text-xl font-bold">یولرنیــت</span>
            <span class="text-base uppercase font-light">ULearnit</span>
          </div>
        </NuxtLink>
        <hr class="opacity-20">
        <ul class="flex flex-col gap-5">
          <li>
            <NuxtLink to="/">
              صفحه اصلی
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/courses">
              دوره های یولرنیت
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog">
              مقالات
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/aboutus">
              درباره ما
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contactus">
              تماس با ما
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</header>
</template>

<script setup lang="ts">
const showResponsiveNavbar = ref(false);

const authStore = useAuthStore();

</script>

<style scoped>
.navbar-enter-active,
.navbar-leave-active{
  @apply transition-all duration-300;
}

.navbar-enter-from,
.navbar-leave-to{
  @apply opacity-0 translate-x-full;
}

.activeLink{
  @apply relative !opacity-100 before:absolute before:inset-x-0 before:h-1 before:bg-[#046BEC] before:-bottom-3 before:rounded-full;
}
</style>