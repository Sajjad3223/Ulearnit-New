<template>
<div>
  <header class="w-full">
    <div class="flex items-center justify-between container mx-auto my-6">
      <div class="w-36">
        <img src="~/assets/images/icon.png" alt="logo">
      </div>
      <div class="bg-[#D9D9D9]/10 p-4 px-6 rounded-lg flex font-light items-center gap-12">
        <NuxtLink to="/" class="opacity-50">
          صفحه اصلی
        </NuxtLink>
        <NuxtLink to="/" class="opacity-100 font-semibold">
          دوره ها
        </NuxtLink>
        <NuxtLink to="/" class="opacity-50">
          تماس با ما
        </NuxtLink>
        <NuxtLink to="/" class="opacity-50">
          درباره ما
        </NuxtLink>
      </div>
      <button class="flex items-center gap-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.79561 4L5.10749 4C4.54855 4 4.0125 4.21071 3.61727 4.58579C3.22204 4.96086 3 5.46957 3 6V18C3 18.5304 3.22204 19.0391 3.61727 19.4142C4.0125 19.7893 4.54855 20 5.1075 20H8.79561M21 12.0011H9.05754M9.05754 12.0011L13.6207 16.5725M9.05754 12.0011L13.6207 7.42969" stroke="#F9FAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>
          ورود / ثبت نام
        </span>
      </button>
    </div>
  </header>
  <main>
    <div class="absolute inset-x-0 h-auto top-0 -z-10 grid place-items-center">
      <img src="~/assets/images/unity-banner.png" alt="unity bannerr" class="w-full h-full max-h-screen object-cover">
      <div class="absolute bottom-12 right-[10vw] flex flex-col space-y-8">
        <h2 class="text-5xl font-lalezar">نام دوره انتخاب شده</h2>
        <span class="text-lg font-light">دوره جامع یونیتی شخصیت سازی</span>
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-2">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48924 10.8701C5.74968 10.8701 3.41016 11.2843 3.41016 12.9432C3.41016 14.602 5.73484 15.0311 8.48924 15.0311C11.2288 15.0311 13.5677 14.6162 13.5677 12.958C13.5677 11.2998 11.2436 10.8701 8.48924 10.8701Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48905 8.50376C10.2869 8.50376 11.744 7.04594 11.744 5.24812C11.744 3.45031 10.2869 1.99316 8.48905 1.99316C6.69123 1.99316 5.23342 3.45031 5.23342 5.24812C5.22735 7.03987 6.67504 8.49769 8.46612 8.50376H8.48905Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>سجاد میرشبی</span>
          </div>
          <div class="flex items-center gap-2">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0524 8.50033C15.0524 12.1192 12.1192 15.0524 8.50033 15.0524C4.88145 15.0524 1.94824 12.1192 1.94824 8.50033C1.94824 4.88145 4.88145 1.94824 8.50033 1.94824C12.1192 1.94824 15.0524 4.88145 15.0524 8.50033Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.9312 10.5849L8.26074 8.99189V5.55859" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>03:56:21</span>
          </div>
          <div class="flex items-center gap-2">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1317 11.4919H6.01758" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.1317 8.52702H6.01758" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.96904 5.56803H6.01758" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2682 1.94824C11.2682 1.94824 5.83029 1.95108 5.82179 1.95108C3.86679 1.96312 2.65625 3.24945 2.65625 5.21153V11.7254C2.65625 13.6974 3.876 14.9887 5.848 14.9887C5.848 14.9887 11.2852 14.9865 11.2944 14.9865C13.2494 14.9745 14.4606 13.6875 14.4606 11.7254V5.21153C14.4606 3.23953 13.2402 1.94824 11.2682 1.94824Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>5 قسمت</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-[100vh]">
      <hr class="opacity-20">
      <div class="container mx-auto mt-6">
        <div class="flex items-start gap-8">
          <div class="flex-1">
            <div class="relative">
              <img src="~/assets/images/course-preview.png" alt=""/>
              <button class="absolute bottom-8 left-8">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_1716_298)">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#D9D9D9" fill-opacity="0.4"/>
                    <circle cx="27.5" cy="27.5" r="27" stroke="url(#paint0_linear_1716_298)" stroke-opacity="0.5"/>
                  </g>
                  <path d="M20.4906 20.5874C20.4671 19.048 22.1189 18.0604 23.4638 18.8098L36.3246 25.9757C37.6695 26.7251 37.6988 28.6494 36.3774 29.4394L23.7412 36.9942C22.4197 37.7843 20.7386 36.8475 20.7151 35.3081L20.4906 20.5874Z" fill="#25272B"/>
                  <defs>
                    <filter id="filter0_b_1716_298" x="-4" y="-4" width="63" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1716_298"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1716_298" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_1716_298" x1="27.5" y1="0" x2="27.5" y2="55" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white"/>
                      <stop offset="1" stop-color="#999999" stop-opacity="0.15"/>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <aside class="w-1/4 p-4 px-6 bg-[#111723] border border-opacity-10 border-[#FDFDFD] rounded-xl flex flex-col space-y-5 sticky top-6">
            <span class="font-lalezar text-2xl">نام دوره انتخاب شده</span>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span>تعداد دانشجو</span>
              </div>
              <span>56</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span>مدت زمان</span>
              </div>
              <span>03:56:24</span>
            </div>
            <hr class="border-opacity-10 border-[#FDFDFD]">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span>هزینه آموزش</span>
              </div>
              <span>250,000 تومان</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span>تخفیف</span>
              </div>
              <span class="text-[#3C42E7]">75,000 تومان</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <span>قیمت نهایی</span>
              </div>
              <strong>175,000 تومان</strong>
            </div>
            <button class="bg-[#3C42E7] rounded-lg py-3 text-lg">
              ثبت نام در دوره
            </button>
          </aside>
        </div>
      </div>
    </div>
  </main>
  <footer class="mt-12"></footer>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:''
})
</script>

<style >
body{
  @apply bg-[#090D16] text-white;
  font-family: 'Vazir FD-WOL',serif;
}
</style>