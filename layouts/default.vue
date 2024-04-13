<template>
  <header class="h-[100px] py-4 bg-[#0B0F1C33] backdrop-blur-md sticky top-0 z-40">
    <div class="container mx-auto flex items-center justify-between">
      <div class="font-lalezar">
        <img src="~/assets/images/icon.png" alt="" class="w-[150px]">
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
  <div class="w-[767px] h-[767px] absolute -top-1/3 rounded-full right-1/2 translate-x-1/2 -z-20 blur-[400px] opacity-70"
       style="background: linear-gradient(270.58deg, rgba(6, 100, 235, 1) -14.1%, rgba(179, 83, 253, 1) 112.6%);"></div>

    <slot></slot>

  <footer class="relative mt-[200px] py-[70px] border-t border-[#293041]">
    <div class="container mx-auto flex flex-col space-y-6">
      <div class="w-full grid grid-cols-5 gap-4">
        <div class="font-lalezar">
          <img src="~/assets/images/icon.png" alt="" class="w-[150px]">
        </div>
        <ul class="flex items-center flex-col space-y-3.5 text-[#7D7D7D]">
          <li class="text-white font-semibold">
            <NuxtLink to="/">صفحه اصلی</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">برترین دوره ها </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">اخرین دوره ها</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">مقالات</NuxtLink>
          </li>
        </ul>
        <ul class="flex items-center flex-col space-y-3.5 text-[#7D7D7D]">
          <li class="text-white font-semibold">
            <NuxtLink to="/">لیست دوره ها</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">یونیتی</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">آنریل انجین</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">برنامه نویسی</NuxtLink>
          </li>
        </ul>
        <ul class="flex items-center flex-col space-y-3.5 text-[#7D7D7D]">
          <li class="text-white font-semibold">
            <NuxtLink to="/">درباره ما</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">اشنایی با یولرنیت</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">تدریس در یولرنیت</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">چرا ما؟</NuxtLink>
          </li>
        </ul>
        <div class="flex flex-col items-stretch">
          <NuxtLink class="text-white font-semibold" to="/">تماس با ما</NuxtLink>
          <div class="mt-7 flex flex-col items-start space-y-2">
            <input type="email" class="bg-[#242936] rounded-full text-white px-2 py-1 text-sm" placeholder="ایمیل شما">
            <button class="px-3 py-1 text-sm border border-white rounded-full">عضویت</button>
          </div>
        </div>
      </div>
      <hr class="border-[#293041]">
      <div class="mx-auto flex items-center gap-2 font-thin text-sm">
        <span>تمام حقوق این وبسایت متعلق به</span>
        <NuxtLink to="/" class="font-lalezar text-2xl">یونرلیت</NuxtLink>
        <span>می باشد</span>
      </div>
    </div>
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
<script setup lang="ts">
</script>