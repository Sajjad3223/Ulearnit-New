<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{category.title}}
    </th>
    <td class="px-6 py-4">
      {{category.children.length}} زیر مجموعه
    </td>
    <td class="px-6 py-4 text-xs">
      {{ new Date(category.creationDate).toLocaleDateString('fa-Ir') }}
    </td>
    <td class="px-6 py-4">
      <div class="flex items-center gap-4">
        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs" @click="emits('addSubCategory')">افزودن زیر مجموعه</button>
        <button @click="emits('editCategory',category)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">ویرایش</button>
        <button @click="deleteCategory(category.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">حذف</button>
      </div>
    </td>
  </tr>
  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
      v-for="subCategory in category.children" :key="subCategory.id">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
      <span class="w-8 text-xl">•</span>
      <span>{{subCategory.title}}</span>
    </th>
    <td class="px-6 py-4">
      {{subCategory.children.length}} زیر مجموعه
    </td>
    <td class="px-6 py-4 text-xs">
      {{ new Date(subCategory.creationDate).toLocaleDateString('fa-Ir') }}
    </td>
    <td class="px-6 py-4">
      <div class="flex items-center gap-4">
        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs invisible">افزودن زیر مجموعه</button>
        <button @click="emits('editCategory',subCategory)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">ویرایش</button>
        <button @click="deleteCategory(subCategory.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">حذف</button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type {CategoryDto} from "~/models/category/categoryDTO";
import {ToastType, useToast} from "~/composables/useToast";
import {DeleteCourseCategory} from "~/services/admin/courseCategory.service";

const props = defineProps<{
  category:CategoryDto
}>()
const emits = defineEmits(['categoryDeleted','addSubCategory','editCategory']);

const deleteCategory = async (id:number)=>{
  useToast().showToast('آیا از حذف این دسته بندی مطمئن هستید؟',ToastType.warning,0,false, async ()=>{
    const result = await DeleteCourseCategory(id);
    if(result.isSuccess){
      useToast().showToast();
      emits('categoryDeleted');
    }
    else{
      useToast().showToast(result.metaData.message,ToastType.error);
    }
  })
}
</script>