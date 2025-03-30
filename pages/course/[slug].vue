<template>
<div>
  <div class="hidden absolute inset-x-0 h-full lg:h-auto top-0 lg:grid place-items-center pointer-events-none">
    <div class="relative w-full h-full max-h-screen pointer-events-none -z-[1]">
      <img :src="`${ApiUrl}/temp/files/${course.imageName}`" alt="unity banner" class="max-h-screen w-full object-cover opacity-50 pointer-events-none">
      <div class="absolute inset-0 pointer-events-none" style="background-image: linear-gradient(180deg, rgba(9, 13, 22, 0) 70%, rgba(9,13,22,1) 100%);">
      </div>
    </div>
    <div class="absolute bottom-24 z-20 lg:bottom-12 lg:right-[10vw] flex flex-col items-center lg:items-start gap-5 md:gap-8">
      <h2 class="text-3xl md:text-5xl font-black">{{ course.title }}</h2>
      <span class="md:text-lg font-light">{{ course.title }}</span>
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex items-center gap-2">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48924 10.8701C5.74968 10.8701 3.41016 11.2843 3.41016 12.9432C3.41016 14.602 5.73484 15.0311 8.48924 15.0311C11.2288 15.0311 13.5677 14.6162 13.5677 12.958C13.5677 11.2998 11.2436 10.8701 8.48924 10.8701Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48905 8.50376C10.2869 8.50376 11.744 7.04594 11.744 5.24812C11.744 3.45031 10.2869 1.99316 8.48905 1.99316C6.69123 1.99316 5.23342 3.45031 5.23342 5.24812C5.22735 7.03987 6.67504 8.49769 8.46612 8.50376H8.48905Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ course.teacher.user.fullName }}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0524 8.50033C15.0524 12.1192 12.1192 15.0524 8.50033 15.0524C4.88145 15.0524 1.94824 12.1192 1.94824 8.50033C1.94824 4.88145 4.88145 1.94824 8.50033 1.94824C12.1192 1.94824 15.0524 4.88145 15.0524 8.50033Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9312 10.5849L8.26074 8.99189V5.55859" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ course.time }}</span>
        </div>
        <a href="#episodes" class="flex items-center gap-2 px-2 py-1 rounded-lg bg-indigo-500">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1317 11.4919H6.01758" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.1317 8.52702H6.01758" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.96904 5.56803H6.01758" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2682 1.94824C11.2682 1.94824 5.83029 1.95108 5.82179 1.95108C3.86679 1.96312 2.65625 3.24945 2.65625 5.21153V11.7254C2.65625 13.6974 3.876 14.9887 5.848 14.9887C5.848 14.9887 11.2852 14.9865 11.2944 14.9865C13.2494 14.9745 14.4606 13.6875 14.4606 11.7254V5.21153C14.4606 3.23953 13.2402 1.94824 11.2682 1.94824Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ getTotalEpisodesCount() }} قسمت</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.9" d="M1 1L5 5L9 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="lg:hidden container mx-auto mt-10 flex flex-col gap-8">
    <img :src="`${ApiUrl}/temp/files/${course.imageName}`" alt="unity banner" class="w-full rounded-lg border border-white/30">
    <div class="flex flex-col items-center gap-5 md:gap-8">
      <h2 class="text-3xl md:text-5xl font-black">{{ course.title }}</h2>
      <span class="md:text-lg font-light">{{ course.title }}</span>
      <div class="flex flex-row items-center gap-6">
        <div class="flex items-center gap-2">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48924 10.8701C5.74968 10.8701 3.41016 11.2843 3.41016 12.9432C3.41016 14.602 5.73484 15.0311 8.48924 15.0311C11.2288 15.0311 13.5677 14.6162 13.5677 12.958C13.5677 11.2998 11.2436 10.8701 8.48924 10.8701Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48905 8.50376C10.2869 8.50376 11.744 7.04594 11.744 5.24812C11.744 3.45031 10.2869 1.99316 8.48905 1.99316C6.69123 1.99316 5.23342 3.45031 5.23342 5.24812C5.22735 7.03987 6.67504 8.49769 8.46612 8.50376H8.48905Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ course.teacher.user.fullName }}</span>
        </div>
        <div class="w-px h-6 bg-white/20"></div>
        <div class="flex items-center gap-2">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0524 8.50033C15.0524 12.1192 12.1192 15.0524 8.50033 15.0524C4.88145 15.0524 1.94824 12.1192 1.94824 8.50033C1.94824 4.88145 4.88145 1.94824 8.50033 1.94824C12.1192 1.94824 15.0524 4.88145 15.0524 8.50033Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9312 10.5849L8.26074 8.99189V5.55859" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ course.time }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mt-20 lg:mt-[100vh]">
    <hr class="hidden md:block opacity-20">
    <div class="container mx-auto mt-6">
      <div class="flex flex-col-reverse lg:flex-row items-start gap-16">
        <div class="flex-1 flex flex-col">
          <div class="flex flex-col w-full gap-4">
            <strong class="text-2xl">ویدئو معرفی دوره</strong>
            <div class="relative">
              <video controls class="rounded-2xl aspect-video object-cover" :poster="`${ApiUrl}/temp/files/${course.imageName}`">
                <source :src="`${ApiUrl}/temp/files/${course.introVideo}`" >
              </video>
              <button class="hidden absolute bottom-16 left-8">
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
            <div class="flex self-end items-center gap-5">
              <button class="flex items-center gap-1 px-3 py-1 bg-indigo-400/10 rounded-md text-indigo-400">
                <span>20</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 7.5H14.073C14.3287 7.50001 14.5801 7.56536 14.8034 7.68984C15.0266 7.81433 15.2144 7.99382 15.3488 8.21127C15.4833 8.42873 15.5599 8.67693 15.5714 8.93232C15.583 9.18771 15.529 9.44181 15.4147 9.6705L12.7897 14.9205C12.6651 15.1698 12.4735 15.3795 12.2364 15.5261C11.9993 15.6726 11.726 15.7501 11.4472 15.75H8.4345C8.31225 15.75 8.19 15.735 8.07075 15.705L5.25 15M10.5 7.5V3.75C10.5 3.35218 10.342 2.97064 10.0607 2.68934C9.77936 2.40804 9.39782 2.25 9 2.25H8.92875C8.55375 2.25 8.25 2.55375 8.25 2.92875C8.25 3.46425 8.09175 3.98775 7.794 4.43325L5.25 8.25V15M10.5 7.5H9M5.25 15H3.75C3.35218 15 2.97064 14.842 2.68934 14.5607C2.40804 14.2794 2.25 13.8978 2.25 13.5V9C2.25 8.60218 2.40804 8.22064 2.68934 7.93934C2.97064 7.65804 3.35218 7.5 3.75 7.5H5.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="flex items-center gap-1 px-3 py-1 bg-red-400/10 rounded-md text-red-400">
                <span>5</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 10.5L3.927 10.5C3.67135 10.5 3.41994 10.4346 3.19665 10.3102C2.97335 10.1857 2.78558 10.0062 2.65116 9.78873C2.51673 9.57127 2.44011 9.32307 2.42858 9.06768C2.41704 8.81229 2.47097 8.55819 2.58525 8.3295L5.21025 3.0795C5.33485 2.83015 5.52647 2.62045 5.7636 2.47393C6.00073 2.32741 6.274 2.24987 6.55275 2.25L9.5655 2.25C9.68775 2.25 9.81 2.265 9.92925 2.295L12.75 3M7.5 10.5V14.25C7.5 14.6478 7.65804 15.0294 7.93934 15.3107C8.22064 15.592 8.60218 15.75 9 15.75H9.07125C9.44625 15.75 9.75 15.4463 9.75 15.0713C9.75 14.5358 9.90825 14.0123 10.206 13.5668L12.75 9.75L12.75 3M7.5 10.5H9M12.75 3H14.25C14.6478 3 15.0294 3.15804 15.3107 3.43934C15.592 3.72064 15.75 4.10218 15.75 4.5L15.75 9C15.75 9.39782 15.592 9.77936 15.3107 10.0607C15.0294 10.342 14.6478 10.5 14.25 10.5H12.375" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="h-4 w-px bg-white/20">
              </div>
              <div class="flex items-center gap-1">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3712 9.04045C11.3712 10.3499 10.3092 11.4112 8.99966 11.4112C7.69016 11.4112 6.62891 10.3499 6.62891 9.04045C6.62891 7.7302 7.69016 6.66895 8.99966 6.66895C10.3092 6.66895 11.3712 7.7302 11.3712 9.04045Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9985 14.5165C11.8545 14.5165 14.4668 12.463 15.9375 9.03998C14.4668 5.61698 11.8545 3.56348 8.9985 3.56348H9.0015C6.1455 3.56348 3.53325 5.61698 2.0625 9.03998C3.53325 12.463 6.1455 14.5165 9.0015 14.5165H8.9985Z" stroke="#F8F8F8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>245</span>
              </div>
            </div>
            <div class="bg-indigo-600/10 border rounded-md lg:rounded-xl p-4 text-xs lg:text-base text-indigo-300 border-indigo-500 flex gap-2">
              <svg class="text-indigo-300/70 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11.25 8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V8ZM12.92 16.38C12.87 16.51 12.8 16.61 12.71 16.71C12.61 16.8 12.5 16.87 12.38 16.92C12.26 16.97 12.13 17 12 17C11.87 17 11.74 16.97 11.62 16.92C11.5 16.87 11.39 16.8 11.29 16.71C11.2 16.61 11.13 16.51 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.87 11.03 15.74 11.08 15.62C11.13 15.5 11.2 15.39 11.29 15.29C11.39 15.2 11.5 15.13 11.62 15.08C11.86 14.98 12.14 14.98 12.38 15.08C12.5 15.13 12.61 15.2 12.71 15.29C12.8 15.39 12.87 15.5 12.92 15.62C12.97 15.74 13 15.87 13 16C13 16.13 12.97 16.26 12.92 16.38Z" fill="currentColor"/>
              </svg>
              <span>
                برای اطلاع از ویژگی ها و محتوای دوره پیشنهاد میکنیم حتما ویدئوی معرفی دوره را مشاهده نمایید.
              </span>
            </div>
            <div class="flex flex-col gap-5">
              <BaseAccordion>
                <div class="flex flex-col gap-3" v-html="course.description"></div>
              </BaseAccordion>
              <hr class="opacity-0">
              <hr class="opacity-0">
              <div class="flex flex-col gap-2">
                <span class="text-sm opacity-70">پیش نیاز های دوره:</span>
                <ul class="list-disc pr-4 text-lg flex flex-col gap-1">
                  <li v-for="(requirement,i) in course.requirements" :key="i">{{requirement}}</li>
                </ul>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-sm opacity-70">برچسب ها:</span>
                <ul class="flex flex-wrap gap-2">
                  <li class="px-4 py-2 bg-slate-900 rounded-md text-xs" v-for="(tag,i) in course.tags" :key="i">{{tag}}</li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-8 opacity-20">
          <ul id="episodes" class="flex flex-col space-y-5">
            <li class="overflow-hidden" v-for="section in course.sections" :key="section.id">
              <div class="season-expander border-transparent flex-wrap lg:flex-nowrap" @click="expandSeason"
                   style="box-shadow: 0 5px 20px rgba(7, 10, 17, 0.63);">
                <strong class="pointer-events-none">
                  {{ section.title }}
                </strong>
                <span class="bg-[#25324D] border border-[#25324D] pointer-events-none rounded-lg text-[10px] p-2">{{ section.episodes.length }} قسمت - {{ section.sectionQuizzes.length }} آزمون</span>
                <div class="mr-auto pointer-events-none">
                  <span>{{ section.time }}</span>
                </div>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow transition-transform duration-200 pointer-events-none">
                  <path opacity="0.9" d="M7 1L1 7L7 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <ul class="details overflow-hidden" >
                <li class="px-4 md:px-10  transition-shadow duration-300 border-b border-b-indigo-500/50 last:border-none" v-for="(episode , i) in section.episodes" :key="episode.id">
                  <div class="py-6 md:py-8 episode-expander">
                    <span class="hidden md:block text-indigo-300 text-sm">قسمت {{ i + 1 }}</span>
                    <strong class="md:max-w-[50%] col-span-3 cursor-pointer" @click="expandEpisode">{{ episode.title }}</strong>
                    <small class="">{{ episode.time }}</small>
                    <NuxtLink v-if="episode.isFree || course.userHasCourse" :to="`/course-panel/${course.slug}`" class="md:mr-auto relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C17.2459 2.5 21.5 6.75315 21.5 12C21.5 17.2469 17.2459 21.5 12 21.5C6.75315 21.5 2.5 17.2469 2.5 12C2.5 6.75315 6.75315 2.5 12 2.5Z" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 11.9951C15 11.184 10.8425 8.58912 10.3709 9.0557C9.8993 9.52228 9.85395 14.424 10.3709 14.9346C10.8879 15.4469 15 12.8063 15 11.9951Z" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-gray-800 text-xs px-2 py-1 rounded-md pointer-events-none">
                        پخش آنلاین
                      </span>
                    </NuxtLink>
                    <button v-else class="md:mr-auto relative group grid place-items-center p-2 transition-colors duration-200 rounded-lg hover:bg-white/5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4237 9.44804V7.30104C16.4237 4.78804 14.3857 2.75004 11.8727 2.75004C9.35973 2.73904 7.31373 4.76704 7.30273 7.28104V7.30104V9.44804" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.8633 14.2031V16.4241" stroke="#F51940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-full z-20 bg-gray-800 text-xs px-2 py-1 rounded-md pointer-events-none">
                        دانشجوی این دوره <br class="md:hidden"> نیستید
                      </span>
                    </button>
                  </div>
                  <div class="episode-details">
                    <p class="w-full text-sm font-light border rounded-lg p-4 border-[#FDFDFD]/20">
                      {{episode.description}}
                    </p>
                    <div class="hidden gap-4 mt-4">
                      <button v-if="episode.hasAttachment" class="px-4 py-2 transition-shadow hover:drop-shadow-xl duration-200 rounded-lg bg-[#25324D] flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.333 15.1663H4.66634C1.72634 15.1663 0.833008 14.273 0.833008 11.333V4.66634C0.833008 1.72634 1.72634 0.833008 4.66634 0.833008H5.66634C6.83301 0.833008 7.19967 1.21301 7.66634 1.83301L8.66634 3.16634C8.88634 3.45967 8.91967 3.49967 9.33301 3.49967H11.333C14.273 3.49967 15.1663 4.39301 15.1663 7.33301V11.333C15.1663 14.273 14.273 15.1663 11.333 15.1663ZM4.66634 1.83301C2.27967 1.83301 1.83301 2.28634 1.83301 4.66634V11.333C1.83301 13.713 2.27967 14.1663 4.66634 14.1663H11.333C13.7197 14.1663 14.1663 13.713 14.1663 11.333V7.33301C14.1663 4.95301 13.7197 4.49967 11.333 4.49967H9.33301C8.47967 4.49967 8.19967 4.20634 7.86634 3.76634L6.86634 2.43301C6.51967 1.97301 6.41301 1.83301 5.66634 1.83301H4.66634Z" fill="white"/>
                          <path d="M13.333 4.75301C13.0597 4.75301 12.833 4.52634 12.833 4.25301V3.33301C12.833 2.27967 12.3863 1.83301 11.333 1.83301H5.33301C5.05967 1.83301 4.83301 1.60634 4.83301 1.33301C4.83301 1.05967 5.05967 0.833008 5.33301 0.833008H11.333C12.9463 0.833008 13.833 1.71967 13.833 3.33301V4.25301C13.833 4.52634 13.6063 4.75301 13.333 4.75301Z" fill="white"/>
                        </svg>
                        <span class="text-xs md:text-base">دانلود فایل ضمیمه</span>
                      </button>
                      <button class="px-4 py-2 transition-shadow hover:drop-shadow-xl duration-200 rounded-lg bg-indigo-500 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.99967 15.1663H5.99967C2.37967 15.1663 0.833008 13.6197 0.833008 9.99967V5.99967C0.833008 2.37967 2.37967 0.833008 5.99967 0.833008H9.99967C13.6197 0.833008 15.1663 2.37967 15.1663 5.99967V9.99967C15.1663 13.6197 13.6197 15.1663 9.99967 15.1663ZM5.99967 1.83301C2.92634 1.83301 1.83301 2.92634 1.83301 5.99967V9.99967C1.83301 13.073 2.92634 14.1663 5.99967 14.1663H9.99967C13.073 14.1663 14.1663 13.073 14.1663 9.99967V5.99967C14.1663 2.92634 13.073 1.83301 9.99967 1.83301H5.99967Z" fill="white"/>
                          <path d="M8.00029 10.1731C7.87362 10.1731 7.74695 10.1265 7.64695 10.0265L5.64695 8.02647C5.45362 7.83314 5.45362 7.51314 5.64695 7.3198C5.84029 7.12647 6.16028 7.12647 6.35362 7.3198L8.00029 8.96647L9.64695 7.3198C9.84029 7.12647 10.1603 7.12647 10.3536 7.3198C10.547 7.51314 10.547 7.83314 10.3536 8.02647L8.35362 10.0265C8.25362 10.1265 8.12695 10.1731 8.00029 10.1731Z" fill="white"/>
                          <path d="M8 10.1732C7.72667 10.1732 7.5 9.94651 7.5 9.67318V4.33984C7.5 4.06651 7.72667 3.83984 8 3.83984C8.27333 3.83984 8.5 4.06651 8.5 4.33984V9.67318C8.5 9.95318 8.27333 10.1732 8 10.1732Z" fill="white"/>
                          <path d="M7.99996 12.1531C6.5933 12.1531 5.17996 11.9264 3.83996 11.4798C3.57996 11.3931 3.43996 11.1065 3.52663 10.8465C3.6133 10.5865 3.89329 10.4398 4.15996 10.5331C6.63996 11.3598 9.36663 11.3598 11.8466 10.5331C12.1066 10.4464 12.3933 10.5865 12.48 10.8465C12.5666 11.1065 12.4266 11.3931 12.1666 11.4798C10.82 11.9331 9.40663 12.1531 7.99996 12.1531Z" fill="white"/>
                        </svg>
                        <span class="text-xs md:text-base">دانلود ویدئو</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="py-8 px-4 md:px-10 text-black border-b border-black/10 bg-[#D0D7EA] last:border-none last:rounded-b-xl" v-for="(quiz,i) in section.sectionQuizzes" :key="quiz.id">
                  <div class="flex items-center justify-between w-full gap-4">
                    <div class="hidden md:flex flex-col md:flex-row items-center gap-4 col-span-2">
                      <span>
                        کوییز {{i + 1}}
                      </span>
                      <span class="bg-[#91ACFF] text-white border border-[#91ACFF] rounded-lg text-[10px] p-2 py-1">{{ quiz.totalQuestions }} سؤال</span>
                      <div class="hidden bg-[#F51940]/20 border border-[#F51940] rounded-md md:flex items-center gap-1 text-[#F51940] p-2 py-1">
                        <small class="text-[10px]">آسان</small>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1">
                      <strong class="md:mx-auto md:col-span-3">
                        {{ quiz.title }}
                      </strong>
                      <div class="flex md:hidden items-center gap-2">
                        <span class="bg-[#91ACFF] text-white border border-[#91ACFF] rounded-lg text-[10px] p-2 py-1">{{ quiz.totalQuestions }} سؤال</span>
                        <div class="bg-[#F51940]/20 border border-[#F51940] rounded-md flex items-center gap-1 text-[#F51940] p-2 py-1">
                          <small class="text-[10px]">آسان</small>
                        </div>
                      </div>
                    </div>
                    <button class="bg-[#402EBD] text-white px-8 hover:shadow-xl hover:shadow-[#402EBD]/20 transition-shadow duration-200 py-2 rounded-xl">
                      شروع
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <hr class="my-6 opacity-20">
          <div class="relative flex flex-col w-full items-center -z-10 h-0 overflow-visible">
            <div class="absolute w-40 h-40 bg-indigo-900 blur-2xl opacity-50 scale-[300%] -z-10"></div>
          </div>
          <div class="lg:hidden flex items-center w-full border rounded-xl p-4 border-white/20 gap-4">
            <div class="flex items-center mr-6">
              <img src="~/assets/images/avatar.png" alt="avatar" class="rounded-full max-w-10 border-2 -mr-6" v-for="i in 4" style="box-shadow: 3px 0 5px 0 rgba(0,0,0,0.3)">
              <div class="w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/40 rounded-full grid place-items-center -mr-6" style="box-shadow: 3px 0 5px 0 rgba(0,0,0,0.3)">
                +
              </div>
            </div>
            <div class="flex flex-1 items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="font-semibold text-xs">نظرات</span>
                <span class="text-[10px] font-light">( 23 نظر )</span>
              </div>
              <button class="text-xs text-indigo-300 px-2 py-1 bg-indigo-500/10 rounded-md" @click="showComments = true">
                مشاهده نظرات
              </button>
            </div>
          </div>
          <div class="hidden lg:flex w-full flex-col">
            <div class="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-5">
              <div class="flex flex-col items-center md:items-start space-y-4">
                <strong class="text-3xl">نظرات</strong>
                <div class="flex items-center gap-4">
                  <span class="opacity-70 font-thin">44 نظر</span>
                  <div class="h-6 w-px bg-white/20"></div>
                  <div class="flex items-center gap-2  font-thin">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="19" height="19" fill="url(#pattern0_1754_519)"/>
                      <defs>
                        <pattern id="pattern0_1754_519" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_1754_519" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_1754_519" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                      </defs>
                    </svg>
                    <span class="opacity-70">
                4.5  (میانگین امتیاز کاربران)
              </span>
                  </div>
                </div>
              </div>
              <button class="hidden w-full md:w-max border rounded-lg border-white/20 px-8 py-2 text-white/70">
                + ثبت نظر
              </button>
            </div>
            <form @submit.prevent="sendComment" class="flex flex-col gap-2 my-4">
              <FormUInput multiline label="نظر شما" place-holder="نظر خود را وارد کنید" v-model="comment" required name="comment" />
              <UButton :is-loading="commentLoading" type="submit" class="mr-auto">ثبت دیدگاه</UButton>
            </form>
            <ul class="md:p-10 md:border rounded-3xl mt-6 border-white/10 flex flex-col space-y-8">
              <li class="flex flex-col md:flex-row items-start md:py-4 md:px-8 p-4 border border-white/10 bg-[#111723] rounded-lg md:rounded-3xl gap-2 md:gap-5" v-for="c in comments" :key="c.id">
                <img src="~/assets/images/avatar.png" alt="avatar" class="w-16 rounded-full">
                <div class="flex-1 flex flex-col items-start space-y-4 py-4">
                  <div class="flex w-full items-center justify-between">
                    <strong>{{ c.sender.fullName }}</strong>
                    <span class="opacity-70 text-sm font-thin ">{{ new Date(c.creationDate).toLocaleDateString('fa-Ir') }}</span>
                  </div>
                  <p class="font-light text-sm">{{c.text}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Transition name="fade">
          <div v-if="showComments" class="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center p-8 z-30 overflow-auto">
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center gap-2">
                <h4 class="font-semibold text-xl">نظرات</h4>
                <span class="text-[10px] font-light">( 23 نظر )</span>
              </div>
              <button @click="showComments = false">
                <svg class="w-4" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.757355 9.24265L9.24264 0.757364" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.24264 9.24264L0.757355 0.757355" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div class="flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-5 mt-5">
              <button class="w-full md:w-max border rounded-lg border-white/20 px-8 py-2 text-white/70">
                + ثبت نظر
              </button>
            </div>
            <ul class="md:p-10 md:border rounded-3xl mt-6 border-white/10 flex flex-col gap-4 md:gap-8">
              <li class="flex flex-wrap items-start md:py-4 md:px-8 p-4 border border-white/10 bg-[#111723] rounded-lg md:rounded-3xl gap-2 md:gap-5" v-for="i in 5" :key="i">
                <img src="~/assets/images/avatar.png" alt="avatar" class="w-10 md:w-16 rounded-full mt-2">
                <div class="flex-1 flex flex-col items-start gap-2 md:gap-4 py-2 md:py-4">
                  <div class="flex flex-col md:flex-row w-full md:items-center justify-between">
                    <strong>نام و نام خانوادگی</strong>
                    <span class="opacity-70 text-sm font-thin ">1403/12/08</span>
                  </div>
                  <p class="hidden md:block font-light text-sm">یولرنیت هدف خود را به صورت تخصصی روی حوزه بازی سازی متمرکز کرده است و تمامی آموزش های موجود در سایت حول این محور تهیه و تولید شده اند.</p>
                </div>
                <p class="w-full md:hidden font-light text-sm">یولرنیت هدف خود را به صورت تخصصی روی حوزه بازی سازی متمرکز کرده است و تمامی آموزش های موجود در سایت حول این محور تهیه و تولید شده اند.</p>
              </li>
            </ul>
            <form class="flex flex-col w-full gap-4 mt-5">
              <textarea name="" id="" class="w-full rounded-md border border-white/30 bg-black/10 py-2 px-3"></textarea>
              <button class="bg-indigo-400/20 text-indigo-400 text-xs w-max self-end px-4 py-2 rounded-lg">
                ارسال نظر
              </button>
            </form>
          </div>
        </Transition>
        <aside class="hidden lg:w-1/4 lg:flex flex-col space-y-6">
          <div class="p-4 px-6 bg-[#111723] border border-opacity-10 border-[#FDFDFD] rounded-xl flex flex-col relative">
            <div class="absolute top-2 left-4">
              <button class="relative self-end group grid place-items-center pt-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4993 5.66667C11.4993 4.47005 12.4694 3.5 13.666 3.5C14.8626 3.5 15.8327 4.47005 15.8327 5.66667C15.8327 6.86328 14.8626 7.83333 13.666 7.83333C13.0263 7.83333 12.4513 7.55606 12.0547 7.11513L10.2431 8.10324L8.21611 9.26154C8.39636 9.5776 8.49935 9.94344 8.49935 10.3333C8.49935 10.5309 8.47291 10.7223 8.42337 10.9042L12.0547 12.8849C12.4513 12.4439 13.0263 12.1667 13.666 12.1667C14.8626 12.1667 15.8327 13.1367 15.8327 14.3333C15.8327 15.53 14.8626 16.5 13.666 16.5C12.4694 16.5 11.4993 15.53 11.4993 14.3333C11.4993 14.1358 11.5258 13.9444 11.5753 13.7625L7.94404 11.7818C7.54743 12.2227 6.97244 12.5 6.33268 12.5C5.13607 12.5 4.16602 11.53 4.16602 10.3333C4.16602 9.13672 5.13607 8.16667 6.33268 8.16667C6.76647 8.16667 7.17048 8.29414 7.5093 8.51368L9.75558 7.23009L11.5753 6.2375C11.5258 6.05563 11.4993 5.86424 11.4993 5.66667ZM13.666 4.5C13.0217 4.5 12.4993 5.02233 12.4993 5.66667C12.4993 6.311 13.0217 6.83333 13.666 6.83333C14.3103 6.83333 14.8327 6.311 14.8327 5.66667C14.8327 5.02233 14.3103 4.5 13.666 4.5ZM6.33268 9.16667C5.68835 9.16667 5.16602 9.689 5.16602 10.3333C5.16602 10.9777 5.68835 11.5 6.33268 11.5C6.97701 11.5 7.49935 10.9777 7.49935 10.3333C7.49935 9.689 6.97701 9.16667 6.33268 9.16667ZM12.4993 14.3333C12.4993 13.689 13.0217 13.1667 13.666 13.1667C14.3103 13.1667 14.8327 13.689 14.8327 14.3333C14.8327 14.9777 14.3103 15.5 13.666 15.5C13.0217 15.5 12.4993 14.9777 12.4993 14.3333Z" fill="white"/>
                  </g>
                </svg>
                <span class="absolute w-max transition-all duration-200 opacity-0 scale-0 translate-y-full group-hover:scale-90 group-hover:translate-y-0 group-hover:opacity-100 -top-2/3 z-20 bg-gray-800 text-xs px-2 py-1 rounded-md pointer-events-none">
              اشتراک گذاری
            </span>
              </button>
            </div>
            <div class="flex flex-col space-y-4">
              <span class="font-lalezar text-2xl">{{ course.title }}</span>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path d="M9.00016 3.95489C8.98516 3.95489 8.97516 3.95489 8.96016 3.95489H8.93516C7.99016 3.92489 7.28516 3.19488 7.28516 2.29488C7.28516 1.37488 8.03516 0.629883 8.95016 0.629883C9.86516 0.629883 10.6152 1.37988 10.6152 2.29488C10.6102 3.19988 9.90516 3.92988 9.00516 3.95988C9.00516 3.95488 9.00516 3.95489 9.00016 3.95489ZM8.95016 1.37489C8.44516 1.37489 8.03516 1.78489 8.03516 2.28989C8.03516 2.78489 8.42016 3.18489 8.91516 3.20489C8.92016 3.19989 8.96016 3.19989 9.00516 3.20489C9.49016 3.17989 9.86516 2.77989 9.87016 2.28989C9.87016 1.78489 9.46016 1.37489 8.95016 1.37489Z" fill="white"/>
                      <path d="M9.00427 7.64032C8.80927 7.64032 8.61427 7.62532 8.41927 7.59032C8.21427 7.55532 8.07927 7.36032 8.11427 7.15532C8.14927 6.95032 8.34427 6.81532 8.54927 6.85032C9.16427 6.95532 9.81427 6.84032 10.2493 6.55032C10.4843 6.39532 10.6093 6.20032 10.6093 6.00532C10.6093 5.81032 10.4793 5.62032 10.2493 5.46532C9.81427 5.17532 9.15427 5.06032 8.53427 5.17032C8.32927 5.21032 8.13427 5.07032 8.09927 4.86532C8.06427 4.66032 8.19927 4.46532 8.40427 4.43032C9.21927 4.28532 10.0643 4.44032 10.6643 4.84032C11.1043 5.13532 11.3593 5.55532 11.3593 6.00532C11.3593 6.45032 11.1093 6.87532 10.6643 7.17532C10.2093 7.47532 9.61927 7.64032 9.00427 7.64032Z" fill="white"/>
                      <path d="M2.98524 3.955C2.98024 3.955 2.97523 3.955 2.97523 3.955C2.07524 3.925 1.37023 3.195 1.36523 2.295C1.36523 1.375 2.11524 0.625 3.03024 0.625C3.94524 0.625 4.69523 1.375 4.69523 2.29C4.69523 3.195 3.99023 3.925 3.09023 3.955L2.98524 3.58L3.02024 3.955C3.01024 3.955 2.99524 3.955 2.98524 3.955ZM3.03523 3.205C3.06523 3.205 3.09024 3.205 3.12024 3.21C3.56524 3.19 3.95523 2.79 3.95523 2.295C3.95523 1.79 3.54524 1.38 3.04024 1.38C2.53524 1.38 2.12523 1.79 2.12523 2.295C2.12523 2.785 2.50523 3.18 2.99023 3.21C2.99523 3.205 3.01523 3.205 3.03523 3.205Z" fill="white"/>
                      <path d="M2.98 7.64032C2.365 7.64032 1.775 7.47532 1.32 7.17532C0.88 6.88032 0.625 6.45532 0.625 6.00532C0.625 5.56032 0.88 5.13532 1.32 4.84032C1.92 4.44032 2.765 4.28532 3.58 4.43032C3.785 4.46532 3.92 4.66032 3.885 4.86532C3.85 5.07032 3.655 5.21032 3.45 5.17032C2.83 5.06032 2.175 5.17532 1.735 5.46532C1.5 5.62032 1.375 5.81032 1.375 6.00532C1.375 6.20032 1.505 6.39532 1.735 6.55032C2.17 6.84032 2.82 6.95532 3.435 6.85032C3.64 6.81532 3.835 6.95532 3.87 7.15532C3.905 7.36032 3.77 7.55532 3.565 7.59032C3.37 7.62532 3.175 7.64032 2.98 7.64032Z" fill="white"/>
                      <path d="M6.00016 7.69024C5.98516 7.69024 5.97516 7.69024 5.96016 7.69024H5.93516C4.99016 7.66024 4.28516 6.93024 4.28516 6.03024C4.28516 5.11024 5.03516 4.36523 5.95016 4.36523C6.86516 4.36523 7.61516 5.11524 7.61516 6.03024C7.61016 6.93524 6.90516 7.66524 6.00516 7.69524C6.00516 7.69024 6.00516 7.69024 6.00016 7.69024ZM5.95016 5.11024C5.44516 5.11024 5.03516 5.52024 5.03516 6.02524C5.03516 6.52024 5.42016 6.92024 5.91516 6.94024C5.92016 6.93524 5.96016 6.93524 6.00516 6.94024C6.49016 6.91524 6.86516 6.51524 6.87016 6.02524C6.87016 5.52524 6.46016 5.11024 5.95016 5.11024Z" fill="white"/>
                      <path d="M6.00063 11.3804C5.40063 11.3804 4.80062 11.2254 4.33562 10.9104C3.89562 10.6154 3.64062 10.1954 3.64062 9.74536C3.64062 9.30036 3.89062 8.87035 4.33562 8.57535C5.27062 7.95535 6.73563 7.95535 7.66563 8.57535C8.10563 8.87035 8.36063 9.29035 8.36063 9.74035C8.36063 10.1854 8.11063 10.6154 7.66563 10.9104C7.20063 11.2204 6.60063 11.3804 6.00063 11.3804ZM4.75063 9.20536C4.51563 9.36036 4.39062 9.55535 4.39062 9.75035C4.39062 9.94535 4.52063 10.1354 4.75063 10.2904C5.42563 10.7454 6.57063 10.7454 7.24563 10.2904C7.48063 10.1354 7.60563 9.94036 7.60563 9.74536C7.60563 9.55036 7.47563 9.36036 7.24563 9.20536C6.57563 8.75036 5.43063 8.75536 4.75063 9.20536Z" fill="white"/>
                    </g>
                  </svg>
                  <span>تعداد دانشجو</span>
                </div>
                <span>{{ course.studentsCount }} نفر</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z" fill="white"/>
                      <path d="M7.85531 7.96488C7.79031 7.96488 7.72531 7.94988 7.66531 7.90988L6.11531 6.98488C5.73031 6.75488 5.44531 6.24988 5.44531 5.80488V3.75488C5.44531 3.54988 5.61531 3.37988 5.82031 3.37988C6.02531 3.37988 6.19531 3.54988 6.19531 3.75488V5.80488C6.19531 5.98488 6.34531 6.24988 6.50031 6.33988L8.05031 7.26488C8.23031 7.36988 8.28531 7.59988 8.18031 7.77988C8.10531 7.89988 7.98031 7.96488 7.85531 7.96488Z" fill="white"/>
                    </g>
                  </svg>

                  <span>مدت زمان</span>
                </div>
                <span>{{ course.time }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path d="M9.5 4C10.3284 4 11 3.32843 11 2.5C11 1.67157 10.3284 1 9.5 1C8.67157 1 8 1.67157 8 2.5C8 3.32843 8.67157 4 9.5 4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.5 6.5H6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.5 8.5H8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 1H4.5C2 1 1 2 1 4.5V7.5C1 10 2 11 4.5 11H7.5C10 11 11 10 11 7.5V5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <span>وضعیت دوره</span>
                </div>
                <span class="text-xs px-3 py-1 rounded-md bg-indigo-500/30">{{ ECourseStatus[course.courseStatus].replaceAll('_',' ') }}</span>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4995 3.3369C10.4995 4.3512 9.67692 5.1738 8.66262 5.1738C7.64832 5.1738 6.82617 4.3512 6.82617 3.3369C6.82617 2.3226 7.64832 1.5 8.66262 1.5C9.67692 1.5 10.4995 2.3226 10.4995 3.3369Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17335 3.3369C5.17335 4.3512 4.3512 5.1738 3.33645 5.1738C2.3226 5.1738 1.5 4.3512 1.5 3.3369C1.5 2.3226 2.3226 1.5 3.33645 1.5C4.3512 1.5 5.17335 2.3226 5.17335 3.3369Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4995 8.63085C10.4995 9.64515 9.67692 10.4673 8.66262 10.4673C7.64832 10.4673 6.82617 9.64515 6.82617 8.63085C6.82617 7.61655 7.64832 6.79395 8.66262 6.79395C9.67692 6.79395 10.4995 7.61655 10.4995 8.63085Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17335 8.63085C5.17335 9.64515 4.3512 10.4673 3.33645 10.4673C2.3226 10.4673 1.5 9.64515 1.5 8.63085C1.5 7.61655 2.3226 6.79395 3.33645 6.79395C4.3512 6.79395 5.17335 7.61655 5.17335 8.63085Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <span>تعداد جلسات</span>
                </div>
                <span>{{ getTotalEpisodesCount() }} جلسه</span>
              </div>
              <hr class="border-opacity-10 border-[#FDFDFD]">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path d="M6.70008 8.71004H5.44508C4.62508 8.71004 3.96008 8.02004 3.96008 7.17004C3.96008 6.96504 4.13008 6.79504 4.33508 6.79504C4.54008 6.79504 4.71008 6.96504 4.71008 7.17004C4.71008 7.60504 5.04008 7.96004 5.44508 7.96004H6.70008C7.02508 7.96004 7.29508 7.67004 7.29508 7.32004C7.29508 6.88504 7.14008 6.80004 6.88508 6.71004L4.87008 6.00004C4.48008 5.86504 3.95508 5.57504 3.95508 4.68004C3.95508 3.91004 4.56008 3.29004 5.30008 3.29004H6.55508C7.37508 3.29004 8.04008 3.98004 8.04008 4.83004C8.04008 5.03504 7.87008 5.20504 7.66508 5.20504C7.46008 5.20504 7.29008 5.03504 7.29008 4.83004C7.29008 4.39504 6.96008 4.04004 6.55508 4.04004H5.30008C4.97508 4.04004 4.70508 4.33004 4.70508 4.68004C4.70508 5.11504 4.86008 5.20004 5.11508 5.29004L7.13008 6.00004C7.52008 6.13504 8.04508 6.42504 8.04508 7.32004C8.04008 8.08504 7.44008 8.71004 6.70008 8.71004Z" fill="white"/>
                      <path d="M6 9.375C5.795 9.375 5.625 9.205 5.625 9V3C5.625 2.795 5.795 2.625 6 2.625C6.205 2.625 6.375 2.795 6.375 3V9C6.375 9.205 6.205 9.375 6 9.375Z" fill="white"/>
                      <path d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z" fill="white"/>
                    </g>
                  </svg>
                  <span>هزینه آموزش</span>
                </div>
                <BasePrice :price="course.price" v-if="course.price > 0"/>
                <span v-else>رایگان!</span>
              </div>
              <div class="flex items-center justify-between" v-if="course.discount > 0">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path d="M6 11.3747C5.685 11.3747 5.39 11.2547 5.17 11.0297L4.41 10.2697C4.35 10.2097 4.19 10.1447 4.11 10.1447H3.03C2.38 10.1447 1.855 9.61965 1.855 8.96965V7.88969C1.855 7.80969 1.79 7.6497 1.73 7.5897L0.970001 6.82969C0.750001 6.60969 0.625 6.31468 0.625 5.99968C0.625 5.68468 0.745001 5.38966 0.970001 5.16966L1.73 4.40965C1.79 4.34965 1.855 4.18966 1.855 4.10966V3.02971C1.855 2.37971 2.38 1.85466 3.03 1.85466H4.11C4.19 1.85466 4.35 1.78966 4.41 1.72966L5.17 0.969648C5.61 0.529648 6.39 0.529648 6.83 0.969648L7.59 1.72966C7.65 1.78966 7.81 1.85466 7.89 1.85466H8.97C9.62 1.85466 10.145 2.37971 10.145 3.02971V4.10966C10.145 4.18966 10.21 4.34965 10.27 4.40965L11.03 5.16966C11.25 5.38966 11.375 5.68468 11.375 5.99968C11.375 6.31468 11.255 6.60969 11.03 6.82969L10.27 7.5897C10.21 7.6497 10.145 7.80969 10.145 7.88969V8.96965C10.145 9.61965 9.62 10.1447 8.97 10.1447H7.89C7.81 10.1447 7.65 10.2097 7.59 10.2697L6.83 11.0297C6.61 11.2547 6.315 11.3747 6 11.3747ZM2.25999 7.05968C2.45999 7.25968 2.605 7.60969 2.605 7.88969V8.96965C2.605 9.20465 2.795 9.3947 3.03 9.3947H4.11C4.39 9.3947 4.74 9.53967 4.94 9.73967L5.7 10.4997C5.86 10.6597 6.14 10.6597 6.3 10.4997L7.06 9.73967C7.26 9.53967 7.61 9.3947 7.89 9.3947H8.97C9.205 9.3947 9.395 9.20465 9.395 8.96965V7.88969C9.395 7.60969 9.54001 7.25968 9.74001 7.05968L10.5 6.29967C10.58 6.21967 10.625 6.11468 10.625 5.99968C10.625 5.88468 10.58 5.77969 10.5 5.69969L9.74001 4.93968C9.54001 4.73968 9.395 4.38966 9.395 4.10966V3.02971C9.395 2.79471 9.205 2.60466 8.97 2.60466H7.89C7.61 2.60466 7.26 2.45969 7.06 2.25969L6.3 1.49968C6.14 1.33968 5.86 1.33968 5.7 1.49968L4.94 2.25969C4.74 2.45969 4.39 2.60466 4.11 2.60466H3.03C2.795 2.60466 2.605 2.79471 2.605 3.02971V4.10966C2.605 4.38966 2.45999 4.73968 2.25999 4.93968L1.5 5.69969C1.42 5.77969 1.375 5.88468 1.375 5.99968C1.375 6.11468 1.42 6.21967 1.5 6.29967L2.25999 7.05968Z" fill="white"/>
                      <path d="M7.5011 8C7.2211 8 6.99609 7.775 6.99609 7.5C6.99609 7.225 7.22109 7 7.49609 7C7.77109 7 7.99609 7.225 7.99609 7.5C7.99609 7.775 7.7761 8 7.5011 8Z" fill="white"/>
                      <path d="M4.505 5C4.225 5 4 4.775 4 4.5C4 4.225 4.225 4 4.5 4C4.775 4 5 4.225 5 4.5C5 4.775 4.78 5 4.505 5Z" fill="white"/>
                      <path d="M4.5007 7.87474C4.4057 7.87474 4.3107 7.83976 4.2357 7.76476C4.0907 7.61976 4.0907 7.37973 4.2357 7.23473L7.2357 4.23473C7.3807 4.08973 7.6207 4.08973 7.7657 4.23473C7.9107 4.37973 7.9107 4.61976 7.7657 4.76476L4.7657 7.76476C4.6907 7.83976 4.5957 7.87474 4.5007 7.87474Z" fill="white"/>
                    </g>
                  </svg>
                  <span>تخفیف</span>
                </div>
                <BasePrice :price="course.price * (course.discount / 100)" class="opacity-70" />
                <span class="text-[#3C42E7]">75,000 تومان</span>
              </div>
              <div class="flex items-center justify-between" v-if="course.discount > 0">
                <div class="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path d="M6.03456 10.9898C5.32956 10.9898 4.61956 10.7198 4.08456 10.1848L1.81956 7.91984C1.26956 7.36984 0.979556 6.60984 1.01456 5.83484L1.13456 3.33484C1.18956 2.13984 2.13456 1.19484 3.33456 1.13484L5.83456 1.01484C6.60956 0.984844 7.36956 1.26984 7.91956 1.81984L10.1846 4.08484C11.2596 5.15984 11.2596 6.91484 10.1846 7.98984L7.98956 10.1848C7.44956 10.7198 6.74456 10.9898 6.03456 10.9898ZM2.34956 7.38484L4.61456 9.64984C4.99456 10.0298 5.49956 10.2398 6.03456 10.2398C6.56956 10.2398 7.07456 10.0298 7.45456 9.64984L9.64956 7.45484C10.0296 7.07484 10.2396 6.56984 10.2396 6.03484C10.2396 5.49984 10.0296 4.99484 9.64956 4.61484L7.38456 2.34984C6.98456 1.94984 6.42956 1.73484 5.86956 1.76484L3.36956 1.88484C2.55456 1.91984 1.91956 2.55484 1.87956 3.36484L1.75956 5.86484C1.73456 6.42984 1.94956 6.98484 2.34956 7.38484Z" fill="white"/>
                      <path d="M4.75 6.375C3.855 6.375 3.125 5.645 3.125 4.75C3.125 3.855 3.855 3.125 4.75 3.125C5.645 3.125 6.375 3.855 6.375 4.75C6.375 5.645 5.645 6.375 4.75 6.375ZM4.75 3.875C4.27 3.875 3.875 4.27 3.875 4.75C3.875 5.23 4.27 5.625 4.75 5.625C5.23 5.625 5.625 5.23 5.625 4.75C5.625 4.27 5.23 3.875 4.75 3.875Z" fill="white"/>
                    </g>
                  </svg>
                  <span>قیمت نهایی</span>
                </div>
                <BasePrice :price="course.totalPrice"/>
              </div>
              <button v-if="!course.userHasCourse" @click="signCourse" class="bg-[#3C42E7] rounded-lg py-3 text-lg">
                ثبت نام در دوره
              </button>
              <NuxtLink v-else :to="`/course-panel/${course.slug}`" class="text-sm bg-indigo-400/20 hover:bg-indigo-400/30 text-indigo-400 text-center rounded-lg py-2">
                رفتن به پنل دوره
              </NuxtLink>
              <NuxtLink class="text-[#F59D19] self-center">
                پرسش و پاسخ
              </NuxtLink>
            </div>
          </div>
          <div class="p-4 px-6 bg-[#111723] border border-opacity-10 border-[#FDFDFD] rounded-xl flex flex-col space-y-5 relative">
            <div class="flex items-center gap-4">
              <NuxtLink>
                <img :src="`${ApiUrl}/temp/files/${course.teacher.user.avatar}`" :alt="course.teacher.teacherName" class="max-w-16 rounded-full">
              </NuxtLink>
              <div class="flex flex-col items-start ">
                <small class="font-thin">مدرس دوره</small>
                <NuxtLink class="flex items-center gap-2">
                  <strong class="text-lg">{{ course.teacher.user.fullName }}</strong>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.9" d="M5 1L1 5L5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <p class="text-justify font-thin text-sm">
              {{course.teacher.user.description}}
            </p>
          </div>
        </aside>

        <!-- Mobile Responsive Details Footer  -->
        <div :class="['lg:hidden fixed z-10 bottom-10 bg-black/50 border-t border-white/30 backdrop-blur-sm inset-x-0 rounded-t-2xl flex items-center pb-10 px-5 transition-all duration-300',showMoreDetails ? 'h-[90%]' : 'h-[20%]']">
            <div class="flex flex-col items-center w-full h-full gap-3 overflow-visible pt-8">
              <button class="absolute -top-4 bg-black/70 backdrop-blur px-4 py-2 rounded-xl border border-white/30 flex items-center gap-2" @click="showMoreDetails = !showMoreDetails">
                <span class="text-xs">توضیحات {{ !showMoreDetails ? 'بیشتر' : 'کمتر' }}</span>
                <svg :class="['w-3 transition-transform duration-200',{'rotate-180':showMoreDetails}]" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9201 8.05L10.4001 1.53C9.63008 0.759999 8.37008 0.759999 7.60008 1.53L1.08008 8.05" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <Transition name="fade" mode="out-in">
                <div v-if="!showMoreDetails" class="flex items-center w-full gap-5" >
                  <div class="flex flex-col gap-2 flex-1">
                    <strong class="text-lg">{{ course.title }}</strong>
                    <BasePrice :price="course.totalPrice" v-if="course.price > 0" />
                    <span v-else>رایگان!</span>
                  </div>
                  <button @click="signCourse" class="bg-indigo-600 text-white w-max py-2 px-8 rounded-md">ثبت نام</button>
                </div>
                <div v-else class="flex flex-col items-center w-full gap-8 h-full">
                  <strong class="text-xl">{{ course.title }}</strong>
                  <div class="flex flex-col w-full gap-5 flex-1">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="M9.00016 3.95489C8.98516 3.95489 8.97516 3.95489 8.96016 3.95489H8.93516C7.99016 3.92489 7.28516 3.19488 7.28516 2.29488C7.28516 1.37488 8.03516 0.629883 8.95016 0.629883C9.86516 0.629883 10.6152 1.37988 10.6152 2.29488C10.6102 3.19988 9.90516 3.92988 9.00516 3.95988C9.00516 3.95488 9.00516 3.95489 9.00016 3.95489ZM8.95016 1.37489C8.44516 1.37489 8.03516 1.78489 8.03516 2.28989C8.03516 2.78489 8.42016 3.18489 8.91516 3.20489C8.92016 3.19989 8.96016 3.19989 9.00516 3.20489C9.49016 3.17989 9.86516 2.77989 9.87016 2.28989C9.87016 1.78489 9.46016 1.37489 8.95016 1.37489Z" fill="white"/>
                            <path d="M9.00427 7.64032C8.80927 7.64032 8.61427 7.62532 8.41927 7.59032C8.21427 7.55532 8.07927 7.36032 8.11427 7.15532C8.14927 6.95032 8.34427 6.81532 8.54927 6.85032C9.16427 6.95532 9.81427 6.84032 10.2493 6.55032C10.4843 6.39532 10.6093 6.20032 10.6093 6.00532C10.6093 5.81032 10.4793 5.62032 10.2493 5.46532C9.81427 5.17532 9.15427 5.06032 8.53427 5.17032C8.32927 5.21032 8.13427 5.07032 8.09927 4.86532C8.06427 4.66032 8.19927 4.46532 8.40427 4.43032C9.21927 4.28532 10.0643 4.44032 10.6643 4.84032C11.1043 5.13532 11.3593 5.55532 11.3593 6.00532C11.3593 6.45032 11.1093 6.87532 10.6643 7.17532C10.2093 7.47532 9.61927 7.64032 9.00427 7.64032Z" fill="white"/>
                            <path d="M2.98524 3.955C2.98024 3.955 2.97523 3.955 2.97523 3.955C2.07524 3.925 1.37023 3.195 1.36523 2.295C1.36523 1.375 2.11524 0.625 3.03024 0.625C3.94524 0.625 4.69523 1.375 4.69523 2.29C4.69523 3.195 3.99023 3.925 3.09023 3.955L2.98524 3.58L3.02024 3.955C3.01024 3.955 2.99524 3.955 2.98524 3.955ZM3.03523 3.205C3.06523 3.205 3.09024 3.205 3.12024 3.21C3.56524 3.19 3.95523 2.79 3.95523 2.295C3.95523 1.79 3.54524 1.38 3.04024 1.38C2.53524 1.38 2.12523 1.79 2.12523 2.295C2.12523 2.785 2.50523 3.18 2.99023 3.21C2.99523 3.205 3.01523 3.205 3.03523 3.205Z" fill="white"/>
                            <path d="M2.98 7.64032C2.365 7.64032 1.775 7.47532 1.32 7.17532C0.88 6.88032 0.625 6.45532 0.625 6.00532C0.625 5.56032 0.88 5.13532 1.32 4.84032C1.92 4.44032 2.765 4.28532 3.58 4.43032C3.785 4.46532 3.92 4.66032 3.885 4.86532C3.85 5.07032 3.655 5.21032 3.45 5.17032C2.83 5.06032 2.175 5.17532 1.735 5.46532C1.5 5.62032 1.375 5.81032 1.375 6.00532C1.375 6.20032 1.505 6.39532 1.735 6.55032C2.17 6.84032 2.82 6.95532 3.435 6.85032C3.64 6.81532 3.835 6.95532 3.87 7.15532C3.905 7.36032 3.77 7.55532 3.565 7.59032C3.37 7.62532 3.175 7.64032 2.98 7.64032Z" fill="white"/>
                            <path d="M6.00016 7.69024C5.98516 7.69024 5.97516 7.69024 5.96016 7.69024H5.93516C4.99016 7.66024 4.28516 6.93024 4.28516 6.03024C4.28516 5.11024 5.03516 4.36523 5.95016 4.36523C6.86516 4.36523 7.61516 5.11524 7.61516 6.03024C7.61016 6.93524 6.90516 7.66524 6.00516 7.69524C6.00516 7.69024 6.00516 7.69024 6.00016 7.69024ZM5.95016 5.11024C5.44516 5.11024 5.03516 5.52024 5.03516 6.02524C5.03516 6.52024 5.42016 6.92024 5.91516 6.94024C5.92016 6.93524 5.96016 6.93524 6.00516 6.94024C6.49016 6.91524 6.86516 6.51524 6.87016 6.02524C6.87016 5.52524 6.46016 5.11024 5.95016 5.11024Z" fill="white"/>
                            <path d="M6.00063 11.3804C5.40063 11.3804 4.80062 11.2254 4.33562 10.9104C3.89562 10.6154 3.64062 10.1954 3.64062 9.74536C3.64062 9.30036 3.89062 8.87035 4.33562 8.57535C5.27062 7.95535 6.73563 7.95535 7.66563 8.57535C8.10563 8.87035 8.36063 9.29035 8.36063 9.74035C8.36063 10.1854 8.11063 10.6154 7.66563 10.9104C7.20063 11.2204 6.60063 11.3804 6.00063 11.3804ZM4.75063 9.20536C4.51563 9.36036 4.39062 9.55535 4.39062 9.75035C4.39062 9.94535 4.52063 10.1354 4.75063 10.2904C5.42563 10.7454 6.57063 10.7454 7.24563 10.2904C7.48063 10.1354 7.60563 9.94036 7.60563 9.74536C7.60563 9.55036 7.47563 9.36036 7.24563 9.20536C6.57563 8.75036 5.43063 8.75536 4.75063 9.20536Z" fill="white"/>
                          </g>
                        </svg>
                        <span>تعداد دانشجو</span>
                      </div>
                      <span>{{ course.studentsCount }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z" fill="white"/>
                            <path d="M7.85531 7.96488C7.79031 7.96488 7.72531 7.94988 7.66531 7.90988L6.11531 6.98488C5.73031 6.75488 5.44531 6.24988 5.44531 5.80488V3.75488C5.44531 3.54988 5.61531 3.37988 5.82031 3.37988C6.02531 3.37988 6.19531 3.54988 6.19531 3.75488V5.80488C6.19531 5.98488 6.34531 6.24988 6.50031 6.33988L8.05031 7.26488C8.23031 7.36988 8.28531 7.59988 8.18031 7.77988C8.10531 7.89988 7.98031 7.96488 7.85531 7.96488Z" fill="white"/>
                          </g>
                        </svg>

                        <span>مدت زمان</span>
                      </div>
                      <span>{{ course.time }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g >
                            <path d="M9.5 4C10.3284 4 11 3.32843 11 2.5C11 1.67157 10.3284 1 9.5 1C8.67157 1 8 1.67157 8 2.5C8 3.32843 8.67157 4 9.5 4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 6.5H6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 8.5H8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 1H4.5C2 1 1 2 1 4.5V7.5C1 10 2 11 4.5 11H7.5C10 11 11 10 11 7.5V5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                        </svg>
                        <span>وضعیت دوره</span>
                      </div>
                      <span class="text-xs px-3 py-1 rounded-md bg-indigo-500/30">{{ ECourseStatus[course.courseStatus].replaceAll('_',' ') }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4995 3.3369C10.4995 4.3512 9.67692 5.1738 8.66262 5.1738C7.64832 5.1738 6.82617 4.3512 6.82617 3.3369C6.82617 2.3226 7.64832 1.5 8.66262 1.5C9.67692 1.5 10.4995 2.3226 10.4995 3.3369Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17335 3.3369C5.17335 4.3512 4.3512 5.1738 3.33645 5.1738C2.3226 5.1738 1.5 4.3512 1.5 3.3369C1.5 2.3226 2.3226 1.5 3.33645 1.5C4.3512 1.5 5.17335 2.3226 5.17335 3.3369Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4995 8.63085C10.4995 9.64515 9.67692 10.4673 8.66262 10.4673C7.64832 10.4673 6.82617 9.64515 6.82617 8.63085C6.82617 7.61655 7.64832 6.79395 8.66262 6.79395C9.67692 6.79395 10.4995 7.61655 10.4995 8.63085Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17335 8.63085C5.17335 9.64515 4.3512 10.4673 3.33645 10.4673C2.3226 10.4673 1.5 9.64515 1.5 8.63085C1.5 7.61655 2.3226 6.79395 3.33645 6.79395C4.3512 6.79395 5.17335 7.61655 5.17335 8.63085Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                        </svg>
                        <span>تعداد جلسات</span>
                      </div>
                      <span>{{ getTotalEpisodesCount() }} جلسه</span>
                    </div>
                  </div>
                  <div class="flex flex-col w-full gap-5">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g >
                            <path d="M6.70008 8.71004H5.44508C4.62508 8.71004 3.96008 8.02004 3.96008 7.17004C3.96008 6.96504 4.13008 6.79504 4.33508 6.79504C4.54008 6.79504 4.71008 6.96504 4.71008 7.17004C4.71008 7.60504 5.04008 7.96004 5.44508 7.96004H6.70008C7.02508 7.96004 7.29508 7.67004 7.29508 7.32004C7.29508 6.88504 7.14008 6.80004 6.88508 6.71004L4.87008 6.00004C4.48008 5.86504 3.95508 5.57504 3.95508 4.68004C3.95508 3.91004 4.56008 3.29004 5.30008 3.29004H6.55508C7.37508 3.29004 8.04008 3.98004 8.04008 4.83004C8.04008 5.03504 7.87008 5.20504 7.66508 5.20504C7.46008 5.20504 7.29008 5.03504 7.29008 4.83004C7.29008 4.39504 6.96008 4.04004 6.55508 4.04004H5.30008C4.97508 4.04004 4.70508 4.33004 4.70508 4.68004C4.70508 5.11504 4.86008 5.20004 5.11508 5.29004L7.13008 6.00004C7.52008 6.13504 8.04508 6.42504 8.04508 7.32004C8.04008 8.08504 7.44008 8.71004 6.70008 8.71004Z" fill="white"/>
                            <path d="M6 9.375C5.795 9.375 5.625 9.205 5.625 9V3C5.625 2.795 5.795 2.625 6 2.625C6.205 2.625 6.375 2.795 6.375 3V9C6.375 9.205 6.205 9.375 6 9.375Z" fill="white"/>
                            <path d="M6 11.375C3.035 11.375 0.625 8.965 0.625 6C0.625 3.035 3.035 0.625 6 0.625C8.965 0.625 11.375 3.035 11.375 6C11.375 8.965 8.965 11.375 6 11.375ZM6 1.375C3.45 1.375 1.375 3.45 1.375 6C1.375 8.55 3.45 10.625 6 10.625C8.55 10.625 10.625 8.55 10.625 6C10.625 3.45 8.55 1.375 6 1.375Z" fill="white"/>
                          </g>
                        </svg>
                        <span>هزینه آموزش</span>
                      </div>
                      <BasePrice :price="course.price" v-if="course.price > 0" />
                      <span>رایگان!</span>
                    </div>
                    <div class="flex items-center justify-between" v-if="course.discount > 0">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g >
                            <path d="M6 11.3747C5.685 11.3747 5.39 11.2547 5.17 11.0297L4.41 10.2697C4.35 10.2097 4.19 10.1447 4.11 10.1447H3.03C2.38 10.1447 1.855 9.61965 1.855 8.96965V7.88969C1.855 7.80969 1.79 7.6497 1.73 7.5897L0.970001 6.82969C0.750001 6.60969 0.625 6.31468 0.625 5.99968C0.625 5.68468 0.745001 5.38966 0.970001 5.16966L1.73 4.40965C1.79 4.34965 1.855 4.18966 1.855 4.10966V3.02971C1.855 2.37971 2.38 1.85466 3.03 1.85466H4.11C4.19 1.85466 4.35 1.78966 4.41 1.72966L5.17 0.969648C5.61 0.529648 6.39 0.529648 6.83 0.969648L7.59 1.72966C7.65 1.78966 7.81 1.85466 7.89 1.85466H8.97C9.62 1.85466 10.145 2.37971 10.145 3.02971V4.10966C10.145 4.18966 10.21 4.34965 10.27 4.40965L11.03 5.16966C11.25 5.38966 11.375 5.68468 11.375 5.99968C11.375 6.31468 11.255 6.60969 11.03 6.82969L10.27 7.5897C10.21 7.6497 10.145 7.80969 10.145 7.88969V8.96965C10.145 9.61965 9.62 10.1447 8.97 10.1447H7.89C7.81 10.1447 7.65 10.2097 7.59 10.2697L6.83 11.0297C6.61 11.2547 6.315 11.3747 6 11.3747ZM2.25999 7.05968C2.45999 7.25968 2.605 7.60969 2.605 7.88969V8.96965C2.605 9.20465 2.795 9.3947 3.03 9.3947H4.11C4.39 9.3947 4.74 9.53967 4.94 9.73967L5.7 10.4997C5.86 10.6597 6.14 10.6597 6.3 10.4997L7.06 9.73967C7.26 9.53967 7.61 9.3947 7.89 9.3947H8.97C9.205 9.3947 9.395 9.20465 9.395 8.96965V7.88969C9.395 7.60969 9.54001 7.25968 9.74001 7.05968L10.5 6.29967C10.58 6.21967 10.625 6.11468 10.625 5.99968C10.625 5.88468 10.58 5.77969 10.5 5.69969L9.74001 4.93968C9.54001 4.73968 9.395 4.38966 9.395 4.10966V3.02971C9.395 2.79471 9.205 2.60466 8.97 2.60466H7.89C7.61 2.60466 7.26 2.45969 7.06 2.25969L6.3 1.49968C6.14 1.33968 5.86 1.33968 5.7 1.49968L4.94 2.25969C4.74 2.45969 4.39 2.60466 4.11 2.60466H3.03C2.795 2.60466 2.605 2.79471 2.605 3.02971V4.10966C2.605 4.38966 2.45999 4.73968 2.25999 4.93968L1.5 5.69969C1.42 5.77969 1.375 5.88468 1.375 5.99968C1.375 6.11468 1.42 6.21967 1.5 6.29967L2.25999 7.05968Z" fill="white"/>
                            <path d="M7.5011 8C7.2211 8 6.99609 7.775 6.99609 7.5C6.99609 7.225 7.22109 7 7.49609 7C7.77109 7 7.99609 7.225 7.99609 7.5C7.99609 7.775 7.7761 8 7.5011 8Z" fill="white"/>
                            <path d="M4.505 5C4.225 5 4 4.775 4 4.5C4 4.225 4.225 4 4.5 4C4.775 4 5 4.225 5 4.5C5 4.775 4.78 5 4.505 5Z" fill="white"/>
                            <path d="M4.5007 7.87474C4.4057 7.87474 4.3107 7.83976 4.2357 7.76476C4.0907 7.61976 4.0907 7.37973 4.2357 7.23473L7.2357 4.23473C7.3807 4.08973 7.6207 4.08973 7.7657 4.23473C7.9107 4.37973 7.9107 4.61976 7.7657 4.76476L4.7657 7.76476C4.6907 7.83976 4.5957 7.87474 4.5007 7.87474Z" fill="white"/>
                          </g>
                        </svg>
                        <span>تخفیف</span>
                      </div>
                      <BasePrice class="opacity-70" :price="course.price * (course.discount / 100)" />
                    </div>
                    <div class="flex items-center justify-between" v-if="course.discount > 0">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g >
                            <path d="M6.03456 10.9898C5.32956 10.9898 4.61956 10.7198 4.08456 10.1848L1.81956 7.91984C1.26956 7.36984 0.979556 6.60984 1.01456 5.83484L1.13456 3.33484C1.18956 2.13984 2.13456 1.19484 3.33456 1.13484L5.83456 1.01484C6.60956 0.984844 7.36956 1.26984 7.91956 1.81984L10.1846 4.08484C11.2596 5.15984 11.2596 6.91484 10.1846 7.98984L7.98956 10.1848C7.44956 10.7198 6.74456 10.9898 6.03456 10.9898ZM2.34956 7.38484L4.61456 9.64984C4.99456 10.0298 5.49956 10.2398 6.03456 10.2398C6.56956 10.2398 7.07456 10.0298 7.45456 9.64984L9.64956 7.45484C10.0296 7.07484 10.2396 6.56984 10.2396 6.03484C10.2396 5.49984 10.0296 4.99484 9.64956 4.61484L7.38456 2.34984C6.98456 1.94984 6.42956 1.73484 5.86956 1.76484L3.36956 1.88484C2.55456 1.91984 1.91956 2.55484 1.87956 3.36484L1.75956 5.86484C1.73456 6.42984 1.94956 6.98484 2.34956 7.38484Z" fill="white"/>
                            <path d="M4.75 6.375C3.855 6.375 3.125 5.645 3.125 4.75C3.125 3.855 3.855 3.125 4.75 3.125C5.645 3.125 6.375 3.855 6.375 4.75C6.375 5.645 5.645 6.375 4.75 6.375ZM4.75 3.875C4.27 3.875 3.875 4.27 3.875 4.75C3.875 5.23 4.27 5.625 4.75 5.625C5.23 5.625 5.625 5.23 5.625 4.75C5.625 4.27 5.23 3.875 4.75 3.875Z" fill="white"/>
                          </g>
                        </svg>
                        <span>قیمت نهایی</span>
                      </div>
                      <BasePrice :price="course.totalPrice" />
                    </div>
                  </div>
                  <button @click="signCourse" class="w-full bg-indigo-600 text-white py-2 rounded-md">ثبت نام</button>
                </div>
              </Transition>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {GetCourseBySlug} from "~/services/course.service";
import type {CourseDto} from "~/models/course/courseDto";
import {ApiUrl} from "~/utilities/ApiUrls";
import {ECourseStatus} from "~/models/course/courseEnums";
import {EItemType} from "~/models/cart/addToCartViewModel";
import {GetComments, SendComment} from "~/services/comment.service";
import {type CommentFilterData, EPostType} from "~/models/comment/commentDto";

const route = useRoute();
const slug = route.params.slug;
const {data,pending} = await useAsyncData('GetCourse',()=>GetCourseBySlug(slug));
const course:Ref<CourseDto> = ref(data.value?.data!);
const comments:Ref<CommentFilterData[]> = ref([]);

useHead({
  title:course.value.title
})

onMounted(async ()=>{
  const result = await GetComments({take:15,pageId:1,postId:course.value.id,postType:EPostType.Course});
  if(result.isSuccess){
    comments.value = result.data?.data!;
  }
})

const getTotalEpisodesCount = () => {
  return course.value.sections.reduce((accumulator, currentValue) => {
    accumulator += currentValue.episodes.length;
    return accumulator;
  }, 0)
}

const router = useRouter();
const toast = useToast();
const cartStore = useCartStore();
const signCourse = async ()=>{
  const result = await cartStore.addToCart({itemType:EItemType.Course,itemId:course.value.id,count:1});
  if(result){
    toast.showToast('دوره با موفقیت به سبد خرید اضافه شد!');
    await router.push('/cart');
  }
}

const showMoreDetails = ref(false);
const showComments = ref(false);

const expandSeason = ($event:any)=>{
  const season = $event.target.parentElement;
  const details = season.querySelector(".details");
  if(!details.classList.contains("expanded")) {
    const seasons = document.querySelectorAll("#episodes .details");
    seasons.forEach(s => {
      if (s.classList.contains('expanded')) {
        s.classList.remove('expanded');
        const expander = s.parentElement.querySelector('.season-expander');
        expander.classList.toggle('border-transparent');
        expander.classList.toggle('border-indigo-500');
        const arrow = expander.querySelector("svg.arrow");
        arrow.classList.toggle('-rotate-90');
      }
    })
  }
  const arrow = season.querySelector("div svg.arrow");
  $event.target.classList.toggle('border-transparent');
  $event.target.classList.toggle('border-indigo-500');
  details.classList.toggle('expanded');
  arrow.classList.toggle('-rotate-90');
}
const expandEpisode = ($event:any)=>{
  const episode = $event.target.parentElement.parentElement;
  const details = episode.querySelector(".episode-details");
  episode.classList.toggle('episode-shadow');
  episode.classList.toggle('border-b');
  details.classList.toggle('episode-expanded');
}

const comment = ref('');
const commentLoading = ref(false);
const sendComment = async ()=>{
  commentLoading.value = true;

  const result = await SendComment({postType:EPostType.Course,postId:course.value.id,parentId:null,text:comment.value})
  if(result.isSuccess){
    toast.showToast();
  }
  commentLoading.value = false;
}

</script>

<style>
body{
  @apply bg-[#090D16] text-white;
  font-family: 'Vazir FD-WOL',serif;
}
.season-expander{
  @apply relative flex items-center gap-4 cursor-pointer py-6 px-5 rounded-xl bg-[#131926] transition-all duration-300 border;
}
.details{
  @apply flex flex-col border transition-all duration-500 border-[#FDFDFD]/10 border-t-transparent rounded-b-xl bg-[#111723] py-5 pb-0 -mt-5 max-h-0;
}
.expanded{
  max-height: 900px;
  @apply overflow-y-auto ;
}
.episode-expanded{
  @apply pb-5 !max-h-[300px] md:!max-h-[150px];
}
.episode-shadow{
  box-shadow: 0 8px 30px rgba(4, 8, 18, 0.69);
}
.episode-expander{
  @apply flex md:grid grid-cols-6 w-full items-center justify-between flex-wrap md:flex-nowrap;
}
.episode-details{
  @apply flex flex-col w-full transition-all duration-300 overflow-hidden items-end max-h-0;
}

.fade-enter-active,
.fade-leave-active{
  @apply transition-all duration-300;
}

.fade-leave-active{
  @apply absolute;
}

.fade-enter-from,
.fade-leave-to{
  @apply opacity-0;
}
</style>