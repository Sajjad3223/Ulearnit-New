<template>
  <nav v-if="paginationData != null" class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">نمایش <span class="font-semibold text-gray-900 dark:text-white">1 تا 10</span> از <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
      <li v-if="paginationData.currentPage > 1">
        <a href="#" @click="emits('update:modelValue',paginationData.currentPage - 1)" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">قبلی</a>
      </li>
      <li v-if="paginationData.currentPage > 1" v-for="p in paginationData.currentPage - 1">
        <a href="#" @click="emits('update:modelValue',p)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{p}}</a>
      </li>
      <li>
        <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ paginationData.currentPage }}</a>
      </li>
      <li v-if="paginationData.currentPage < paginationData.pageCount" v-for="p in paginationData.pageCount - paginationData.currentPage">
        <a href="#" @click="emits('update:modelValue',p + paginationData.currentPage)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{p + paginationData.currentPage}}</a>
      </li>
      <li v-if="paginationData.currentPage < paginationData.pageCount">
        <a href="#" @click="emits('update:modelValue',paginationData.currentPage + 1)" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">بعدی</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";

const props = defineProps<{
  modelValue:number,
  paginationData:PaginationData
}>()

const emits = defineEmits(['update:modelValue']);
</script>