<template>
  <div class="flex flex-col border border-white/30 rounded-xl bg-white/5 p-4 gap-4" >
    <div class="flex flex-col lg:flex-row lg:items-center gap-5">
      <span class="w-6 h-6 font-light opacity-80 grid place-items-center pt-1 text-xs aspect-square border border-white/30 rounded-full bg-black/20">{{index + 1}}</span>
      <div class="flex flex-col gap-2">
        <button @click="showEpisodes = !showEpisodes">{{section.title}}</button>
        <div class="flex lg:items-center gap-2">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ section.episodes.length }} ویدئو</span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ section.time }}</span>
        </div>
      </div>
      <div class="mr-auto flex flex-wrap lg:flex-nowrap lg:items-center gap-2">
        <button @click="deleteSection" class="p-1 rounded-md bg-red-400/10 text-red-400 hover:bg-red-400/30 duration-300 transition-colors">
          <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button @click="emits('editSection',section)" class="p-1 rounded-md bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/30 duration-300 transition-colors">
          <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.89 5.04999C12.32 7.80999 14.56 9.91999 17.34 10.2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <NuxtLink :to="`/master/manage-courses/addEpisode?courseId=${courseId}&sectionId=${section.id}`" class="text-xs px-5 py-2 rounded-md bg-indigo-400/10 text-indigo-400 hover:bg-indigo-400/30 duration-300 transition-colors">
          <span>ویدئو جدید</span>
        </NuxtLink>
        <NuxtLink :to="`/master/manage-courses/addQuiz?courseId=${courseId}&sectionId=${section.id}`" class="text-xs px-5 py-2 rounded-md bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/30 duration-300 transition-colors">
          <span>آزمون جدید</span>
        </NuxtLink>
        <button class="hidden lg:block" @click="showEpisodes = !showEpisodes">
          <svg :class="['opacity-70 transition-transform duration-200',{'rotate-180':showEpisodes}]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <ul :class="['w-full flex flex-col gap-2 transition-all duration-300 overflow-auto',showEpisodes ? 'max-h-96' : 'max-h-0']">
      <li class="py-2 text-sm opacity-70">
        <p>
          {{section.description}}
        </p>
      </li>
      <li>
        <base-divider class="my-2">ویدئو ها</base-divider>
      </li>
      <MasterEpisode v-if="section.episodes.length > 0" v-for="(e,i) in section.episodes" :key="i" :episode="e" :index="i" :section-id="section.id" :course-id="courseId" />
      <li v-else class="w-full flex items-center justify-center bg-primary/30 text-white text-sm py-3 rounded-lg gap-2">
        <span>ویدئویی برای این فصل ثبت نشده است</span>
        <NuxtLink :to="`/master/manage-courses/addEpisode?courseId=${courseId}&sectionId=${section.id}`" class="text-xs px-5 py-2 rounded-md bg-indigo-400/10 text-indigo-400 hover:bg-indigo-400/30 duration-300 transition-colors">
          <span>افزودن ویدئو</span>
        </NuxtLink>
      </li>
      <li>
        <base-divider class="my-2">آزمون ها</base-divider>
      </li>
      <MasterQuiz v-if="section.sectionQuizzes?.length > 0" v-for="(q,i) in section.sectionQuizzes" :key="i" :quiz="q" :index="i" :section-id="section.id" />
      <li v-else class="w-full flex items-center justify-center bg-orange-400/30 text-white text-sm py-3 rounded-lg gap-2">
        <span>آزمونی برای این فصل ثبت نشده است</span>
        <NuxtLink :to="`/master/manage-courses/addQuiz?courseId=${courseId}&sectionId=${section.id}`" class="text-xs px-5 py-2 rounded-md bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/30 duration-300 transition-colors">
          <span>افزودن آزمون</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {SectionDto} from "~/models/course/courseDto";
import {ToastType} from "~/composables/useToast";
import {DeleteSection} from "~/services/course.service";

const props = defineProps<{
  section:SectionDto,
  index:number,
  courseId:number
}>()
const emits = defineEmits(['editSection','sectionDeleted']);

const showEpisodes = ref(false);

const toast = useToast();
const deleteSection = async ()=>{
  toast.showToast(
      'آیا از حذف این سرفصل اطمینان دارید؟',
      ToastType.warning,
      0,
      false,
      async ()=>{
        const result = await DeleteSection(props.courseId,props.section.id);
        if(result.isSuccess){
          toast.showToast();
          emits('sectionDeleted');
        }
      }
  )
}
</script>