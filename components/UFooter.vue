<template>
<footer class="bg-[#070B15] py-14 mt-10">
  <div class="lg:hidden fixed inset-x-0 bottom-0 py-5 bg-black/20 rounded-t-2xl backdrop-blur-md z-20 border-t border-white/20 flex items-center justify-center" style="box-shadow: 0 -5px 7px 0 rgba(0,0,50,0.3)">
    <div class="flex w-full items-center justify-around [&>a>span]:hidden">
      <NuxtLink to="/" class="flex flex-col md:flex-row items-center gap-1 md:gap-2" exact-active-class="text-indigo-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.07 2.82L3.14002 8.37C2.36002 8.99 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 18V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-[10px] font-light">خانه</span>
      </NuxtLink>
      <NuxtLink to="/courses" class="flex flex-col md:flex-row items-center gap-1 md:gap-2" exact-active-class="text-indigo-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6601 10.44L20.6801 14.62C19.8401 18.23 18.1801 19.69 15.0601 19.39C14.5601 19.35 14.0201 19.26 13.4401 19.12L11.7601 18.72C7.59006 17.73 6.30006 15.67 7.28006 11.49L8.26006 7.30001C8.46006 6.45001 8.70006 5.71001 9.00006 5.10001C10.1701 2.68001 12.1601 2.03001 15.5001 2.82001L17.1701 3.21001C21.3601 4.19001 22.6401 6.26001 21.6601 10.44Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.15998 22.27 5.06997 21.2 3.77997 17.23L2.49997 13.28C1.21997 9.31001 2.27997 7.21001 6.24997 5.93001L7.82997 5.41001C8.23997 5.28001 8.62997 5.17001 8.99997 5.10001C8.69997 5.71001 8.45997 6.45001 8.25997 7.30001L7.27997 11.49C6.29997 15.67 7.58998 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.64 8.53L17.49 9.76" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.66 12.4L14.56 13.14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-[10px] font-light">دوره ها</span>
      </NuxtLink>
      <NuxtLink to="/cart" class="flex flex-col md:flex-row items-center gap-1 md:gap-2" exact-active-class="text-indigo-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.81 2L5.19 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.19 2L18.81 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 7.85001C2 6.00001 2.99 5.85001 4.22 5.85001H19.78C21.01 5.85001 22 6.00001 22 7.85001C22 10 21.01 9.85001 19.78 9.85001H4.22C2.99 9.85001 2 10 2 7.85001Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M9.76001 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M14.36 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="text-[10px] font-light">سبد خرید</span>
      </NuxtLink>
      <NuxtLink :to="authStore.isLoggedIn ? '/profile' : '/auth'" class="flex flex-col md:flex-row items-center gap-1 md:gap-2" exact-active-class="text-indigo-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-[10px] font-light">حساب کاربری</span>
      </NuxtLink>
    </div>
  </div>
  <div class="pb-10 lg:pb-0 container mx-auto flex flex-col gap-5 md:gap-12">
    <div class="flex items-center gap-4 flex-wrap lg:flex-nowrap">
      <div class="md:hidden h-px flex-1 bg-white/30"></div>
      <NuxtLink to="/" class="flex items-center flex-row-reverse md:flex-row gap-2">
        <img src="~/assets/images/logo.png" alt="logo" class="max-w-8 md:max-w-10 lg:max-w-16">
        <div class="flex flex-col md:-space-y-1">
          <span class="text-base md:text-xl lg:text-3xl font-bold">یولرنیــت</span>
          <span class="text-sm md:text-base lg:text-2xl uppercase font-light">ULearnit</span>
        </div>
      </NuxtLink>
      <div class="h-px flex-1 bg-white/30"></div>
      <ul class="flex-1 shrink-0 lg:flex-grow-0 lg:shrink flex items-center justify-center gap-4">
        <li>
          <a href="" class="p-4 rounded-lg bg-[#046BEC]/10 hover:bg-[#046BEC]/50 hover:text-white text-[#046BEC] grid place-items-center transition-colors duration-200">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M9.4377 27.1884C20.7557 27.1884 26.9479 17.8093 26.9479 9.67824C26.9479 9.41457 26.942 9.14504 26.9303 8.88137C28.1348 8.01024 29.1744 6.93123 30 5.69504C28.8782 6.19417 27.6871 6.52014 26.4674 6.66184C27.7516 5.89205 28.7132 4.68276 29.1738 3.25812C27.9657 3.97411 26.6445 4.47918 25.2668 4.75168C24.3385 3.76537 23.1112 3.11231 21.7746 2.89348C20.438 2.67465 19.0665 2.90223 17.8722 3.54104C16.6779 4.17984 15.7273 5.1943 15.1673 6.42756C14.6074 7.66081 14.4693 9.04418 14.7744 10.3638C12.3281 10.241 9.93492 9.60555 7.74998 8.49854C5.56503 7.39153 3.63712 5.83771 2.09121 3.93781C1.3055 5.29247 1.06507 6.89547 1.41879 8.42103C1.77251 9.94659 2.69383 11.2802 3.99551 12.1509C3.01829 12.1199 2.06247 11.8568 1.20703 11.3833V11.4595C1.20616 12.8811 1.69762 14.2591 2.59789 15.3594C3.49815 16.4596 4.75165 17.2141 6.14531 17.4946C5.24007 17.7423 4.28998 17.7784 3.36855 17.6001C3.76182 18.8227 4.52697 19.892 5.55721 20.6588C6.58746 21.4256 7.8314 21.8517 9.11543 21.8775C6.93553 23.5898 4.24272 24.5186 1.4707 24.5142C0.979109 24.5134 0.487999 24.4833 0 24.4239C2.81607 26.2306 6.09191 27.1901 9.4377 27.1884Z" fill="currentColor"/>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="" class="p-4 rounded-lg bg-[#046BEC]/10 hover:bg-[#046BEC]/50 hover:text-white text-[#046BEC] grid place-items-center transition-colors duration-200">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M29.7012 9C29.7012 9 29.4082 6.93164 28.5059 6.02344C27.3633 4.82813 26.0859 4.82227 25.5 4.75195C21.3047 4.44727 15.0059 4.44727 15.0059 4.44727H14.9941C14.9941 4.44727 8.69531 4.44727 4.5 4.75195C3.91406 4.82227 2.63672 4.82813 1.49414 6.02344C0.591797 6.93164 0.304688 9 0.304688 9C0.304688 9 0 11.4316 0 13.8574V16.1309C0 18.5566 0.298828 20.9883 0.298828 20.9883C0.298828 20.9883 0.591797 23.0566 1.48828 23.9648C2.63086 25.1602 4.13086 25.1191 4.79883 25.248C7.20117 25.4766 15 25.5469 15 25.5469C15 25.5469 21.3047 25.5352 25.5 25.2363C26.0859 25.166 27.3633 25.1602 28.5059 23.9648C29.4082 23.0566 29.7012 20.9883 29.7012 20.9883C29.7012 20.9883 30 18.5625 30 16.1309V13.8574C30 11.4316 29.7012 9 29.7012 9ZM11.9004 18.8906V10.459L20.0039 14.6895L11.9004 18.8906Z" fill="currentColor"/>
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a href="" class="p-4 rounded-lg bg-[#046BEC]/10 hover:bg-[#046BEC]/50 hover:text-white text-[#046BEC] grid place-items-center transition-colors duration-200">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7" clip-path="url(#clip0_2250_1190)">
                <path d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z" fill="currentColor"/>
                <path d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z" fill="currentColor"/>
                <path d="M24.8086 6.99024C24.8086 7.98633 24 8.78907 23.0098 8.78907C22.0137 8.78907 21.2109 7.98047 21.2109 6.99024C21.2109 5.99414 22.0195 5.19141 23.0098 5.19141C24 5.19141 24.8086 6 24.8086 6.99024Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_2250_1190">
                  <rect width="30" height="30" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li>
          <a href="" class="p-4 rounded-lg bg-[#046BEC]/10 hover:bg-[#046BEC]/50 hover:text-white text-[#046BEC] grid place-items-center transition-colors duration-200">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7" clip-path="url(#clip0_2250_1195)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM15.5374 11.073C14.0785 11.6798 11.1626 12.9358 6.78977 14.841C6.0797 15.1233 5.70773 15.3996 5.67387 15.6697C5.61664 16.1262 6.1883 16.3059 6.96675 16.5507C7.07264 16.584 7.18235 16.6185 7.29483 16.6551C8.0607 16.904 9.09094 17.1953 9.62652 17.2068C10.1123 17.2173 10.6546 17.017 11.2532 16.606C15.3389 13.848 17.4479 12.4541 17.5803 12.424C17.6737 12.4028 17.8032 12.3761 17.8909 12.4541C17.9786 12.5321 17.9699 12.6797 17.9607 12.7193C17.904 12.9607 15.6601 15.0469 14.4988 16.1265C14.1368 16.4631 13.88 16.7018 13.8275 16.7563C13.7099 16.8785 13.5901 16.994 13.4749 17.1051C12.7634 17.791 12.2298 18.3053 13.5044 19.1453C14.1169 19.5489 14.6071 19.8827 15.0961 20.2157C15.6301 20.5794 16.1628 20.9421 16.8519 21.3939C17.0275 21.509 17.1952 21.6285 17.3585 21.745C17.98 22.188 18.5383 22.5861 19.2281 22.5226C19.629 22.4857 20.043 22.1088 20.2533 20.9847C20.7502 18.3282 21.7269 12.5724 21.9527 10.2005C21.9725 9.99271 21.9476 9.72676 21.9276 9.61002C21.9076 9.49327 21.8659 9.32693 21.7141 9.2038C21.5344 9.05797 21.257 9.02722 21.1329 9.0294C20.5687 9.03934 19.7031 9.34032 15.5374 11.073Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_2250_1195">
                  <rect width="30" height="30" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-14 md:gap-20">
      <div class="flex-1 flex flex-col items-center lg:items-start gap-5">
        <h4 class="text-xl md:text-3xl font-bold">درباره یولرنیت</h4>
        <p class="w-5/6 lg:w-full text-xs md:text-xl text-justify lg:text-right font-light opacity-70">
          یولرنیت یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد. تبدیل کردن برنامه نویسان ایرانی به بهترین برنامه نویسان جهان هدف ماست.
        </p>
        <button class="text-[#046BEC] gap-3 text-sm md:text-xl flex items-center">
          <span>مطالعه بیشتر</span>
          <svg class="w-1.5 md:w-2" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0975 16.84L1.5775 10.32C0.8075 9.55 0.8075 8.29 1.5775 7.52L8.0975 1" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="flex lg:w-1/5 flex-col items-center lg:items-start gap-5">
        <span class="text-xl md:text-3xl font-bold">
          صفحات سایت
        </span>
        <ul class="text-sm md:text-lg lg:list-disc lg:pr-6 flex flex-col items-center lg:items-start gap-4">
          <li>
            <NuxtLink>صفحه اصلی</NuxtLink>
          </li>
          <li>
            <NuxtLink>دوره ها</NuxtLink>
          </li>
          <li>
            <NuxtLink>مقالات</NuxtLink>
          </li>
          <li>
            <NuxtLink>پرسش و پاسخ ها</NuxtLink>
          </li>
          <li>
            <NuxtLink>درباره ما</NuxtLink>
          </li>
          <li>
            <NuxtLink>تماس با ما</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="w-full flex-1 flex flex-col items-center lg:items-start gap-5">
        <span class="text-xl md:text-3xl font-bold">
          ارتباط با ما
        </span>
        <div class="flex flex-col w-full gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M12.75 15.375H5.25C3 15.375 1.5 14.25 1.5 11.625V6.375C1.5 3.75 3 2.625 5.25 2.625H12.75C15 2.625 16.5 3.75 16.5 6.375V11.625C16.5 14.25 15 15.375 12.75 15.375Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.75 6.75L10.4025 8.625C9.63 9.24 8.3625 9.24 7.59 8.625L5.25 6.75" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="lg:text-xl">ایمیل</span>
            </div>
            <span class="lg:text-xl opacity-70">info@ulearnit.ir</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1.23741 6.42172C6.06923 4.31657 9.29121 2.92873 10.9033 2.25819C15.5063 0.343671 16.4627 0.0110988 17.0861 0.00011709C17.2232 -0.00229822 17.5298 0.0316819 17.7284 0.192819C17.8961 0.328879 17.9422 0.512678 17.9643 0.641678C17.9864 0.770679 18.0139 1.06455 17.992 1.29416C17.7426 3.91499 16.6633 10.2751 16.1142 13.2104C15.8818 14.4525 15.4244 14.869 14.9815 14.9097C14.0189 14.9983 13.288 14.2736 12.3558 13.6625C10.897 12.7063 10.0729 12.111 8.65691 11.1779C7.02048 10.0995 8.08131 9.5068 9.0139 8.53817C9.25797 8.28468 13.4988 4.42728 13.5809 4.07735C13.5912 4.03359 13.6007 3.87046 13.5038 3.78432C13.4069 3.69818 13.2639 3.72763 13.1606 3.75106C13.0143 3.78427 10.6839 5.32459 6.16938 8.37202C5.5079 8.82624 4.90875 9.04755 4.37193 9.03595C3.78013 9.02317 2.64175 8.70134 1.79548 8.42625C0.757494 8.08885 -0.0674757 7.91046 0.00436067 7.33744C0.0417775 7.03897 0.452793 6.73373 1.23741 6.42172Z" fill="white"/>
              </svg>
              <span class="lg:text-xl">آیدی تلگرام</span>
            </div>
            <span class="lg:text-xl opacity-70" dir="ltr">@ulearnit_support</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M16.4775 13.7475C16.4775 14.0175 16.4175 14.295 16.29 14.565C16.1625 14.835 15.9975 15.09 15.78 15.33C15.4125 15.735 15.0075 16.0275 14.55 16.215C14.1 16.4025 13.6125 16.5 13.0875 16.5C12.3225 16.5 11.505 16.32 10.6425 15.9525C9.78 15.585 8.9175 15.09 8.0625 14.4675C7.2 13.8375 6.3825 13.14 5.6025 12.3675C4.83 11.5875 4.1325 10.77 3.51 9.915C2.895 9.06 2.4 8.205 2.04 7.3575C1.68 6.5025 1.5 5.685 1.5 4.905C1.5 4.395 1.59 3.9075 1.77 3.4575C1.95 3 2.235 2.58 2.6325 2.205C3.1125 1.7325 3.6375 1.5 4.1925 1.5C4.4025 1.5 4.6125 1.545 4.8 1.635C4.995 1.725 5.1675 1.86 5.3025 2.055L7.0425 4.5075C7.1775 4.695 7.275 4.8675 7.3425 5.0325C7.41 5.19 7.4475 5.3475 7.4475 5.49C7.4475 5.67 7.395 5.85 7.29 6.0225C7.1925 6.195 7.05 6.375 6.87 6.555L6.3 7.1475C6.2175 7.23 6.18 7.3275 6.18 7.4475C6.18 7.5075 6.1875 7.56 6.2025 7.62C6.225 7.68 6.2475 7.725 6.2625 7.77C6.3975 8.0175 6.63 8.34 6.96 8.73C7.2975 9.12 7.6575 9.5175 8.0475 9.915C8.4525 10.3125 8.8425 10.68 9.24 11.0175C9.63 11.3475 9.9525 11.5725 10.2075 11.7075C10.245 11.7225 10.29 11.745 10.3425 11.7675C10.4025 11.79 10.4625 11.7975 10.53 11.7975C10.6575 11.7975 10.755 11.7525 10.8375 11.67L11.4075 11.1075C11.595 10.92 11.775 10.7775 11.9475 10.6875C12.12 10.5825 12.2925 10.53 12.48 10.53C12.6225 10.53 12.7725 10.56 12.9375 10.6275C13.1025 10.695 13.275 10.7925 13.4625 10.92L15.945 12.6825C16.14 12.8175 16.275 12.975 16.3575 13.1625C16.4325 13.35 16.4775 13.5375 16.4775 13.7475Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M13.875 6.75C13.875 6.3 13.5225 5.61 12.9975 5.0475C12.5175 4.53 11.88 4.125 11.25 4.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 6.75C16.5 3.8475 14.1525 1.5 11.25 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="lg:text-xl">تلفن تماس</span>
          </div>
            <span class="lg:text-xl opacity-70">09154222478</span>
          </div>
        </div>
        <div class="flex self-end gap-4">
          <img src="~/assets/images/digital.png" alt="digital" class="max-w-[70px] md:max-w-[100px]">
          <img src="~/assets/images/enamad.png" alt="enamad" class="max-w-[70px] md:max-w-[100px]">
        </div>
      </div>
    </div>

    <div class="border-t opacity-10 border-dashed w-full "></div>
    <p class="text-xs md:text-base font-light text-center">
      کليه حقوق محصولات و محتوای اين سایت متعلق به یولرنیت می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
    </p>
  </div>
</footer>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
</script>