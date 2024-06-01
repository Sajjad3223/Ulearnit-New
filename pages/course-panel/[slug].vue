<template>
  <div>
      <!--  Behind Poster   -->
      <div class="absolute inset-x-0 h-auto top-0 -z-10 grid place-items-center">
        <img src="~/assets/images/unity-banner.png" alt="unity banner" class="w-full h-full max-h-screen object-cover opacity-50">
      </div>
      <!--  Main Content   -->
      <div class="w-full mt-24">
        <div class="container mx-auto">
          <!--  Course Name   -->
          <h2 class="text-5xl font-lalezar">نام دوره انتخاب شده</h2>
          <!--  Episode Player   -->
          <div class="flex items-start gap-16 mt-10">
            <main class="flex-1 flex flex-col">
              <div class="relative grid place-items-center">
                <img src="~/assets/images/course-preview.png" alt=""/>
                <button class="absolute ">
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
              <!--  Episode Details   -->
              <div class="flex items-center justify-between w-full mt-8">
                <span class="text-indigo-500">قسمت اول</span>
                <span> 03:56:05</span>
              </div>
              <div class="flex items-center justify-between w-full mt-4">
                <strong class="text-2xl">مبانی شخصیت سازی</strong>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-1">
                    <span>20</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 7.5H14.073C14.3287 7.50001 14.5801 7.56536 14.8034 7.68984C15.0266 7.81433 15.2144 7.99382 15.3488 8.21127C15.4833 8.42873 15.5599 8.67693 15.5714 8.93232C15.583 9.18771 15.529 9.44181 15.4147 9.6705L12.7897 14.9205C12.6651 15.1698 12.4735 15.3795 12.2364 15.5261C11.9993 15.6726 11.726 15.7501 11.4472 15.75H8.4345C8.31225 15.75 8.19 15.735 8.07075 15.705L5.25 15M10.5 7.5V3.75C10.5 3.35218 10.342 2.97064 10.0607 2.68934C9.77936 2.40804 9.39782 2.25 9 2.25H8.92875C8.55375 2.25 8.25 2.55375 8.25 2.92875C8.25 3.46425 8.09175 3.98775 7.794 4.43325L5.25 8.25V15M10.5 7.5H9M5.25 15H3.75C3.35218 15 2.97064 14.842 2.68934 14.5607C2.40804 14.2794 2.25 13.8978 2.25 13.5V9C2.25 8.60218 2.40804 8.22064 2.68934 7.93934C2.97064 7.65804 3.35218 7.5 3.75 7.5H5.625" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="flex items-center gap-1">
                    <span>5</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 10.5L3.927 10.5C3.67135 10.5 3.41994 10.4346 3.19665 10.3102C2.97335 10.1857 2.78558 10.0062 2.65116 9.78873C2.51673 9.57127 2.44011 9.32307 2.42858 9.06768C2.41704 8.81229 2.47097 8.55819 2.58525 8.3295L5.21025 3.0795C5.33485 2.83015 5.52647 2.62045 5.7636 2.47393C6.00073 2.32741 6.274 2.24987 6.55275 2.25L9.5655 2.25C9.68775 2.25 9.81 2.265 9.92925 2.295L12.75 3M7.5 10.5V14.25C7.5 14.6478 7.65804 15.0294 7.93934 15.3107C8.22064 15.592 8.60218 15.75 9 15.75H9.07125C9.44625 15.75 9.75 15.4463 9.75 15.0713C9.75 14.5358 9.90825 14.0123 10.206 13.5668L12.75 9.75L12.75 3M7.5 10.5H9M12.75 3H14.25C14.6478 3 15.0294 3.15804 15.3107 3.43934C15.592 3.72064 15.75 4.10218 15.75 4.5L15.75 9C15.75 9.39782 15.592 9.77936 15.3107 10.0607C15.0294 10.342 14.6478 10.5 14.25 10.5H12.375" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
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
              </div>
              <hr class="my-8 opacity-20">
            </main>
            <!--  Sidebar Content   -->
            <aside class="w-1/4 flex flex-col space-y-6">
              <!--  ProgressBars  -->
              <div class="w-full flex flex-col gap-4">
                <div class="w-full flex flex-col gap-2">
                  <div class="flex items-end justify-between">
                    <div class="flex items-center gap-1">
                      <strong>پیشرفت شما:</strong>
                      <span class="font-light">(ویدئو ها)</span>
                    </div>
                    <strong>
                      55%
                    </strong>
                  </div>
                  <div class="progress-mask bg-gray-300" dir="ltr">
                    <div class="progress" style="width: 55%"></div>
                  </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                  <div class="flex items-end justify-between">
                    <div class="flex items-center gap-1">
                      <strong>پیشرفت شما:</strong>
                      <span class="font-light">(کوییز ها)</span>
                    </div>
                    <strong>
                      20%
                    </strong>
                  </div>
                  <div class="progress-mask bg-gray-300" dir="ltr">
                    <div class="progress" style="width: 20%"></div>
                  </div>
                </div>
              </div>

              <!--  Seasons and Episodes   -->
              <div class="flex flex-col relative rounded-xl">
                <ul>
                  <course-season v-for="i in 4" />
                </ul>
              </div>
              <!--  Course Teacher   -->
              <div class="p-4 px-6 bg-[#111723] border border-opacity-10 border-[#FDFDFD] rounded-xl flex flex-col space-y-5 relative">
                <div class="flex items-center gap-4">
                  <NuxtLink>
                    <img src="~/assets/images/avatar.png" alt="avatar" class="max-w-16 rounded-full">
                  </NuxtLink>
                  <div class="flex flex-col items-start ">
                    <small class="font-thin">مدرس دوره</small>
                    <NuxtLink class="flex items-center gap-2">
                      <strong class="text-lg">سجاد میرشبی</strong>
                      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.9" d="M5 1L1 5L5 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
                <p class="text-justify font-thin text-sm">
                  بیش از 4 سال هست که به عنوان یک برنامه نویس در حوزه بازی سازی و طراحی سایت مشغول به کار هستم، بین موتور های بازی سازی بیشتر به آنریل انجین مسلطم و زبان های ++C و #C و همچنین به 3 تفنگدار حوزه وب یعنی HTML CSS و Java Script هم مسلطم. امیدوارم بتونم دانش خودم رو با شما دوستان خوبم به اشتراک بزارم و قدری زکات آموخته های خودم رو ادا کنم.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">


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
  const episode = $event.target.parentElement;
  const details = episode.querySelector(".episode-details");
  episode.classList.toggle('episode-shadow');
  episode.classList.toggle('border-b');
  details.classList.toggle('episode-expanded');
}
</script>

<style >
.progress-mask{
  @apply w-full h-[20px] relative bg-opacity-30;
  mask-image: url("~/assets/images/maskImage.png");
  mask-repeat: no-repeat;
  mask-size: cover;
}
.progress-mask .progress{
  @apply bg-indigo-600 h-[20px] w-1/2 -skew-x-[10deg];
}

</style>