<template>
  <div class="flex flex-col">
    <UEscapeBtn/>
    <strong>افزودن دوره جدید</strong>
    <base-divider class="my-4"/>
    <Form keep-values @submit="editCourse" :validation-schema="courseSchema" class="flex flex-col lg:grid lg:grid-cols-2 gap-4" v-slot="{meta}">
      <FormUInput label="عنوان دوره" place-holder="عنوان دوره" name="title" v-model="editCourseCommand.title" :value="editCourseCommand.title"/>
      <FormUInput label="اسلاگ" place-holder="نام یکتا برای این دوره" name="slug" v-model="editCourseCommand.slug" :value="editCourseCommand.slug"/>
      <FormUSelect label="دسته بندی اصلی" name="categoryId" :options="categoryOptions" v-model="editCourseCommand.categoryId" error-message="دسته بندی اصلی را انتخاب کنید"/>
      <FormUSelect label="دسته بندی فرعی" name="subCategoryId" :options="subCategoryOptions" v-model="editCourseCommand.subCategoryId"/>
      <FormUSelect label="سطح دوره" name="courseLevel" :options="courseLevelOptions" v-model="editCourseCommand.courseLevel"/>
      <FormUPriceInput name="price" label="هزینه دوره (0 = رایگان)" v-model="editCourseCommand.price" :value="editCourseCommand.price" place-holder="100,000" class="w-1/2" />
      <FormUInput label="پیشنیاز های دوره (با کاما (,) جدا کنید)" place-holder="آموزش مقدماتی آنریل انجین,آشنایی با برنامه نویسی, ..." name="requirements" v-model="editCourseCommand.requirements" :value="editCourseCommand.requirements"/>
      <FormUInput label="برچسب ها (با کاما (,) جدا کنید)" place-holder="انریل انجین, unreal engine, بازی سازی, ..." name="tags" v-model="editCourseCommand.tags" :value="editCourseCommand.tags"/>
      <FormUFileInput label="بنر دوره" name="imageName" type="file" v-model="editCourseCommand.imageName"/>
      <FormUFileInput label="ویدئو دوره (فرمت MP4)" name="introVideo" type="file" v-model="editCourseCommand.introVideo"/>
      <div class="col-span-full">
        <ClientOnly>
          <FormUCKEditor ref="content" title="توضیحات" is-required name="description" v-model="editCourseCommand.description">
            {{editCourseCommand.description}}
          </FormUCKEditor>
        </ClientOnly>
      </div>
      <div></div>
      <UButton class="mr-auto" :disabled="!meta.valid || editCourseCommand.imageName === null || isLoading" :is-loading="isLoading">
        ثبت تغییرات
      </UButton>
    </Form>
  </div>
</template>

<script setup lang="ts">
import type {EditCourseViewModel} from "~/models/course/editCourseViewModel";
import {ECourseLevel} from "~/models/course/courseEnums";
import type {CategoryDto} from "~/models/category/categoryDTO";
import {GetCourseCategories} from "~/services/admin/courseCategory.service";
import type {GSelectData} from "~/models/gSelectData";
import * as Yup from 'yup';
import {requiredError} from "~/utilities/validationUtils";
import {EditCourse, GetCourse} from "~/services/course.service";
import type {CourseDto} from "~/models/course/courseDto";

definePageMeta({
  layout: 'profile'
})
const route = useRoute();
const courseId = parseInt(route.params.courseId as string);

const {data} = await useAsyncData(`EditCourse-${courseId}`,()=>GetCourse(courseId));
const course:Ref<CourseDto> = ref(data.value?.data!);

const courseSchema = Yup.object().shape({
  title: Yup.string().required(requiredError('عنوان دوره')),
  slug: Yup.string().required(requiredError('عنوان یکتا')),
  price:Yup.number().required(requiredError('قیمت دوره'))
})

const editCourseCommand:EditCourseViewModel = reactive({
  courseId:courseId,
  title:course.value.title,
  slug:course.value.slug,
  categoryId:0,
  subCategoryId:0,
  courseLevel:0,
  description:course.value.description,
  imageName:course.value.imageName,
  introVideo:course.value.introVideo,
  price:course.value.price,
  requirements:course.value.requirements.join(','),
  seoData:{
    metaTitle:course.value.seoData.metaTitle,
    metaDescription:course.value.seoData.metaDescription,
    canonical:course.value.seoData.canonical,
    indexPage:course.value.seoData.indexPage,
    metaKeyWords:course.value.seoData.metaKeyWords,
    schema:course.value.seoData.schema
  },
  tags:course.value.tags.join(','),
  courseStatus:course.value.courseStatus
});

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
  if(editCourseCommand.categoryId == 0) return [];
  return categories.value.find(c=>c.id == editCourseCommand.categoryId)?.children.map(c=>{
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

const content = ref();
onMounted(async ()=>{
  const result = await GetCourseCategories();
  if(result.isSuccess){
    categories.value = result.data;
    editCourseCommand.categoryId = course.value.category.id;
    editCourseCommand.subCategoryId = course.value.subCategory?.id ?? 0;
    editCourseCommand.courseLevel = course.value.courseLevel;
    content.value.setContent(course.value.description);
  }
})

const isLoading = ref(false);
const toast = useToast();
const router = useRouter();
const editCourse = async ()=>{
  isLoading.value = true;

  const result = await EditCourse(editCourseCommand);
  if(result.isSuccess){
    toast.showToast('دوره با موفقیت ثبت شد');
    await router.push(`/master/manage-courses/${courseId}`);
  }else{
    toast.showToast(result.metaData.message);
  }

  isLoading.value = false;
}

</script>