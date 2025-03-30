<template>
  <div class="course-card" >
    <NuxtLink :to="`/course/${course.slug}`" >
      <img :src="getBannerPath(course.imageName)" :alt="course.title" class="aspect-video object-cover w-full rounded-t-3xl h-full">
    </NuxtLink>
    <div class="flex py-4 px-6 flex-col gap-3">
      <div class="flex flex-col">
        <NuxtLink :to="`/course/${course.slug}`" class="font-extrabold text-xl">
          {{course.title}}
        </NuxtLink>
      </div>
      <p class="opacity-70 font-light text-sm">
        {{course.title}}
      </p>
      <div class="flex items-end justify-between">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1">
            <svg class="w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M8.00008 7.99967C9.84103 7.99967 11.3334 6.50729 11.3334 4.66634C11.3334 2.82539 9.84103 1.33301 8.00008 1.33301C6.15913 1.33301 4.66675 2.82539 4.66675 4.66634C4.66675 6.50729 6.15913 7.99967 8.00008 7.99967Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="text-xs">{{ course.teacherName }}</span>
          </div>
          <div class="flex items-center gap-1">
            <svg class="w-4" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 6C11.5 8.76 9.26 11 6.5 11C3.74 11 1.5 8.76 1.5 6C1.5 3.24 3.74 1 6.5 1C9.26 1 11.5 3.24 11.5 6Z" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.35494 7.59085L6.80494 6.66585C6.53494 6.50585 6.31494 6.12085 6.31494 5.80585V3.75586" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xs">{{ course.time }}</span>
          </div>
        </div>
        <div class="bg-[#046BEC] flex items-center px-2 py-1 rounded-lg text-xs font-light absolute left-4 top-4" v-if="course.discount > 0">
          <span class="translate-y-0.5">{{ course.discount }}%</span>
        </div>
        <div class="flex flex-col items-end">
          <div class="flex items-center gap-1 opacity-50" v-if="course.discount > 0">
            <BasePrice :price="course.price"/>
          </div>
          <div class="flex items-center gap-1">
            <BasePrice :price="course.totalPrice"/>
          </div>
        </div>
      </div>
    </div>
    <hr class="opacity-20">
    <NuxtLink :to="`/course/${course.slug}`" class="flex items-center gap-2 text-[#046BEC] py-4 justify-center hover:text-white transition-colors duration-300">
      <span>مشاهده دوره</span>
      <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
        <path d="M8.99984 16.9201L2.47984 10.4001C1.70984 9.63008 1.70984 8.37008 2.47984 7.60008L8.99984 1.08008" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type {CourseCardDto} from "~/models/course/courseSearchResultDto";
import {ApiUrl, FtpUrl} from "~/utilities/ApiUrls";
import {courseBannerPath, getBannerPath} from "~/utilities/directoryUtils";

const props = defineProps<{
  course:CourseCardDto
}>();
</script>

<style scoped>
.course-card{
  @apply flex flex-col bg-[#080F1F] border border-white/20 rounded-xl;
}
</style>