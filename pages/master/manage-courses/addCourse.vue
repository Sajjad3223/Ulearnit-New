<template>
  <div class="flex flex-col">
    <UEscapeBtn/>
    <strong>افزودن دوره جدید</strong>
    <base-divider class="my-4"/>
    <Form keep-values @submit="createCourse" :validation-schema="courseSchema" class="grid lg:grid-cols-2 gap-4" v-slot="{meta}">
      <FormUInput label="عنوان دوره" place-holder="عنوان دوره" name="title" v-model="addCourseCommand.title"/>
      <FormUInput label="اسلاگ (به انگلیسی)" place-holder="نام یکتا برای این دوره" name="slug" v-model="addCourseCommand.slug"/>
      <FormUSelect label="دسته بندی اصلی" name="categoryId" :options="categoryOptions" v-model="addCourseCommand.categoryId" error-message="دسته بندی اصلی را انتخاب کنید"/>
      <FormUSelect v-if="addCourseCommand.categoryId" label="دسته بندی فرعی" name="subCategoryId" :options="subCategoryOptions" v-model="addCourseCommand.subCategoryId"/>
      <div v-else></div>
      <FormUSelect label="سطح دوره" name="courseLevel" :options="courseLevelOptions" v-model="addCourseCommand.courseLevel"/>
      <div class="flex items-center gap-4">
        <FormUToggle label="رایگان؟" v-model="isFree" class="mb-1.5"/>
        <FormUPriceInput name="price" label="هزینه دوره" v-model="addCourseCommand.price" place-holder="100,000" class="w-1/2" :disabled="isFree"/>
      </div>
      <FormUTags label="پیشنیاز های دوره (با کاما (,) جدا کنید)" placeholder="آموزش مقدماتی آنریل انجین,آشنایی با برنامه نویسی, ..." name="requirements" v-model="addCourseCommand.requirements" />
      <FormUTags label="برچسب ها (با کاما (,) جدا کنید)" placeholder="انریل انجین, unreal engine, بازی سازی, ..." name="tags" v-model="addCourseCommand.tags" />
      <FormUFileInput ref="bannerInput" label="بنر دوره" name="imageName" type="image" v-model="addCourseCommand.imageName" :upload-url="`${ApiUrl}/api/course/upload-banner`"/>
      <FormUFileInput ref="introInput" label="ویدئو دوره (فرمت MP4)" name="introVideo" type="video" v-model="addCourseCommand.introVideo" :upload-url="`${ApiUrl}/api/course/upload-video`"/>
      <div class="col-span-full">
        <ClientOnly>
          <FormUCKEditor title="توضیحات" is-required name="description" v-model="addCourseCommand.description"/>
        </ClientOnly>
      </div>
      <div></div>
      <UButton class="mr-auto" :disabled="!meta.valid || !bannerInputRef?.selectedFile" :is-loading="isLoading">
        ثبت ویدئو
      </UButton>
    </Form>
  </div>
</template>

<script setup lang="ts">
import type {CreateCourseViewModel} from "~/models/course/createCourseViewModel";
import {ECourseLevel} from "~/models/course/courseEnums";
import type {CategoryDto} from "~/models/category/categoryDTO";
import {GetCourseCategories} from "~/services/admin/courseCategory.service";
import type {GSelectData} from "~/models/gSelectData";
import * as Yup from 'yup';
import {requiredError} from "~/utilities/validationUtils";
import {CreateCourse} from "~/services/course.service";
import {ApiUrl} from "~/utilities/ApiUrls";
import {useTemplateRef} from "vue";

definePageMeta({
  layout: 'profile'
})
const route = useRoute();
const courseId = parseInt(route.query.courseId as string);

const courseSchema = Yup.object().shape({
  title: Yup.string().required(requiredError('عنوان دوره')),
  slug: Yup.string().required(requiredError('عنوان یکتا')),
  price:Yup.number().required(requiredError('قیمت دوره'))
})

const isFree = ref(false);
const addCourseCommand:CreateCourseViewModel = reactive({
  title: '',
  slug: '',
  categoryId:0,
  subCategoryId:null,
  courseLevel:ECourseLevel.مبتدی,
  description:'',
  imageName:null,
  introVideo:null,
  price:0,
  requirements:'',
  seoData:{
    metaTitle:'',
    metaDescription:'',
    canonical:'',
    indexPage:false,
    metaKeyWords:'',
    schema:''
  },
  tags:'',
  teacherId:0
});

const bannerInputRef = useTemplateRef('bannerInput');
const introInputRef = useTemplateRef('introInput');

const categories:Ref<CategoryDto[]> = ref([]);
const categoryOptions = computed(()=>{
  return categories.value.map(c=>{
    return {
      title:c.title,
      value:c.id,
      image:null
    } as GSelectData
  })
})
const subCategoryOptions = computed(()=>{
  if(addCourseCommand.categoryId == 0) return [];
  return categories.value.find(c=>c.id == addCourseCommand.categoryId)?.children.map(c=>{
    return {
      title:c.title,
      value:c.id,
      image:null
    } as GSelectData
  })
})

const courseLevelOptions =
  Object.values(ECourseLevel).filter(l =>isNaN(l)).map((l,i)=>{
    return {
      title:l,
      value:i
    } as GSelectData
  });

onMounted(async ()=>{
  const result = await GetCourseCategories();
  if(result.isSuccess){
    categories.value = result.data;
  }
})

const isLoading = ref(false);
const toast = useToast();
const router = useRouter();
const createCourse = async ()=>{
  isLoading.value = true;

  if(!bannerInputRef.value.isUploaded && bannerInputRef.value.selectedFile)
    await bannerInputRef.value.uploadFile();
  if(!introInputRef.value.isUploaded && introInputRef.value.selectedFile)
    await introInputRef.value.uploadFile();

  addCourseCommand.price = isFree.value ? 0 : addCourseCommand.price;
  const result = await CreateCourse(addCourseCommand);
  if(result.isSuccess){
    toast.showToast('دوره با موفقیت ثبت شد');
    router.back();
  }else{
    toast.showToast(result.metaData.message);
  }

  isLoading.value = false;
}

</script>