<template>
<div>
  <strong>داشبورد</strong>
  <base-divider class="my-4"/>
  <div class="flex flex-col lg:flex-row gap-5 bg-black/30 rounded-xl py-4 px-8 items-center">
    <div class="flex-1 flex items-center gap-5">
      <div class="flex items-center justify-center bg-black/50 border border-white/20 rounded-lg w-12 aspect-square">
        <svg class="opacity-70" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 5.49001V20.49" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.75 8.49001H5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 11.49H5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="flex flex-col gap-1">
        <span class="opacity-60 text-xs">
          تعداد دوره های شما
        </span>
        <span class="text-xl font-bold">5 دوره</span>
      </div>
    </div>
    <div class="h-px lg:h-12 w-full lg:w-px bg-white/10 shrink mx-4"></div>
    <div class="flex-1 flex items-center gap-5">
      <div class="flex items-center justify-center bg-black/50 border border-white/20 rounded-lg w-12 aspect-square">
        <svg class="opacity-70" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9955 13.75H12.0045" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div class="flex flex-col gap-1">
      <span class="opacity-60 text-xs">
        تعداد سوالات شما
      </span>
        <span class="text-xl font-bold">5 سوال</span>
      </div>
    </div>
    <div class="h-px lg:h-12 w-full lg:w-px bg-white/10 shrink mx-4"></div>
    <div class="flex-1 flex items-center gap-5">
      <div class="flex items-center justify-center bg-black/50 border border-white/20 rounded-lg w-12 aspect-square">
        <svg class="opacity-70" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.26001 11.02V15.99C4.26001 17.81 4.26001 17.81 5.98001 18.97L10.71 21.7C11.42 22.11 12.58 22.11 13.29 21.7L18.02 18.97C19.74 17.81 19.74 17.81 19.74 15.99V11.02C19.74 9.2 19.74 9.2 18.02 8.04L13.29 5.31C12.58 4.9 11.42 4.9 10.71 5.31L5.98001 8.04C4.26001 9.2 4.26001 9.2 4.26001 11.02Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.63 10.99L13.2 11.88C13.29 12.02 13.49 12.16 13.64 12.2L14.66 12.46C15.29 12.62 15.46 13.16 15.05 13.66L14.38 14.47C14.28 14.6 14.2 14.83 14.21 14.99L14.27 16.04C14.31 16.69 13.85 17.02 13.25 16.78L12.27 16.39C12.12 16.33 11.87 16.33 11.72 16.39L10.74 16.78C10.14 17.02 9.68002 16.68 9.72002 16.04L9.78002 14.99C9.79002 14.83 9.71002 14.59 9.61002 14.47L8.94002 13.66C8.53002 13.16 8.70002 12.62 9.33002 12.46L10.35 12.2C10.51 12.16 10.71 12.01 10.79 11.88L11.36 10.99C11.72 10.45 12.28 10.45 12.63 10.99Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div class="flex flex-col gap-1">
      <span class="opacity-60 text-xs">
        امتیاز شما
      </span>
        <span class="text-xl font-bold">{{ (2000).toLocaleString() }} <span class="text-xs opacity-70 font-light">امتیاز</span></span>
      </div>
    </div>
    <div class="h-px lg:h-12 w-full lg:w-px bg-white/10 shrink mx-4"></div>
    <div class="flex-1 flex items-center gap-5">
      <div class="flex items-center justify-center bg-black/50 border border-white/20 rounded-lg w-12 aspect-square">
        <svg class="opacity-70" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001H7.00141C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div class="flex flex-col gap-1">
      <span class="opacity-60 text-xs">
        موجودی کیف پول
      </span>
        <BasePrice class="text-xl font-bold" :price="5000"/>
      </div>
    </div>
  </div>
  <div class="mt-10 flex flex-col w-full gap-4">
    <h4 class="disc">آخرین دوره های بازدید شده</h4>
    <ul class="flex flex-col w-full gap-4">
      <li v-for="i in 2" :key="i">
        <NuxtLink class="border border-white/20 p-4 lg:pl-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 w-full flex flex-col lg:flex-row gap-5 items-center">
          <img src="~/assets/images/img_6.png" alt="course" class="lg:max-w-40 rounded-lg">
          <div class="flex-1 flex flex-col items-center lg:items-start gap-4">
            <h5 class="font-semibold text-lg">دوره آموزش هوش مصنوعی و AI در آنریل انجین</h5>
            <span>فصل سوم</span>
            <span>قسمت 12: آموزش راه اندازی AI Perception</span>
          </div>
          <button class="px-6 py-3 rounded-md bg-primary">
            رفتن به دوره
          </button>
        </NuxtLink>
      </li>
    </ul>
  </div>
  <div class="mt-10 flex flex-col w-full gap-4">
    <h4 class="disc">آخرین اطلاعیه ها</h4>
    <ul class="flex flex-col w-full gap-4">
      <li v-for="i in 2" :key="i">
        <NuxtLink class="border border-indigo-500 p-4 rounded-md bg-indigo-500/10 w-full flex gap-3 items-start text-indigo-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.9945 16H12.0035" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>
            اگر به دنبال یادگیری فریمورک قدرتمند و محبوب Asp.net core هستی و میخوای دقیقا بلافاصله بعد از یادگیری یک پروژه فروشگاه هم بنویسی تا به مطالبی که یاد گرفتی مسلط بشی، پیشنهاد میکنیم کمپ آموزشی و پروژه محور Asp.net core رو شرکت کنی.
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'profile'
})

</script>

<style>
.disc{
  @apply relative flex items-center pr-6;
}
.disc:before{
  content: '';
  @apply absolute w-2 h-2 rounded-full bg-white aspect-square -right-0 animate-pulse;
  box-shadow: 0 0 10px 0 rgba(255,255,255,0.3);
}
</style>