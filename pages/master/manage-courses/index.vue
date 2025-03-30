<template>
  <div>
    <div class="flex items-center justify-between">
      <strong>مدیریت دوره ها</strong>
      <NuxtLink to="/master/manage-courses/addCourse" class="flex items-center gap-1 bg-indigo-500 text-white px-5 py-2 rounded-md text-xs">
        <svg class="w-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 13V1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span>دوره جدید</span>
      </NuxtLink>
    </div>
    <base-divider class="my-4"/>
    <form v-if="false" action="" class="w-full grid grid-cols-4 gap-4">
      <div class="relative flex items-center col-span-2">
        <input type="text" class="p-4 w-full bg-[#010205] border rounded-xl border-white/30" placeholder="عبارت جستجو ...">
        <button class="bg-[#046BEC] p-2 absolute left-2 rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>
      <BaseRadioToggle />
      <BaseRadioToggle />
    </form>

    <div v-if="!loading" class="flex flex-col">
      <div v-if="courses.length > 0">
        <div class="relative overflow-x-auto rounded-lg">
          <div class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <div class="hidden lg:flex items-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <div class="flex-1 px-6 py-3">
                عنوان دوره
              </div>
              <div class="w-1/6 px-6 py-3">
                تعداد قسمت ها
              </div>
              <div class="w-1/6 px-6 py-3">
                هزینه
              </div>
              <div class="w-1/6 px-6 py-3">
                وضعیت
              </div>
              <div class="w-1/6 px-6 py-3">
                عملیات
              </div>
            </div>
            <MasterCourse v-if="courses.length > 0" v-for="c in courses" :key="c.id" :course="c"/>
          </div>
        </div>
        <UPagination :pagination-data="paginationData" v-model="pageId" />
      </div>
      <div v-else class="w-full flex py-3 px-5 items-center justify-between bg-white/20 rounded-xl">
        <div class="flex items-center gap-2">
          <i class="pi pi-ban"></i>
          <span>دوره ای یافت نشد</span>
        </div>
        <UButton size="sm" color="secondary" left-icon @click="refreshData">
          <template #icon>
            <i class="pi pi-refresh"></i>
          </template>
          بارگیری دوباره
        </UButton>
      </div>
    </div>
    <div v-else class="flex w-full py-5 rounded-xl bg-white/10 items-center justify-center gap-2">
      <i class="pi pi-spin pi-spinner"></i>
      <span>در حال بارگیری...</span>
    </div>

  </div>
</template>

<script setup lang="ts">
import {GetMasterCourses} from "~/services/course.service";
import type {CourseCardDto, CourseFilterParams} from "~/models/course/courseSearchResultDto";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {ECourseStatus} from "../../../models/course/courseEnums";

definePageMeta({
  layout:'profile'
})

const pageId = ref(1);
const filterParams:CourseFilterParams = reactive({
  take:10,
  pageId:pageId.value,
  search:undefined,
  orderFilter:undefined,
  priceFilter:undefined,
  categorySlug:undefined,
  requirement:undefined
})

const loading = ref(true);
const courses:Ref<CourseCardDto[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

onMounted( async ()=>{
  await refreshData();
})

const refreshData = async ()=>{
  loading.value = true;
  const result = await GetMasterCourses(filterParams);
  if(result.isSuccess){
    courses.value = result.data.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }
  loading.value = false;
}
</script>