<template>
  <div class="flex flex-col">
    <UEscapeBtn />
    <strong>افزودن ویدئو جدید</strong>
    <base-divider class="my-4"/>
    <form class="grid grid-cols-2 gap-4">
      <FormUInput label="عنوان ویدئو" place-holder="عنوان فارسی ویدئو" name="title" v-model="addEpisodeCommand.title" />
      <FormUInput label="عنوان انگلیسی" place-holder="English Title For this Episode" dir="ltr" name="englishTitle" v-model="addEpisodeCommand.englishTitle" />
      <FormUTime label="مدت زمان ویدئو" name="time" v-model="addEpisodeCommand.time" />
      <FormUToggle label="رایگان" v-model="addEpisodeCommand.isFree"/>
      <FormUFileInput label="ویدئو دوره (فرمت MP4)" name="video" type="file" v-model="addEpisodeCommand.video" />
      <FormUFileInput label="فایل ضمیمه (فرمت RAR)" name="attach" type="file" v-model="addEpisodeCommand.attachFile" />
      <div></div>
      <UButton class="mr-auto">
        ثبت ویدئو
      </UButton>
    </form>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout:'profile'
})
  const route = useRoute();
  const courseId = parseInt(route.query.courseId);
  const sectionId = parseInt(route.query.sectionId);

  const addEpisodeCommand = reactive({
    title:'',
    englishTitle:'',
    time:'',
    video:'',
    attachFile:'',
    isFree:false,
  });
</script>