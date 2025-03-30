<template>
<div class="py-20">
  <div v-if="false" class="flex flex-col container mx-auto gap-10">
    <div class="w-full flex flex-col lg:flex-row items-center gap-20 lg:gap-0">
      <div class="flex flex-col gap-4 lg:w-1/2 z-[2]">
        <div class="flex flex-col items-start gap-5 md:gap-10">
          <div class="flex items-center gap-4">
            <img src="~/assets/images/unity-logo.png" alt="unity" class="max-w-10 md:max-w-16 rounded-xl">
            <h2 class="text-xl lg:text-5xl font-extrabold">
              پک جامع آموزش بازی سازی موبایل
            </h2>
          </div>
          <p class="text-xs md:text-base lg:text-2xl opacity-70">
            توی این پک صفر تا صد بازی سازی برای Android رو یاد میگیری، این پک با موتور بازی سازی یونیتی تهیه شده و از صفر تا خروجی گرفتن و انتشار بازی توی مارکت های ایرانی و خارجی مثل بازار و Google Play رو بررسی کردیم
          </p>
          <div class="hidden lg:flex items-end gap-5">
            <button class="relative w-max flex items-center justify-center group">
              <svg width="224" height="73" viewBox="0 0 224 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M223 72V6.96777H25.9942L6.96875 25.1299V72H223Z" stroke="white" stroke-opacity="0.2"/>
                <path d="M216.031 65.0323V0H19.0255L0 18.1622V65.0323H216.031Z" fill="#046BEC" class="group-hover:translate-x-2 group-hover:translate-y-1.5 transition-all duration-200 group-hover:fill-[#046BAA]"/>
              </svg>
              <span class="text-nowrap absolute left-1/4 -translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-300">مشاهده پک</span>
            </button>
            <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 4.5H7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="text-sm font-extrabold opacity-70">موبایل</span>
            </div>
            <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M13.01 2.92031L18.91 5.54031C20.61 6.29031 20.61 7.53031 18.91 8.28031L13.01 10.9003C12.34 11.2003 11.24 11.2003 10.57 10.9003L4.67002 8.28031C2.97002 7.53031 2.97002 6.29031 4.67002 5.54031L10.57 2.92031C11.24 2.62031 12.34 2.62031 13.01 2.92031Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="text-sm font-extrabold opacity-70">شامل 3 دوره</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 w-full relative flex items-center">
        <div class="absolute translate-x-1/2 -z-[2] blur-[200px] w-[480px] h-[360px] rotate-[-23deg] bg-[#791791]"></div>
        <div class="flex items-center justify-center relative mx-auto">
          <img src="~/assets/images/img_6.png" alt="banner" class="left-0 -translate-y-4 md:-translate-y-10 aspect-video w-full max-w-[300px] md:max-w-[500px] rounded-md md:rounded-2xl border border-white/20 -rotate-6 object-cover " >
          <img src="~/assets/images/img_6.png" alt="banner" class="absolute left-0 rotate-6 md:rotate-12 lg:translate-x-1/3 aspect-video w-full max-w-[300px] md:max-w-[500px] rounded-md md:rounded-2xl border border-white/20 object-cover " >
          <img src="~/assets/images/img_6.png" alt="banner" class="absolute left-0 lg:translate-x-[12%] translate-y-5 md:translate-y-12 aspect-video w-full max-w-[300px] md:max-w-[500px] rounded-md md:rounded-2xl border border-white/20 -rotate-12 object-cover " >
        </div>
      </div>
      <div class="flex flex-col md:flex-row lg:hidden gap-5 self-start w-full mt-5 md:mt-10 items-center">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 4.5H7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="text-sm font-extrabold opacity-70">موبایل</span>
          </div>
          <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M13.01 2.92031L18.91 5.54031C20.61 6.29031 20.61 7.53031 18.91 8.28031L13.01 10.9003C12.34 11.2003 11.24 11.2003 10.57 10.9003L4.67002 8.28031C2.97002 7.53031 2.97002 6.29031 4.67002 5.54031L10.57 2.92031C11.24 2.62031 12.34 2.62031 13.01 2.92031Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="text-sm font-extrabold opacity-70">شامل 3 دوره</span>
          </div>
        </div>
        <button class="w-max flex-1 self-center flex items-center justify-center group bg-[#046BEC] text-white py-4 px-10 rounded-md">
          مشاهده پک
        </button>
      </div>
    </div>
    <svg width="1524" height="1" viewBox="0 0 1524 1" fill="none" xmlns="http://www.w3.org/2000/svg" class="my-10 lg:my-20">
      <line opacity="0.3" x1="1524" y1="0.5" y2="0.5" stroke="white" stroke-dasharray="16 16"/>
    </svg>
    <div class="w-full flex flex-col lg:flex-row items-center gap-20 lg:gap-0">
      <div class="flex flex-col gap-4 lg:w-1/2 z-[2]">
        <div class="flex flex-col items-start gap-10">
          <div class="flex items-center gap-4">
            <img src="~/assets/images/unity-logo.png" alt="unity" class="max-w-10 md:max-w-16 rounded-xl">
            <h2 class="text-xl lg:text-5xl font-extrabold">
              پک جامع آموزش بازی سازی موبایل
            </h2>
          </div>
          <p class="text-xs md:text-base lg:text-2xl opacity-70">
            توی این پک صفر تا صد بازی سازی برای Android رو یاد میگیری، این پک با موتور بازی سازی یونیتی تهیه شده و از صفر تا خروجی گرفتن و انتشار بازی توی مارکت های ایرانی و خارجی مثل بازار و Google Play رو بررسی کردیم
          </p>
          <div class="hidden lg:flex items-end gap-5">
            <button class="relative w-max flex items-center justify-center group">
              <svg width="224" height="73" viewBox="0 0 224 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M223 72V6.96777H25.9942L6.96875 25.1299V72H223Z" stroke="white" stroke-opacity="0.2"/>
                <path d="M216.031 65.0323V0H19.0255L0 18.1622V65.0323H216.031Z" fill="#046BEC" class="group-hover:translate-x-2 group-hover:translate-y-1.5 transition-all duration-200 group-hover:fill-[#046BAA]"/>
              </svg>
              <span class="text-nowrap absolute left-1/4 -translate-x-1 -translate-y-1 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-300">مشاهده پک</span>
            </button>
            <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 4.5H7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="text-sm font-extrabold opacity-70">موبایل</span>
            </div>
            <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M13.01 2.92031L18.91 5.54031C20.61 6.29031 20.61 7.53031 18.91 8.28031L13.01 10.9003C12.34 11.2003 11.24 11.2003 10.57 10.9003L4.67002 8.28031C2.97002 7.53031 2.97002 6.29031 4.67002 5.54031L10.57 2.92031C11.24 2.62031 12.34 2.62031 13.01 2.92031Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="text-sm font-extrabold opacity-70">شامل 3 دوره</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 w-full relative flex items-center">
        <div class="absolute translate-x-1/2 -z-[2] blur-[200px] w-[480px] h-[360px] rotate-[-23deg] bg-[#791791]"></div>
        <div class="flex items-center justify-center relative mx-auto">
          <img src="~/assets/images/img_6.png" alt="banner" class="left-0 -translate-y-4 md:-translate-y-10 aspect-video w-full max-w-[300px] md:max-w-[500px] rounded-md md:rounded-2xl border border-white/20 -rotate-6 object-cover " >
          <img src="~/assets/images/img_6.png" alt="banner" class="absolute left-0 rotate-6 md:rotate-12 lg:translate-x-1/3 aspect-video w-full max-w-[300px] md:max-w-[500px] rounded-md md:rounded-2xl border border-white/20 object-cover " >
          <img src="~/assets/images/img_6.png" alt="banner" class="absolute left-0 lg:translate-x-[12%] translate-y-5 md:translate-y-12 aspect-video w-full max-w-[300px] md:max-w-[500px] rounded-md md:rounded-2xl border border-white/20 -rotate-12 object-cover " >
        </div>
      </div>
      <div class="flex flex-col md:flex-row lg:hidden gap-5 self-start w-full mt-5 md:mt-10 items-center">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 4.5H7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="text-sm font-extrabold opacity-70">موبایل</span>
          </div>
          <div class="flex items-center gap-1 bg-[#046BEC]/20 rounded-lg p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M13.01 2.92031L18.91 5.54031C20.61 6.29031 20.61 7.53031 18.91 8.28031L13.01 10.9003C12.34 11.2003 11.24 11.2003 10.57 10.9003L4.67002 8.28031C2.97002 7.53031 2.97002 6.29031 4.67002 5.54031L10.57 2.92031C11.24 2.62031 12.34 2.62031 13.01 2.92031Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="text-sm font-extrabold opacity-70">شامل 3 دوره</span>
          </div>
        </div>
        <button class="w-max flex-1 self-center flex items-center justify-center group bg-[#046BEC] text-white py-4 px-10 rounded-md">
          مشاهده پک
        </button>
      </div>
    </div>
    <svg width="1524" height="1" viewBox="0 0 1524 1" fill="none" xmlns="http://www.w3.org/2000/svg" class="my-10 lg:my-20">
      <line opacity="0.3" x1="1524" y1="0.5" y2="0.5" stroke="white" stroke-dasharray="16 16"/>
    </svg>
  </div>

  <section class="flex flex-col container mx-auto gap-8">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-4">
        <svg width="51" height="38" viewBox="0 0 51 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.8008 19.3401L41.609 3.28499V35.3952L13.8008 19.3401Z" fill="#046BEC"/>
          <path opacity="0.5" d="M0 19.3401L27.8082 3.28499L27.8082 35.3952L0 19.3401Z" fill="#046BEC"/>
        </svg>
        <h2 class="text-xl md:text-3xl font-semibold">دوره های آموزشی یولرنیت</h2>
      </div>
      <span class="text-xs md:text-base">اینجا شروع یه ماجراجویی تازس، قراره رویاهاتو بسازی!</span>
    </div>
    <div class="flex flex-col lg:flex-row gap-10">
      <div class="lg:w-[23%] h-full flex flex-col px-5 py-8 border rounded-lg lg:rounded-2xl border-white/20 gap-5">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path d="M4.16989 15.2998L8.69989 19.8298C10.5599 21.6898 13.5799 21.6898 15.4499 19.8298L19.8399 15.4398C21.6999 13.5798 21.6999 10.5598 19.8399 8.6898L15.2999 4.1698C14.3499 3.2198 13.0399 2.7098 11.6999 2.7798L6.69989 3.0198C4.69989 3.1098 3.10989 4.6998 3.00989 6.6898L2.76989 11.6898C2.70989 13.0398 3.21989 14.3498 4.16989 15.2998Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.49988 12C10.8806 12 11.9999 10.8807 11.9999 9.5C11.9999 8.11929 10.8806 7 9.49988 7C8.11917 7 6.99988 8.11929 6.99988 9.5C6.99988 10.8807 8.11917 12 9.49988 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </g>
            </svg>
            <strong>جستجو در نتایج</strong>
          </div>
          <div class="relative w-full flex items-center">
            <input type="text" class="p-4 w-full bg-[#010205] border rounded-xl border-white/30" @change="(e)=>filterParams.search = e.target.value" placeholder="عبارت جستجو ...">
          </div>
        </div>
        <svg width="313" height="1" viewBox="0 0 313 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line opacity="0.2" x1="4.37114e-08" y1="0.5" x2="313" y2="0.500027" stroke="white" stroke-dasharray="11 11"/>
        </svg>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3">
                <path d="M4.16989 15.2998L8.69989 19.8298C10.5599 21.6898 13.5799 21.6898 15.4499 19.8298L19.8399 15.4398C21.6999 13.5798 21.6999 10.5598 19.8399 8.6898L15.2999 4.1698C14.3499 3.2198 13.0399 2.7098 11.6999 2.7798L6.69989 3.0198C4.69989 3.1098 3.10989 4.6998 3.00989 6.6898L2.76989 11.6898C2.70989 13.0398 3.21989 14.3498 4.16989 15.2998Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.49988 12C10.8806 12 11.9999 10.8807 11.9999 9.5C11.9999 8.11929 10.8806 7 9.49988 7C8.11917 7 6.99988 8.11929 6.99988 9.5C6.99988 10.8807 8.11917 12 9.49988 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </g>
            </svg>
            <strong>هزینه دوره</strong>
          </div>
          <div class="relative w-full flex items-center">
            <BaseRadioToggle :options="EPriceFilter" v-model="filterParams.priceFilter" name="priceFilter" />
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col gap-5">
        <div class="flex flex-col lg:flex-row lg:items-center gap-6 ">
          <div class="flex w-max items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <strong>مرتب سازی:</strong>
          </div>
          <BaseRadioToggle :options="EOrderFilter" v-model="filterParams.orderFilter" name="filterBy" transparent />
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5" v-if="!loading">
          <UCourseCard v-for="course in courses" :key="course.id" :course="course" />
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5" v-else>
          <div class="w-full flex flex-col min-h-[400px] skeleton bg-slate-900 rounded-xl p-4 justify-between" v-for="i in filterParams.take" :key="i">
            <div class="flex h-1/2 w-full rounded-md skeleton-el"></div>
            <div class="flex h-4 w-full rounded-full skeleton-el"></div>
            <div class="flex flex-col gap-2 w-full">
              <div class="flex h-2 w-full rounded-full skeleton-el"></div>
              <div class="flex h-2 w-full rounded-full skeleton-el"></div>
              <div class="flex h-2 w-1/2 rounded-full skeleton-el"></div>
            </div>
            <div class="flex items-end justify-between w-full">
              <div class="flex flex-col w-full gap-2">
                <div class="flex h-3 w-1/2 rounded-full skeleton-el"></div>
                <div class="flex h-3 w-1/3 rounded-full skeleton-el"></div>
              </div>
              <div class="flex h-4 w-1/2 rounded-full skeleton-el"></div>
            </div>
            <hr class="opacity-10 -mx-4">
            <div class="flex self-center h-2 w-1/2 rounded-full skeleton-el"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
</template>

<script setup lang="ts">
import {
  type CourseCardDto,
  type CourseFilterParams,
  EOrderFilter,
  EPriceFilter
} from "~/models/course/courseSearchResultDto";
import {GetCourseFilter} from "~/services/course.service";
useHead({
  title:'دوره های آموزشی'
})

const courses:Ref<CourseCardDto[]> = ref([]);
const loading = ref(false);

const pageId = ref(1);
const filterParams:CourseFilterParams = reactive({
  pageId: pageId.value,
  take:9,
  search:undefined,
  priceFilter:EPriceFilter.همه,
})
watch(
    filterParams,
    async ()=>await getData()
)

onMounted(async ()=>{
  await getData();
})

const getData = async ()=>{
  filterParams.pageId = pageId.value;
  loading.value = true;
  const result = await GetCourseFilter(filterParams);
  if(result.isSuccess){
    courses.value = result.data?.data ?? [];
  }
  loading.value = false;
}
</script>