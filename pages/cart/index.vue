<template>
<div class="my-20 w-[90%] md:container mx-auto bg-slate-900 p-2 lg:p-5 rounded-md lg:rounded-2xl">
  <div class="flex flex-col lg:flex-row lg:items-start gap-5 m-2 lg:m-5" v-if="cart != null && cart.items.length > 0">
    <div class="flex-1 flex flex-col gap-5">
      <div class="bg-slate-950/40 p-4 rounded-lg flex items-center justify-between" v-for="item in cart.items" :key="item.id">
        <div class="flex items-center gap-5">
          <img :src="`${ApiUrl}/temp/files/${item.itemBanner}`" alt="" class="hidden lg:block max-w-32 rounded-lg">
          <div class="flex flex-col gap-2">
            <strong>{{item.itemName}}</strong>
            <div class="flex items-center gap-1 opacity-70">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48924 10.8701C5.74968 10.8701 3.41016 11.2843 3.41016 12.9432C3.41016 14.602 5.73484 15.0311 8.48924 15.0311C11.2288 15.0311 13.5677 14.6162 13.5677 12.958C13.5677 11.2998 11.2436 10.8701 8.48924 10.8701Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.48905 8.50376C10.2869 8.50376 11.744 7.04594 11.744 5.24812C11.744 3.45031 10.2869 1.99316 8.48905 1.99316C6.69123 1.99316 5.23342 3.45031 5.23342 5.24812C5.22735 7.03987 6.67504 8.49769 8.46612 8.50376H8.48905Z" stroke="#D9D9D9" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xs">{{ item.itemAuthorName }}</span>
            </div>
          </div>
        </div>
        <BasePrice :price="item.price" />
        <button @click="deleteItem(item.id)" class="p-1 rounded-md bg-red-400/10 text-red-400 hover:bg-red-400/30 duration-300 transition-colors">
          <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="lg:w-1/5 flex flex-col bg-slate-900 p-5 rounded-lg border border-indigo-500 gap-5">
      <div class="flex items-center justify-between">
        <span class="text-sm opacity-70">تعداد آیتم</span>
        <strong>{{cart.items.length}}</strong>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm opacity-70">جمع کل</span>
        <BasePrice :price="cart.totalPrice" />
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm opacity-70">مبلغ تخفیف</span>
        <span v-if="cart.discount > 0">{{cart.totalPrice * (cart.discount / 100)}} تومان</span>
        <span v-else>0 <BaseTooman/></span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm opacity-70">قیمت نهایی</span>
        <BasePrice :price="(cart.totalPrice - cart.totalPrice * (cart.discount / 100))" />
      </div>
      <hr class="opacity-30">
      <form class="flex flex-col gap-2">
        <FormUInput label="کد تخفیف" place-holder="کد تخفیف خود را وارد کنید" dir="ltr">
          <template #icon>
            <svg class="w-4 opacity-60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 15L15 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.4945 14.5H14.5035" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.49451 9.5H9.50349" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </FormUInput>
        <UButton class="mr-auto" size="xs" outline color="info">اعمال</UButton>
      </form>
      <hr class="opacity-30">
      <UButton @click="pay" w-full :is-loading="loading">
        تایید و پرداخت
      </UButton>
    </div>
  </div>
  <div class="flex flex-col items-center" v-else>
    <strong>هیچ محصولی در سبد خرید نیست!</strong>
  </div>
</div>
</template>

<script setup lang="ts">
import type {OrderDto} from "~/models/cart/orderDto";
import {GetPendingCart, PayOrder, RemoveOrderItem} from "~/services/cart.service";
import {ApiUrl} from "~/utilities/ApiUrls";
import {EItemType} from "~/models/cart/addToCartViewModel";

const {data,refresh} = await useAsyncData("GetCart",()=>GetPendingCart());
  const cart:Ref<OrderDto> = ref(data.value?.data!);

  const loading = ref(false);
  const router = useRouter();
  const pay = async ()=>{
    loading.value = true;
    const result = await PayOrder(cart.value.id,'https://ulearnit.ir/cart/error','https://ulearnit.ir/cart/success');
    if(result.isSuccess){
      location.href = result.data;
    }
    loading.value = false;
  }

  const toast = useToast();
  const deleteItem = async (itemId:number)=>{
    const result = await RemoveOrderItem({itemType:EItemType.Course,count:1,itemId});
    if(result.isSuccess){
      toast.showToast();
      await refresh();
      cart.value = data.value?.data!;
    }
  }
</script>