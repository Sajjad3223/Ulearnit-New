<template>
<div>
  <strong>کیف پول</strong>
  <base-divider class="my-4"/>
  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-2">
      <span class="text-xs opacity-70">موجودی کیف پول</span>
      <BasePrice :price="cash" no-free  v-if="!loading"/>
      <span v-else class="w-32 h-8 rounded-lg animate-pulse bg-slate-800"></span>
    </div>
    <Form @submit="chargeWallet" :validation-schema="walletChargeSchema" class="flex flex-col md:grid md:grid-cols-4 md:w-1/2 gap-4 items-end">
      <FormUPriceInput class="col-span-3" label="مبلغ شارژ (تومان)" name="price" v-model="price"/>
      <UButton class="h-max" type="submit" :is-loading="loading">شارژ کیف پول</UButton>
    </Form>
    <BaseDivider />
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            توضیحات
          </th>
          <th scope="col" class="px-6 py-3">
            مبلغ
          </th>
          <th scope="col" class="px-6 py-3">
            تراکنش
          </th>
          <th scope="col" class="px-6 py-3">
            تاریخ
          </th>
          <th scope="col" class="px-6 py-3">
            عملیات
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b last:border-none dark:bg-gray-800 dark:border-gray-700" v-for="w in transactions" :key="w.id">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{w.description}}
          </th>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <BasePrice :price="w.price" />
          </th>
          <td class="px-6 py-4">
            <UBadge :color="w.type == EWalletType.واریز ? 'success' : 'danger'">{{ EWalletType[w.type] }}</UBadge>
          </td>
          <td class="px-6 py-4 text-xs">
            <span v-if="w.finallyDate">
              {{ new Date(w.finallyDate).toLocaleTimeString('fa-Ir') }} - {{ new Date(w.finallyDate).toLocaleDateString('fa-Ir') }}
            </span>
          </td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-xs">توضیحات</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <UPagination />
  </div>
</div>
</template>

<script setup lang="ts">
import {ChargeWallet, GetUserWallets} from "~/services/user.service";
import * as Yup from 'yup';
import {minError, requiredError} from "~/utilities/validationUtils";
import {EWalletType, type WalletDto} from "~/models/user/walletFilterResult";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";

definePageMeta({
  layout:'profile'
})

const price = ref(0);
const loading = ref(true);

const walletChargeSchema = Yup.object().shape({
  price:Yup.number().required(requiredError('قیمت')).min(100000,minError('قیمت',100000))
});

const transactions:Ref<WalletDto[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);
const cash = ref(0);

onMounted(async ()=>{
  loading.value = true;
  const result = await GetUserWallets({take:10,pageId:1});
  if(result.isSuccess){
    transactions.value = result.data.data;
    cash.value = result.data.availableWallet;
    paginationData.value = FillPaginationData(result.data);
  }
  loading.value = false;
})

const chargeWallet = async ()=>{
  loading.value = true;
  const result = await ChargeWallet({price:price.value,successCallBackUrl:'localhost:3000/cart/success?chargeWallet=1',errorCallBackUrl:'localhost:3000/cart/error?chargeWallet=1'});
  if(result.isSuccess){
    location.href = result.data;
  }
  loading.value = false;
}
</script>

