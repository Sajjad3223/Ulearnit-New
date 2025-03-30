<template>
  <div class="flex flex-col">
    <UEscapeBtn />
    <strong>افزودن ویدئو جدید</strong>
    <base-divider class="my-4"/>
    <Form keep-values @submit="createEpisode" v-slot="{meta}" class="flex flex-col lg:grid lg:grid-cols-2 gap-4">
      <FormUInput label="عنوان ویدئو" place-holder="عنوان فارسی ویدئو" name="title" v-model="addEpisodeCommand.title" />
      <FormUInput label="عنوان انگلیسی" place-holder="English Title For this Episode" dir="ltr" name="englishTitle" v-model="addEpisodeCommand.englishTitle" />
      <FormUTime label="مدت زمان ویدئو" name="time" v-model="addEpisodeCommand.time" />
      <FormUToggle label="رایگان" v-model="addEpisodeCommand.isFree"/>
      <FormUInput multiline class="row-span-2" label="توضیحات" name="description" v-model="addEpisodeCommand.description" place-holder="توضیحات این ویدئو" />
      <FormUFileInput ref="videoInput" label="ویدئو دوره (فرمت MP4)" name="video" type="video" v-model="addEpisodeCommand.videoFile" :upload-url="`${ApiUrl}/api/course/upload-episode?courseId=${courseId}&sectionId=${sectionId}`" />
      <FormUFileInput ref="attachInput" label="فایل ضمیمه (فرمت RAR)" name="attach" type="compressed" v-model="addEpisodeCommand.attachmentFile" :upload-url="`${ApiUrl}/api/course/upload-attach?courseId=${courseId}&sectionId=${sectionId}`"/>
      <div></div>
      <UButton type="submit" class="mr-auto" :is-loading="loading" :disabled="!meta.valid || !videoInput?.selectedFile">
        ثبت ویدئو
      </UButton>
    </Form>
  </div>
</template>

<script setup lang="ts">

import {CreateEpisode} from "~/services/course.service";
import type {CreateEpisodeViewModel} from "~/models/course/createEpisodeViewModel";
import {ApiUrl} from "~/utilities/ApiUrls";
import {useTemplateRef} from "vue";

definePageMeta({
  layout:'profile'
})
  const route = useRoute();
  const router = useRouter();
  const courseId = parseInt(route.query.courseId);
  const sectionId = parseInt(route.query.sectionId);

  const addEpisodeCommand:CreateEpisodeViewModel = reactive({
    courseId,
    sectionId,
    title:'',
    englishTitle:'',
    description:'',
    time:'',
    videoFile:'',
    attachmentFile:'',
    isFree:false,
  });
  const videoInput = useTemplateRef('videoInput');
  const attachInput = useTemplateRef('attachInput');

  const loading = ref(false);

  const toast = useToast();
  const createEpisode = async ()=>{
    loading.value = true;

    if(!videoInput.value.isUploaded && videoInput.value.selectedFile)
      await videoInput.value.uploadFile();
    if(!attachInput.value.isUploaded && attachInput.value.selectedFile)
      await attachInput.value.uploadFile();

    const result = await CreateEpisode(addEpisodeCommand);
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