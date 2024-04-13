<template>
  <header class="h-[100] py-4 bg-[#0B0F1C33] backdrop-blur-md sticky top-0 z-40">
    <div class="container mx-auto flex items-center justify-between">
      <div class="font-lalezar">
        <img src="~/assets/images/icon.png" alt="" class="w-[150]">
      </div>
      <ul class="flex items-center gap-12">
        <li><NuxtLink class="text-[#4773DE] font-bold relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-[#4773DE] after:w-7 after:h-1.5 after:rounded-full after:-bottom-4" style="text-shadow: 0 0 4px #4773DE80;">صفحه اصلی</NuxtLink></li>
        <li><NuxtLink>لیست دوره ها</NuxtLink></li>
        <li><NuxtLink>وبلاگ</NuxtLink></li>
        <li><NuxtLink>تماس با ما</NuxtLink></li>
        <li><NuxtLink>درباره ما</NuxtLink></li>
      </ul>
      <a href="" class="px-6 py-2 rounded-full" style="background: linear-gradient(90deg, #0065EB 0%, #BE52FE 100%);" >ورود/ثبت نام</a>
    </div>
  </header>
  <div class="w-[767px] h-[767px] absolute -top-1/3 rounded-full right-1/2 translate-x-1/2 -z-20 blur-[400] opacity-70"
       style="background: linear-gradient(270.58deg, rgba(6, 100, 235, 1) -14.1%, rgba(179, 83, 253, 1) 112.6%);"></div>

    <slot></slot>

  <footer class="relative mt-[200] py-[70] border-t border-[#293041]">

  </footer>
</template>

<style>
body{
  background-color: #090D16;
  color: white;
  font-family: 'Vazir FD-WOL',serif;
  overflow-x: hidden;
}
</style>