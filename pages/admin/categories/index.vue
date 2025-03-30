<template>
  <div>
    <div class="flex items-center justify-between">
      <strong>دسته بندی ها</strong>
      <UButton size="xs" @click="showAddCategory = true" class="mr-auto">
        افزودن دسته بندی
      </UButton>
    </div>
    <base-divider class="my-4"/>
    <div class="flex flex-col gap-4">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              عنوان
            </th>
            <th scope="col" class="px-6 py-3">
              زیر مجموعه ها
            </th>
            <th scope="col" class="px-6 py-3">
              تاریخ ثبت
            </th>
            <th scope="col" width="25%" class="px-6 py-3">
              عملیات
            </th>
          </tr>
          </thead>
          <tbody>
          <AdminCategoriesTableData v-for="c in categories" :key="c.id" :category="c" @categoryDeleted="getData"
                                    @addSubCategory="addSubCategory(c)" @editCategory="editCategory"/>
          </tbody>
        </table>
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
             aria-label="Table navigation">
          <span
              class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">نمایش <span
              class="font-semibold text-gray-900 dark:text-white">1 تا 10</span> از <span
              class="font-semibold text-gray-900 dark:text-white">1000</span></span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">قبلی</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
              <a href="#" aria-current="page"
                 class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
              <a href="#"
                 class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">بعدی</a>
            </li>
          </ul>
        </nav>

        <UModal v-model="showAddCategory" title="افزودن دسته بندی">
          <Form @submit="addCategory" class="flex flex-col gap-4 mt-2">
            <FormUInput label="عنوان" name="title" v-model="addCategoryModel.title"/>
            <FormUInput label="عنوان یکتا (انگلیسی)" name="slug" v-model="addCategoryModel.slug"/>
            <UButton class="mr-auto" type="submit" :is-loading="actionLoading"> ثبت دسته بندی</UButton>
          </Form>
        </UModal>

        <UModal v-model="showAddSubCategory" title="افزودن زیرمجموعه">
          <Form @submit="addChild" class="flex flex-col gap-4 mt-2">
            <BaseAlert><span class="font-light text-xs opacity-70">افزودن زیر مجموعه به دسته بندی</span>
              {{ selectedCategory.title }}
            </BaseAlert>
            <FormUInput label="عنوان" name="title" v-model="addSubCategoryModel.title"/>
            <FormUInput label="عنوان یکتا (انگلیسی)" name="slug" v-model="addSubCategoryModel.slug"/>
            <UButton class="mr-auto" type="submit" :is-loading="actionLoading"> ثبت زیر مجموعه</UButton>
          </Form>
        </UModal>

        <UModal v-model="showEditCategory" title="ویرایش دسته بندی">
          <Form @submit="updateCategory" class="flex flex-col gap-4 mt-2">
            <FormUInput label="عنوان" name="title" v-model="editCategoryModel.title"/>
            <FormUInput label="عنوان یکتا (انگلیسی)" name="slug" v-model="editCategoryModel.slug"/>
            <UButton class="mr-auto" type="submit" :is-loading="actionLoading"> ویرایش دسته بندی</UButton>
          </Form>
        </UModal>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {CategoryDto} from "~/models/category/categoryDTO";
import type {PaginationData} from "~/models/baseFilterResult";
import {
  AddCourseCategoryChild,
  CreateCourseCategory, EditCourseCategory,
  GetCourseCategories
} from "~/services/admin/courseCategory.service";
import UModal from "~/components/base/UModal.vue";
import type {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import {ToastType} from "~/composables/useToast";
import type {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import type {EditCategoryCommand} from "~/models/category/editCategoryCommand";

definePageMeta({
  layout: 'admin',
})

const loading = ref(false);
const actionLoading = ref(false);
const showAddCategory = ref(false);
const showAddSubCategory = ref(false);
const showEditCategory = ref(false);
const categories: Ref<CategoryDto[]> = ref([]);
const pagination: Ref<PaginationData | null> = ref(null);

const addCategoryModel: CreateCategoryViewModel = reactive({
  title: '',
  slug: '',
})
const addSubCategoryModel: AddCategoryChildViewModel = reactive({
  parentId: null,
  title: '',
  slug: ''
})
const editCategoryModel: EditCategoryCommand = reactive({
  id: null,
  title: '',
  slug: ''
})

onMounted(async () => {
  await getData();
})

const getData = async () => {
  loading.value = true;
  const result = await GetCourseCategories();
  if (result.isSuccess) {
    categories.value = result.data;
  }
  loading.value = false;
}

const selectedCategory: Ref<CategoryDto | null> = ref(null);
const addSubCategory = (parent: CategoryDto) => {
  selectedCategory.value = parent;
  showAddSubCategory.value = true;
  addSubCategoryModel.parentId = parent.id;
}

const editCategory = (category:CategoryDto)=>{
  editCategoryModel.id = category.id;
  editCategoryModel.title = category.title;
  editCategoryModel.slug = category.slug;
  showEditCategory.value = true;
}

const addCategory = async () => {
  actionLoading.value = true;
  const result = await CreateCourseCategory(addCategoryModel);
  if (result.isSuccess) {
    useToast().showToast();
    await getData();
    showAddCategory.value = false;
    addCategoryModel.title = '';
    addCategoryModel.slug = '';
  } else {
    useToast().showToast(result.metaData.message, ToastType.error);
  }
  actionLoading.value = false;
}
const addChild = async () => {
  actionLoading.value = true;
  const result = await AddCourseCategoryChild(addSubCategoryModel);
  if (result.isSuccess) {
    useToast().showToast();
    await getData();
    showAddSubCategory.value = false;
    addSubCategoryModel.title = '';
    addSubCategoryModel.slug = '';
  } else {
    useToast().showToast(result.metaData.message, ToastType.error);
  }
  actionLoading.value = false;
}
const updateCategory = async () => {
  actionLoading.value = true;
  const result = await EditCourseCategory(editCategoryModel);
  if (result.isSuccess) {
    useToast().showToast();
    await getData();
    showEditCategory.value = false;
  } else {
    useToast().showToast(result.metaData.message, ToastType.error);
  }
  actionLoading.value = false;
}
</script>