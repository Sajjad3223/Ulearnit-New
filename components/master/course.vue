<script setup lang="ts">
import {ECourseLevel, ECourseStatus} from "~/models/course/courseEnums";
import type {CourseCardDto} from "~/models/course/courseSearchResultDto";
const props = defineProps<{
  course:CourseCardDto
}>()

const showDetails = ref(false);
</script>

<template>
  <div class="flex flex-col bg-white border-b dark:bg-gray-800 dark:border-gray-700 last:border-none">
    <div class="flex flex-wrap lg:flex-nowrap lg:items-center">
      <div class="flex-1 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <NuxtLink :to="`/master/manage-courses/${course.id}`" class="underline underline-offset-8">
          {{course.title}}
        </NuxtLink>
      </div>
      <div class="lg:w-1/6 px-6 py-4">
        {{ course.episodesCount }} قسمت
      </div>
      <div class="lg:w-1/6 px-6 py-4">
        <BasePrice :price="course.totalPrice" />
      </div>
      <div class="lg:w-1/6 px-6 py-4">
        <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{{ ECourseStatus[course.courseStatus].replaceAll('_',' ') }}</span>
      </div>
      <div class="flex items-center gap-2 lg:w-1/6 px-6 py-4">
        <button class="text-xs text-indigo-400" @click="showDetails = !showDetails">
          جزئیات
        </button>
        <span>-</span>
        <NuxtLink :to="`/course/${course.slug}`" class="text-xs text-indigo-300">
          مشاهده دوره
        </NuxtLink>
      </div>
    </div>
    <div :class="['px-6 grid grid-cols-2 lg:grid-cols-5 gap-8 overflow-hidden transition-all duration-300', showDetails ? 'mb-4 max-h-52' : 'mb-0 max-h-0']">
      <div class="flex flex-col border-l border-white/20 last:border-none">
        <span class="text-xs opacity-70">سطح دوره</span>
        <span class="text-white/80">{{ECourseLevel[course.courseLevel]}}</span>
      </div>
      <div class="flex flex-col border-l border-white/20 last:border-none">
        <span class="text-xs opacity-70">تعداد دانشجو ها</span>
        <span class="text-white/80">{{ course.studentsCount }} دانشجو</span>
      </div>
      <div class="flex flex-col border-l border-white/20 last:border-none">
        <span class="text-xs opacity-70">مدت زمان دوره</span>
        <span class="text-white/80">{{ course.time }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>