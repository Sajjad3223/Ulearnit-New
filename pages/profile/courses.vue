<template>
  <div>
    <strong>دوره های من</strong>
    <base-divider class="my-4"/>
    <form v-if="false" action="" class="w-full grid grid-cols-4 gap-4 mb-10">
      <div class="relative flex items-center col-span-2">
        <input type="text" class="p-4 w-full bg-[#010205] border rounded-xl border-white/30" placeholder="عبارت جستجو ...">
        <button class="bg-[#046BEC] p-2 absolute left-2 rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>
      <BaseRadioToggle />
      <BaseRadioToggle />
    </form>
    <ul class="flex flex-col w-full gap-4" v-if="!loading">
      <li class="flex flex-col lg:flex-row items-center bg-black/20 rounded-xl border border-white/20 p-4 gap-5" v-for="c in courses" :key="c.id">
        <img src="~/assets/images/img_6.png" alt="course" class="lg:w-1/6 aspect-video object-cover rounded-lg">
        <div class="w-full lg:w-auto flex-1 flex flex-col gap-2">
          <strong>{{ c.title }}</strong>
          <span v-if="false">70% دوره را مشاهده کرده اید</span>
          <div v-if="false" class="w-full bg-indigo-900/30 rounded-full h-2">
            <div class="rounded-full h-2 bg-indigo-500 relative" :style="{width: `${70}%`}">
              <span class="absolute left-0 top-4 -translate-x-1/2 font-light text-xs opacity-80">70%</span>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:flex items-stretch gap-5">
            <div class="flex flex-col gap-1">
              <span class="text-xs opacity-60">مدت زمان دوره</span>
              <strong>{{c.time}}</strong>
            </div>
            <div class="hidden lg:block w-px bg-white/20"></div>
            <div class="flex flex-col gap-1">
              <span class="text-xs opacity-60">تعداد دانشجویان</span>
              <strong>{{c.studentsCount}} نفر</strong>
            </div>
            <div class="hidden lg:block w-px bg-white/20"></div>
            <div class="flex flex-col gap-1">
              <span class="text-xs opacity-60">وضعیت دوره</span>
              <UBadge>{{ECourseStatus[c.courseStatus].replaceAll('_',' ')}}</UBadge>
            </div>
            <div class="hidden lg:block w-px bg-white/20"></div>
            <div class="flex flex-col gap-1">
              <span class="text-xs opacity-60">تعداد قسمت ها</span>
              <strong>{{c.episodesCount}} قسمت</strong>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 items-center">
          <NuxtLink :to="`/course-panel/${c.slug}`" class="px-5 py-2 bg-indigo-500 rounded-lg">رفتن به دوره</NuxtLink>
          <a href="" class="text-xs hidden">پرسش و پاسخ دوره</a>
        </div>
      </li>
    </ul>
    <ul v-else class="flex flex-col gap-4">
      <li class="p-4 rounded-xl skeleton flex gap-5 border border-white/20 items-center h-40 bg-black/20">
        <div class="w-1/6 skeleton-el bg-gray-900 rounded-lg h-full"></div>
        <div class="flex-1 flex flex-col gap-4">
          <div class="w-1/2 skeleton-el h-4 rounded-lg"></div>
          <div class="w-1/4 skeleton-el h-2 rounded-lg"></div>
          <div class="skeleton-el h-3 rounded-lg"></div>
        </div>
        <div class="w-1/6 flex flex-col gap-4 items-center">
          <div class="w-full h-10 skeleton-el rounded-lg"></div>
          <div class="w-2/3 h-2 skeleton-el rounded-lg"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {CourseCardDto} from "~/models/course/courseSearchResultDto";
import {GetUserCourses} from "~/services/course.service";
import type {UserCoursesFilterParams} from "~/models/user/userFilterParams";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {ECourseStatus} from "~/models/course/courseEnums";

definePageMeta({
  layout:'profile'
})

const loading = ref(false);
const pageId = ref(1);
const filterParams:UserCoursesFilterParams = reactive({
  pageId:pageId.value,
  take:10,
  search:undefined,
  userId:undefined
})

const courses:Ref<CourseCardDto[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

onMounted(async ()=>{
  await getData();
})

const getData = async ()=>{
  loading.value = true;

  const result = await GetUserCourses(filterParams);
  if(result.isSuccess){
    courses.value = result.data.data ?? [];
    paginationData.value = FillPaginationData(result.data);
  }

  loading.value = false;
}
</script>