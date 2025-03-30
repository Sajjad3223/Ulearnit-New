<template>
  <div class="flex flex-col">
    <UEscapeBtn />
    <strong>{{ episode.title }}</strong>
    <base-divider class="my-4"/>
    <div class="flex flex-col">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="flex flex-col gap-1 col-span-full lg:col-span-1">
          <span class="text-xs opacity-50">عنوان قسمت</span>
          <span>{{episode.title}}</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs opacity-50">عنوان انگلیسی قسمت</span>
          <span>{{episode.englishTitle}}</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs opacity-50">رایگان؟</span>
          <span class="bg-indigo-500/20 px-3 py-1 rounded-md text-indigo-400 border border-indigo-400 w-max text-xs">{{episode.isFree ? 'رایگان' : 'ویژه دانشجویان'}}</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs opacity-50">مدت زمان</span>
          <span>{{episode.time}}</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs opacity-50">وضعیت</span>
          <span class="bg-indigo-500/20 px-3 py-1 rounded-md text-indigo-400 border border-indigo-400 w-max text-xs">{{EEpisodeStatus[episode.episodeStatus].replaceAll('_',' ')}}</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-xs opacity-50">فایل ضمیمه؟</span>
          <span class="bg-indigo-500/20 px-3 py-1 rounded-md text-indigo-400 border border-indigo-400 w-max text-xs">{{episode.hasAttachment ? 'فایل ضمیمه دارد' : 'فایل ضمیمه ندارد'}}</span>
        </div>
        <div class="flex flex-col gap-1 col-span-full">
          <span class="text-xs opacity-50">توضیحات</span>
          <p class="col-span-full">{{episode.description}}</p>
        </div>
      </div>
      <div class="flex flex-col gap-1 my-5">
        <span class="text-xs opacity-50">ویدئوی قسمت</span>
        <video v-if="videoName" controls class="rounded-lg">
          <source :src="getEpisodeVideoPath(courseId,sectionId,videoName)" type="video/mp4">
        </video>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xs opacity-50">فایل ضمیمه</span>
        <UButton v-if="episode.hasAttachment" dir="ltr" class="font-[montserrat]">
          {{attachFile}}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GetEpisode,
  GetEpisodeAttachment,
  GetEpisodeVideo
} from "~/services/course.service";
import type {EpisodeDto} from "~/models/course/courseDto";
import {ApiUrl} from "~/utilities/ApiUrls";
import {EEpisodeStatus} from "../../../models/course/courseEnums";
import {getEpisodeVideoPath} from "~/utilities/directoryUtils";

definePageMeta({
  layout:'profile'
})
  const route = useRoute();
  const courseId = parseInt(route.query.courseId as string);
  const sectionId = parseInt(route.query.sectionId as string);
  const episodeId = parseInt(route.query.episodeId as string);

  const {data} = await useAsyncData(`EditEpisode-${episodeId}`,()=>GetEpisode(episodeId));

  const episode:Ref<EpisodeDto> = ref(data.value?.data!);

  const videoName = ref('');
  const attachFile = ref('');

  onMounted(async ()=>{
    const result = await GetEpisodeVideo(episode.value.token);
    if(result.isSuccess){
      videoName.value = result.data;
    }
    if(episode.value.hasAttachment){
      const attachFileResult = await GetEpisodeAttachment(episode.value.token);
      if(attachFileResult.isSuccess){
        attachFile.value = attachFileResult.data;
      }
    }
  })

  const toast = useToast();
</script>