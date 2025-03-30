<script setup lang="ts">
import type {EpisodeDto} from "~/models/course/courseDto";
import {ToastType} from "~/composables/useToast";
import {DeleteEpisode} from "~/services/course.service";

const props = defineProps<{
  episode:EpisodeDto,
  index:number,
  sectionId:number,
  courseId:number
}>()
const emits = defineEmits(['episodeDeleted']);

const toast = useToast();
const deleteEpisode = async ()=>{
  toast.showToast(
      'آیا از حذف این قسمت اطمینان دارید؟',
      ToastType.warning,
      0,
      false,
      async ()=>{
        const result = await DeleteEpisode(props.courseId,props.sectionId,props.episode.id);
        if(result.isSuccess){
          toast.showToast();
          emits('episodeDeleted');
        }
      }
  )
}
</script>

<template>
  <li :class="['grid relative grid-cols-2 gap-4 lg:grid-cols-6 items-center p-4 bg-black/20 rounded-lg',{'opacity-50':!episode.isActive}]" >
    <div class="flex col-span-2 items-center gap-2">
      <span class="w-5 h-5 text-xs rounded-full flex items-center justify-center bg-black/30 pt-1">{{index + 1}}</span>
      <span>{{ episode.title }}</span>
    </div>
    <span class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{episode.time}}</span>
    <span class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{episode.isFree ? 'رایگان' : 'ویژه دانشجو'}}</span>
    <span class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{!episode.hasAttachment ? 'بدون فایل ضمیمه' : 'با فایل ضمیمه'}}</span>
    <div class="flex mr-auto items-center gap-4">
      <NuxtLink :to="`/master/manage-courses/viewEpisode?courseId=${courseId}&sectionId=${sectionId}&episodeId=${episode.id}`" class="p-1 rounded-md bg-white/10 text-white hover:bg-white/30 duration-300 transition-colors">
        <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      <NuxtLink :to="`/master/manage-courses/editEpisode?courseId=${courseId}&sectionId=${sectionId}&episodeId=${episode.id}`" class="p-1 rounded-md bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/30 duration-300 transition-colors">
        <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.89 5.04999C12.32 7.80999 14.56 9.91999 17.34 10.2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      <button @click="deleteEpisode" class="p-1 rounded-md bg-red-400/10 text-red-400 hover:bg-red-400/30 duration-300 transition-colors">
        <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div v-if="!episode.isActive" class="absolute inset-0 flex items-center justify-center pointer-events-none backdrop-blur">
      غیر فعال شده
    </div>
  </li>
</template>

<style scoped>

</style>