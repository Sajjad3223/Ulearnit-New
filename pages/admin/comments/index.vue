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

    <div class="relative overflow-x-auto mt-6 rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            عنوان پست
          </th>
          <th scope="col" class="px-6 py-3">
            متن پیام
          </th>
          <th scope="col" class="px-6 py-3">
            وضعیت
          </th>
          <th scope="col" class="px-6 py-3">
            تاریخ ثبت
          </th>
          <th scope="col" class="px-6 py-3">
            عملیات
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" v-for="c in comments" :key="c.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{c.postTitle}}
          </th>
          <td class="truncate">{{c.text}}</td>
          <td class="px-6 py-4">
            <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">{{ ECommentStatus[c.commentStatus].replaceAll('_',' ') }}</span>
          </td>
          <td class="px-6 py-4 text-xs">
            {{ new Date(c.creationDate).toLocaleString('fa-Ir') }}
          </td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">مشاهده پرسش</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <UPagination :pagination-data="paginationData" v-model="pageId" />

  </div>
</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {GetCommentsByAdmin} from "~/services/admin/comments.admin.service";
import type {CommentFilterParams} from "~/models/comment/commentFilterParams";
import {type CommentFilterData, ECommentStatus} from "~/models/comment/commentDto";

definePageMeta({
  layout:'admin'
})

const pageId = ref(1);
const filterParams:CommentFilterParams = reactive({
  take:10,
  pageId:pageId.value,
  search:undefined,
  postId:undefined,
  postType:undefined,
  commentStatus:undefined,
  startDate:undefined,
  endDate:undefined,
  userRequested:undefined
})
const comments:Ref<CommentFilterData[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

onMounted( async ()=>{
  const result = await GetCommentsByAdmin(filterParams);
  if(result.isSuccess){
    comments.value = result.data.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }
})
</script>