<template>
  <div>
    <strong>نظرات من</strong>
    <base-divider class="my-4"/>
    <form v-if="false" action="" class="w-full grid grid-cols-3 gap-4">
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
    </form>
    <div class="mt-6">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col lg:flex-row w-full rounded-xl border border-white/20 p-4 bg-[#010205]/30 gap-4" v-for="c in comments" :key="c.id">
          <img src="~/assets/images/avatar.png" alt="avatar" class="w-16 h-16 border-2 border-white/50 rounded-full">
          <div class="w-full flex flex-col gap-2">
            <div class="w-full flex flex-col-reverse md:flex-row lg:items-center lg:justify-between">
              <div class="flex flex-col-reverse lg:flex-row gap-2">
                <NuxtLink :to="`/course/${c.postSlug}`" class="font-semibold">{{c.postTitle}}</NuxtLink>
                <UBadge :color="c.commentStatus == ECommentStatus.تایید_شده ? 'success' : 'primary'">{{ECommentStatus[c.commentStatus].replaceAll('_',' ')}}</UBadge>
              </div>
              <span class="text-xs opacity-60">{{ new Date(c.creationDate).toLocaleDateString('fa-Ir') }}</span>
            </div>
            <p class="text-sm opacity-70 mt-5 lg:mt-0">
              {{c.text}}
            </p>
          </div>
        </div>
      </div>
      <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">نمایش <span class="font-semibold text-gray-900 dark:text-white">1 تا 10</span> از <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">قبلی</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">بعدی</a>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {CommentFilterParams} from "~/models/comment/commentFilterParams";
import {type CommentFilterData, ECommentStatus} from "~/models/comment/commentDto";
import {GetUserComments} from "~/services/comment.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";

definePageMeta({
  layout:'profile'
})

const pageId = ref(1);
const filterParams:CommentFilterParams = reactive({
  pageId:pageId.value,
  take:10,
})

const comments:Ref<CommentFilterData[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

onMounted(async ()=>{
  await getData();
})

const loading = ref(false);
const getData = async ()=>{
  const result = await GetUserComments(filterParams);
  if(result.isSuccess){
    comments.value = result.data.data ?? [];
    paginationData.value = FillPaginationData(result.data);
  }
}

</script>