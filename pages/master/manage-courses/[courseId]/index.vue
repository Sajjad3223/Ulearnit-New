<template>
  <div>
    <UEscapeBtn />
    <div class="flex items-start gap-10">
      <div class="w-1/3 flex flex-col gap-4">
        <div class="aspect-video">
          <video :poster="getBannerPath(course.imageName)" controls class="rounded-2xl">
            <source :src="getIntroVideoPath(course.introVideo)">
          </video>
        </div>
        <div class="max-h-[200px] overflow-hidden relative">
          <div v-html="course.description"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-secondary to-transparent to-50%"></div>
        </div>
        <ul class="flex gap-2">
          <li v-for="tag in course.tags" class="bg-primary/20 px-2 py-1 rounded-md text-sm border border-white/10">{{tag.replaceAll('_',' ')}}</li>
        </ul>
      </div>
      <div class="w-full flex flex-col gap-4 flex-1">
        <div class="flex items-center justify-between">
          <strong class="text-lg">{{ course.title }}</strong>
          <div class="flex items-center gap-2">
            <NuxtLink :to="`/master/manage-courses/edit/${course.id}`" class="flex gap-2 font-light text-sm px-2 py-1 rounded-md bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/30 duration-300 transition-colors">
              <span>ویرایش</span>
              <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.89 5.04999C12.32 7.80999 14.56 9.91999 17.34 10.2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
            <button v-if="tab === 'sections'" @click="showAddSection = true" class="flex items-center gap-2 bg-indigo-400 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-500 transition-colors duration-300">
              <i class="pi pi-plus"></i>
              <span>افزودن سرفصل</span>
            </button>
          </div>
        </div>
        <BaseDivider />
        <div>
          <div class="flex items-center bg-secondary rounded-lg border border-white/30 p-2 w-max relative mx-auto">
            <button @click="tab = 'info'" :class="['z-[2] text-sm opacity-60 hover:opacity-90 transition-opacity duration-200 py-1 w-[100px]',{'!opacity-100 !text-indigo-400':tab === 'info'}]">اطلاعات کلی</button>
            <button @click="tab = 'sections'" :class="['z-[2] text-sm opacity-60 hover:opacity-90 transition-opacity duration-200 py-1 w-[100px]',{'!opacity-100 !text-indigo-400':tab === 'sections'}]">سرفصل ها</button>
            <button @click="tab = 'students'" :class="['z-[2] text-sm opacity-60 hover:opacity-90 transition-opacity duration-200 py-1 w-[100px]',{'!opacity-100 !text-indigo-400':tab === 'students'}]">دانشجو ها</button>
            <button @click="tab = 'comments'" :class="['z-[2] text-sm opacity-60 hover:opacity-90 transition-opacity duration-200 py-1 w-[100px]',{'!opacity-100 !text-indigo-400':tab === 'comments'}]">نظرات</button>
            <button @click="tab = 'questions'" :class="['z-[2] text-sm opacity-60 hover:opacity-90 transition-opacity duration-200 py-1 w-[100px]',{'!opacity-100 !text-indigo-400':tab === 'questions'}]">پرسش و پاسخ</button>
            <button @click="tab = 'transactions'" :class="['z-[2] text-sm opacity-60 hover:opacity-90 transition-opacity duration-200 py-1 w-[100px]',{'!opacity-100 !text-indigo-400':tab === 'transactions'}]">تراکنش ها</button>
            <span class="absolute right-2 z-[1] bg-indigo-500/20 w-[100px] inset-y-1.5 rounded-md transition-transform duration-300" :style="{transform:`translateX(-${getTabIndex * 100}%)`}"></span>
          </div>
        </div>
        <div v-if="tab === 'info'">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2 bg-secondary border border-white/30 rounded-xl p-4">
              <span class="text-sm opacity-60">مدت زمان:</span>
              <strong class="text-lg self-end" dir="ltr">{{ course.time }}</strong>
            </div>
            <div class="flex flex-col gap-2 bg-secondary border border-white/30 rounded-xl p-4">
              <span class="text-sm opacity-60">سطح دوره:</span>
              <strong class="text-lg self-end">{{ ECourseLevel[course.courseLevel] }}</strong>
            </div>
            <div class="flex flex-col gap-2 bg-secondary border border-white/30 rounded-xl p-4">
              <span class="text-sm opacity-60">دانشجوها:</span>
              <NuxtLink :to="`/master/manage-courses/${courseId}/students`" class="self-end flex items-center gap-1 hover:text-indigo-500 transition-colors duration-200">
                <strong class="text-lg">
                  {{ course.studentsCount }} دانشجو
                </strong>
                <i class="pi pi-angle-left"></i>
              </NuxtLink>
            </div>
            <div class="flex flex-col gap-2 bg-secondary border border-white/30 rounded-xl p-4">
              <span class="text-sm opacity-60">تعداد ویدئو ها:</span>
              <strong class="text-lg self-end">{{ getTotalEpisodesCount() }} قسمت</strong>
            </div>
            <div class="flex flex-col gap-2 bg-secondary border border-white/30 rounded-xl p-4">
              <span class="text-sm opacity-60">هزینه دوره:</span>
              <BasePrice :price="course.price" class="self-end" />
            </div>
            <div class="w-full flex items-center justify-center">
              <UButton color="primary" @click="tab = 'sections'">
                <template #icon>
                  <i class="pi pi-pen-to-square"></i>
                </template>
                <i>مدیریت سرفصل ها</i>
              </UButton>
            </div>
          </div>
        </div>
        <div v-if="tab === 'sections'">
          <div class="flex flex-col w-full gap-4" v-if="course.sections.length > 0">
            <MasterSection v-for="(section,i) in course.sections" :section="section" :index="i" :key="section.id"
                           :courseId="courseId" @editSection="showEditSectionModal(section)" @sectionDeleted="refreshData"/>
          </div>
          <BaseAlert v-else>
            <template #icon>
              <i class="pi pi-ban"></i>
            </template>
            هیچ سرفصلی برای این دوره اضافه نشده است
            <template #action>
              <div class="absolute left-2">
                <button @click="showAddSection = true" class="flex items-center gap-2 bg-indigo-400 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-500 transition-colors duration-300">
                  <i class="pi pi-plus"></i>
                  <span>افزودن سرفصل</span>
                </button>
              </div>
            </template>
          </BaseAlert>
        </div>
      </div>
      <div v-if="false" class="flex flex-col flex-1 gap-4">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0" v-if="course != null">
          <div class="flex flex-col gap-2">
            <strong>{{ course.title }}</strong>
            <div class="flex flex-wrap lg:flex-nowrap items-center gap-2">
              <span
                  class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">زمان کل  {{ course.time }}</span>
              <span
                  class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ course.sections.length }} فصل</span>
              <span
                  class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ getTotalEpisodesCount() }} قسمت</span>
              <span
                  class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">سطح {{ ECourseLevel[course.courseLevel] }}</span>
              <span
                  class="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{ course.studentsCount }} دانشجو</span>
            </div>
          </div>
          <div class="flex gap-4">
            <NuxtLink :to="`/master/manage-courses/edit/${course.id}`" class="p-1 rounded-md bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/30 duration-300 transition-colors">
              <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.89 5.04999C12.32 7.80999 14.56 9.91999 17.34 10.2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 22H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
            <button @click="showAddSection = true"
                    class="flex items-center gap-1 bg-indigo-500 text-white px-5 py-2 rounded-md text-xs">
              <svg class="w-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 13V1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>فصل جدید</span>
            </button>
          </div>
        </div>
        <base-divider class="my-2"/>
        <div class="flex flex-col w-full gap-4" v-if="course != null && course.sections.length > 0">
          <MasterSection v-for="(section,i) in course.sections" :section="section" :index="i" :key="section.id"
                         :courseId="courseId" @editSection="showEditSectionModal(section)" @sectionDeleted="refreshData"/>
        </div>

      </div>
    </div>
    <base-u-modal title="افزودن سرفصل جدید" v-model="showAddSection">
      <Form :validation-schema="sectionValidationSchema" @submit="AddSection" class="gap-5 flex flex-col pt-3">
        <FormUInput label="عنوان" name="title" v-model="addSectionCommand.title"/>
        <FormUInput type="number" label="ترتیب نمایش" name="displayOrder" v-model="addSectionCommand.displayOrder"/>
        <FormUInput label="توضیحات" name="description" v-model="addSectionCommand.description" multiline/>
        <UButton :is-loading="loading" w-full>ثبت سرفصل</UButton>
      </Form>
    </base-u-modal>
    <base-u-modal title="ویرایش سرفصل" v-model="showEditSection">
      <Form :validation-schema="sectionValidationSchema" @submit="editSection" class="gap-5 flex flex-col pt-3">
        <FormUInput label="عنوان" name="title" v-model="editSectionCommand.title" :value="editSectionCommand.title"/>
        <FormUInput type="number" label="ترتیب نمایش" name="displayOrder" v-model="editSectionCommand.displayOrder" :value="editSectionCommand.displayOrder"/>
        <FormUInput label="توضیحات" name="description" v-model="editSectionCommand.description" :value="editSectionCommand.description" multiline/>
        <UButton :is-loading="loading" w-full>ثبت سرفصل</UButton>
      </Form>
    </base-u-modal>
  </div>
</template>
<script setup lang="ts">

import type {CreateSectionViewModel} from "~/models/course/createSectionViewModel";
import {CreateSection, EditSection, GetCourse} from "~/services/course.service";
import {ToastType} from "~/composables/useToast";
import type {CourseDto, SectionDto} from "~/models/course/courseDto";
import {ECourseLevel} from "~/models/course/courseEnums";
import type {EditSectionViewModel} from "~/models/course/editSectionViewModel";
import * as Yup from 'yup';
import {requiredError} from "~/utilities/validationUtils";
import {FtpUrl} from "~/utilities/ApiUrls";
import {courseIntroPath, getBannerPath, getIntroVideoPath} from "~/utilities/directoryUtils";
import RadioToggle from "~/components/base/RadioToggle.vue";

definePageMeta({
  layout: 'profile-course-manager'
})

const route = useRoute();
const courseId = parseInt(route.params.courseId);
const showAddSection = ref(false);
const showEditSection = ref(false);
const toast = useToast();
const tab = ref('info');

const {data, pending} = await useAsyncData(`GetCourse-${courseId}`, () => GetCourse(courseId));

const course: Ref<CourseDto> = ref(data.value?.data);

enum courseTabs {'اطلاعات_کلی','سرفصل_ها','دانشجو_ها','نظرات','پرسش_و_پاسخ'}

const getTotalEpisodesCount = () => {
  return course.value.sections.reduce((accumulator, currentValue) => {
    accumulator += currentValue.episodes.length;
    return accumulator;
  }, 0)
}

const refreshData = async ()=>{
  const result = await GetCourse(courseId);
  if(result.isSuccess){
    course.value = result.data;
  }
}

const sectionValidationSchema = Yup.object().shape({
  title:Yup.string().required(requiredError('عنوان سرفصل')),
  displayOrder:Yup.number().required(requiredError('ترتیب نمایش')),
  description:Yup.string().required(requiredError('توضیحات سرفصل'))
});

const addSectionCommand: CreateSectionViewModel = reactive({
  title: '',
  description: '',
  courseId: courseId,
  displayOrder: 1
});
const showEditSectionModal = (section: SectionDto) => {
  selectedSection.value = section;
  editSectionCommand.sectionId = selectedSection.value?.id;
  editSectionCommand.title = selectedSection.value?.title;
  editSectionCommand.description = selectedSection.value?.description;
  editSectionCommand.courseId = courseId;
  editSectionCommand.displayOrder = selectedSection.value?.displayOrder;
  showEditSection.value = true;
}
const selectedSection: Ref<SectionDto | null> = ref(null);
const editSectionCommand: EditSectionViewModel = reactive({
  sectionId: selectedSection.value?.id,
  title: selectedSection.value?.title,
  description: selectedSection.value?.description,
  courseId: courseId,
  displayOrder: selectedSection.value?.displayOrder
});

const loading = ref(false);
const AddSection = async () => {
  loading.value = true;
  const result = await CreateSection(addSectionCommand);
  if (result.isSuccess) {
    toast.showToast('سرفصل با موفقیت افزوده شد');
    await refreshData();
    showAddSection.value = false;
  } else {
    toast.showToast(result.metaData.message, ToastType.error);
  }
  loading.value = false;
}
const editSection = async () => {
  loading.value = true;
  const result = await EditSection(editSectionCommand);
  if (result.isSuccess) {
    toast.showToast('سرفصل با موفقیت ویرایش شد');
    await refreshData();
    showEditSection.value = false;
  } else {
    toast.showToast(result.metaData.message, ToastType.error);
  }
  loading.value = false;
}

const getTabIndex = computed(()=>{
  switch (tab.value){
    case 'info':return 0;
    case 'sections':return 1;
    case 'students':return 2;
    case 'comments':return 3;
    case 'questions':return 4;
    case 'transactions':return 5;
  }
})

</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
  border-radius: 4rem;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-gray-950 rounded-full;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-800 rounded-full;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-900 rounded-full;
}
</style>