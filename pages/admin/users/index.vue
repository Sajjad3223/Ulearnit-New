<template>
  <div>
    <div class="flex items-center justify-between">
      <strong>مدیریت کاربران</strong>
      <NuxtLink to="/master/manage-courses/addCourse" class="flex items-center gap-1 bg-indigo-500 text-white px-5 py-2 rounded-md text-xs">
        <svg class="w-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7H13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 13V1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>کاربر جدید</span>
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

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            نام و نام خانوادگی
          </th>
          <th scope="col" class="px-6 py-3">
            ایمیل
          </th>
          <th scope="col" class="px-6 py-3">
            تلفن همراه
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
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700" v-for="u in users" :key="u.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{u.fullName}}
          </th>
          <td>{{u.email}}</td>
          <td>{{u.phoneNumber}}</td>
          <td class="px-6 py-4">
            <span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">{{ u.isActive ? 'فعال' : 'غیر فعال' }}</span>
          </td>
          <td class="px-6 py-4 text-xs">
            {{ new Date(u.creationDate).toLocaleString('fa-Ir') }}
          </td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">مشاهده پرسش</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <UPagination :paginationData="paginationData" v-model="pageId" />

  </div>
</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {GetUsersByAdmin} from "~/services/admin/users.admin.service";
import type {UserFilterData, UserFilterParams} from "~/models/user/userFilterParams";

definePageMeta({
  layout:'admin'
})

const pageId = ref(1);
const filterParams:UserFilterParams = reactive({
  take:10,
  pageId:pageId.value,
  search:undefined,
  phoneNumber:undefined,
  email:undefined,
  id:undefined
})
const users:Ref<UserFilterData[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

watch(
    pageId,
    async ()=>await getData()
);

onMounted( async ()=>{
  await getData();
})

const loading = ref(false);
const getData = async ()=>{
  loading.value = true;
  filterParams.pageId = pageId.value;
  const result = await GetUsersByAdmin(filterParams);
  if(result.isSuccess){
    users.value = result.data.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }
  loading.value = false;
}
</script>