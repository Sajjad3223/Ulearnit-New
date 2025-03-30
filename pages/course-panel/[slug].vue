<template>
  <div>
      <!--  Behind Poster   -->
      <div class="absolute inset-x-0 h-auto top-0 -z-10 grid place-items-center">
        <img :src="`${ApiUrl}/temp/files/${course.imageName}`" alt="unity banner" class="w-full h-full max-h-screen object-cover opacity-50">
      </div>
      <!--  Main Content   -->
      <div class="w-full mt-24">
        <div class="container mx-auto">
          <!--  Course Name   -->
          <h2 class="text-2xl md:text-5xl font-bold">{{ course.title }}</h2>
          <!--  Episode Player   -->
          <div class="flex flex-col lg:flex-row items-start gap-16 mt-10">
            <main class="flex-1 flex flex-col">
              <div class="relative grid place-items-center">
                <video ref="videoPlayer" controls class="rounded-2xl aspect-video object-cover" :poster="`${ApiUrl}/temp/files/${course.imageName}`">
                  <source :src="currentVideo" >
                </video>
                <div v-if="loading" class="bg-black/10 backdrop-blur absolute inset-0 z-10 rounded-2xl grid place-items-center">
                  <ULoading width="100px" />
                </div>
                <button class="absolute lg:bottom-16 lg:left-16">
                  <svg class="w-[100px]" opacity="0.6" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <div class="flex flex-col gap-5 mt-8">
                <div class="flex flex-col lg:flex-row items-start justify-between w-full gap-4">
                  <div class="flex flex-col gap-2">
                    <strong class="text-2xl">{{ currentEpisode.title }}</strong>
                    <span>{{currentEpisode.time}}</span>
                  </div>
                  <div class="flex items-center gap-4">
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
                </div>
                <div class="lg:flex grid grid-cols-2 items-center lg:mr-auto gap-4">
                  <button v-if="currentEpisode.hasAttachment" class="p-3 rounded-md w-full lg:w-max text-white bg-[#222E49] flex items-center justify-center gap-2 text-xs">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.332 15.1663H4.66536C1.72536 15.1663 0.832031 14.273 0.832031 11.333V4.66634C0.832031 1.72634 1.72536 0.833008 4.66536 0.833008H5.66536C6.83203 0.833008 7.1987 1.21301 7.66536 1.83301L8.66536 3.16634C8.88536 3.45967 8.9187 3.49967 9.33203 3.49967H11.332C14.272 3.49967 15.1654 4.39301 15.1654 7.33301V11.333C15.1654 14.273 14.272 15.1663 11.332 15.1663ZM4.66536 1.83301C2.2787 1.83301 1.83203 2.28634 1.83203 4.66634V11.333C1.83203 13.713 2.2787 14.1663 4.66536 14.1663H11.332C13.7187 14.1663 14.1654 13.713 14.1654 11.333V7.33301C14.1654 4.95301 13.7187 4.49967 11.332 4.49967H9.33203C8.4787 4.49967 8.1987 4.20634 7.86536 3.76634L6.86536 2.43301C6.5187 1.97301 6.41203 1.83301 5.66536 1.83301H4.66536Z" fill="white"/>
                      <path d="M13.332 4.75301C13.0587 4.75301 12.832 4.52634 12.832 4.25301V3.33301C12.832 2.27967 12.3854 1.83301 11.332 1.83301H5.33203C5.0587 1.83301 4.83203 1.60634 4.83203 1.33301C4.83203 1.05967 5.0587 0.833008 5.33203 0.833008H11.332C12.9454 0.833008 13.832 1.71967 13.832 3.33301V4.25301C13.832 4.52634 13.6054 4.75301 13.332 4.75301Z" fill="white"/>
                    </svg>
                    <span>دانلود فایل ضمیمه</span>
                  </button>
                  <button @click="downloadEpisode" class="p-3 rounded-md w-full lg:w-max text-white bg-indigo-600 flex items-center justify-center gap-2 text-xs">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.9987 15.1663H5.9987C2.3787 15.1663 0.832031 13.6197 0.832031 9.99967V5.99967C0.832031 2.37967 2.3787 0.833008 5.9987 0.833008H9.9987C13.6187 0.833008 15.1654 2.37967 15.1654 5.99967V9.99967C15.1654 13.6197 13.6187 15.1663 9.9987 15.1663ZM5.9987 1.83301C2.92536 1.83301 1.83203 2.92634 1.83203 5.99967V9.99967C1.83203 13.073 2.92536 14.1663 5.9987 14.1663H9.9987C13.072 14.1663 14.1654 13.073 14.1654 9.99967V5.99967C14.1654 2.92634 13.072 1.83301 9.9987 1.83301H5.9987Z" fill="white"/>
                      <path d="M8.00029 10.1731C7.87362 10.1731 7.74695 10.1265 7.64695 10.0265L5.64695 8.02647C5.45362 7.83314 5.45362 7.51314 5.64695 7.3198C5.84029 7.12647 6.16028 7.12647 6.35362 7.3198L8.00029 8.96647L9.64695 7.3198C9.84029 7.12647 10.1603 7.12647 10.3536 7.3198C10.547 7.51314 10.547 7.83314 10.3536 8.02647L8.35362 10.0265C8.25362 10.1265 8.12695 10.1731 8.00029 10.1731Z" fill="white"/>
                      <path d="M8 10.1732C7.72667 10.1732 7.5 9.94651 7.5 9.67318V4.33984C7.5 4.06651 7.72667 3.83984 8 3.83984C8.27333 3.83984 8.5 4.06651 8.5 4.33984V9.67318C8.5 9.95318 8.27333 10.1732 8 10.1732Z" fill="white"/>
                      <path d="M7.99899 12.1531C6.59232 12.1531 5.17899 11.9264 3.83899 11.4798C3.57899 11.3931 3.43899 11.1065 3.52565 10.8465C3.61232 10.5865 3.89232 10.4398 4.15898 10.5331C6.63898 11.3598 9.36565 11.3598 11.8457 10.5331C12.1057 10.4464 12.3923 10.5865 12.479 10.8465C12.5657 11.1065 12.4257 11.3931 12.1657 11.4798C10.819 11.9331 9.40565 12.1531 7.99899 12.1531Z" fill="white"/>
                    </svg>
                    <span>دانلود ویدئو</span>
                  </button>
                </div>
                <hr class="opacity-20">
              </div>
              <!--  Episode Question  -->
              <div class="flex flex-col mt-8 space-y-5">
                <div class="flex items-center justify-between w-full">
                  <h3 class="text-2xl font-bold">پرسش و پاسخ</h3>
                  <NuxtLink to="/" class="flex items-center gap-2 text-indigo-500 text-sm">
                    <span>مشاهده همه سوالات</span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.7" d="M7 1L1 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </NuxtLink>
                </div>
                <form action="" class="flex flex-col space-y-4">
                  <div class="relative flex items-center w-full">
                    <select name="" id="" class="bg-[#111723] text-white/70 appearance-none w-full rounded-md border border-[#D9D9D9]/30 px-5 py-4">
                      <option value="" selected>عنوان پرسش را انتخاب کنید</option>
                    </select>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="left-5 absolute">
                      <path opacity="0.7" d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <textarea placeholder="توضیحات" rows="6" class="bg-[#111723] w-full rounded-md border border-[#D9D9D9]/30 p-5"></textarea>
                  <button class="px-3 py-2 rounded-md w-max text-white bg-indigo-600 flex items-center gap-2 text-xs self-end">
                    <span>ثبت پرسش</span>
                  </button>
                </form>
              </div>
            </main>
            <!--  Sidebar Content   -->
            <aside class="lg:w-1/4 flex flex-col space-y-6">
              <!--  ProgressBars  -->
              <div v-if="course.userHasCourse" class="w-full flex flex-col gap-4">
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
              <div v-else class="w-fll flex flex-col gap-4 p-4 rounded-lg bg-[#111723]">
                <span class="border border-yellow-500 rounded-md text-yellow-500 py-3 text-xs text-center">شما دانشجوی این دوره نیستید!</span>
                <div class="flex items-center justify-between">
                  <span class="text-sm opacity-70">
                    قیمت دوره
                  </span>
                  <BasePrice :price="course.totalPrice" />
                </div>
                <UButton w-full @click="signCourse">
                  برای ثبت نام کلیک کنید
                </UButton>
              </div>
              <!--  Seasons and Episodes   -->
              <div class="flex flex-col relative rounded-xl">
                <div class="flex items-center gap-1">
                  <strong>لیست ویدئو ها:</strong>
                  <span class="font-light text-sm">( {{getTotalEpisodesCount()}} ویدئو)</span>
                </div>
                <ul>
                  <course-season v-for="section in course.sections" :section="section" :key="section.id" :userHasCourse="course.userHasCourse" @episodeSelected="showOnline" />
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
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">

import {GetCourseBySlug, GetEpisodeVideo} from "~/services/course.service";
import type {CourseDto, EpisodeDto} from "~/models/course/courseDto";
import {ApiUrl} from "~/utilities/ApiUrls";
import {EItemType} from "~/models/cart/addToCartViewModel";
import {createElement} from "@ckeditor/ckeditor5-utils";

const route = useRoute();
const slug = route.params.slug;
const {data,pending} = await useAsyncData('GetCourse',()=>GetCourseBySlug(slug));
const course:Ref<CourseDto> = ref(data.value?.data!);

useHead({
  title:'پنل دوره ' + course.value.title
})

const getTotalEpisodesCount = () => {
  return course.value.sections.reduce((accumulator, currentValue) => {
    accumulator += currentValue.episodes.length;
    return accumulator;
  }, 0)
}

const currentEpisode:Ref<EpisodeDto | null> = ref(course.value.sections[0].episodes[0]);
const currentVideo:Ref<string | null> = ref(`${ApiUrl}/temp/files/${course.value.introVideo}`);
const loading = ref(false);
const videoPlayer = ref();

const showOnline = async (episode:EpisodeDto)=>{
  loading.value = true;
  const result = await GetEpisodeVideo(episode.token);
  if(result.isSuccess){
    currentEpisode.value = episode;
    const source = document.createElement('source');
    source.setAttribute('src',`${ApiUrl}/temp/files/${result.data}`);
    source.setAttribute('type', 'video/mp4');

    videoPlayer.value.innerHTML = '';
    videoPlayer.value.appendChild(source);
    videoPlayer.value.src = `${ApiUrl}/temp/files/${result.data}`;
    videoPlayer.value.play();
  }
  loading.value = false;
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

</script>

<style >
.progress-mask{
  @apply w-full h-[20px] relative bg-opacity-30;
  mask-image: url(/images/maskImage.png);
  mask-repeat: no-repeat;
  mask-size: cover;
}
.progress-mask .progress{
  @apply bg-indigo-600 h-[20px] w-1/2 -skew-x-[10deg];
}

</style>