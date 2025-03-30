<template>
  <div class="flex flex-col">
    <UEscapeBtn />
    <strong>ویرایش ویدئو</strong>
    <base-divider class="my-4"/>
    <Form keep-values @submit="editEpisode" class="flex flex-col lg:grid lg:grid-cols-2 gap-4">
      <FormUInput label="عنوان ویدئو" place-holder="عنوان فارسی ویدئو" name="title" v-model="editEpisodeCommand.title" :value="editEpisodeCommand.title" />
      <FormUInput label="عنوان انگلیسی" place-holder="English Title For this Episode" dir="ltr" name="englishTitle" v-model="editEpisodeCommand.englishTitle" :value="editEpisodeCommand.englishTitle" />
      <FormUTime label="مدت زمان ویدئو" name="time" v-model="editEpisodeCommand.time" :value="editEpisodeCommand.time" />
      <FormUToggle label="رایگان" v-model="editEpisodeCommand.isFree" :value="editEpisodeCommand.isFree"/>
      <FormUInput multiline class="row-span-2" label="توضیحات" name="description" v-model="editEpisodeCommand.description" :value="editEpisodeCommand.description" place-holder="توضیحات این ویدئو" />
      <FormUFileInput label="ویدئو دوره (فرمت MP4)" name="video" type="file" v-model="editEpisodeCommand.videoFile" :value="editEpisodeCommand.videoFile" />
      <FormUFileInput label="فایل ضمیمه (فرمت RAR)" name="attach" type="file" v-model="editEpisodeCommand.attachmentFile" :value="editEpisodeCommand.attachmentFile" />
      <div></div>
      <UButton type="submit" class="mr-auto" :is-loading="loading">
        ثبت ویدئو
      </UButton>
    </Form>
  </div>
</template>

<script setup lang="ts">

import {EditEpisode, GetEpisode} from "~/services/course.service";
import type {EditEpisodeViewModel} from "~/models/course/editEpisodeViewModel";
import type {EpisodeDto} from "~/models/course/courseDto";

definePageMeta({
  layout:'profile'
})
  const route = useRoute();
  const router = useRouter();
  const courseId = parseInt(route.query.courseId as string);
  const sectionId = parseInt(route.query.sectionId as string);
  const episodeId = parseInt(route.query.episodeId as string);

  const {data} = await useAsyncData(`EditEpisode-${episodeId}`,()=>GetEpisode(episodeId));

  const episode:Ref<EpisodeDto> = ref(data.value?.data!);
  const editEpisodeCommand:EditEpisodeViewModel = reactive({
    courseId,
    sectionId,
    episodeId,
    title:episode.value.title,
    englishTitle:episode.value.englishTitle,
    description:episode.value.description,
    time:episode.value.time,
    videoFile:null,
    attachmentFile:null,
    isFree:episode.value.isFree,
  });

  const loading = ref(false);

  const toast = useToast();
  const editEpisode = async ()=>{
    loading.value = true;
    const result = await EditEpisode(editEpisodeCommand);
    if(result.isSuccess){
      toast.showToast();
      await router.push(`/master/manage-courses/${courseId}`);
    }
    else{
      toast.showToast(result.metaData.message);
    }
    loading.value = false;
  }
</script>