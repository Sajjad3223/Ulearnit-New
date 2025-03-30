<script setup lang="ts">
import {ToastType} from "~/composables/useToast";
import {useToastStore} from "~/stores/toast.store";

const toastStore = useToastStore();
</script>

<template>
  <div class="pointer-events-none">
    <TransitionGroup name="toast" tag="ul" class="flex flex-col gap-2">
      <li v-for="toast in toastStore.messages" :key="toast.id" class="flex items-center p-4 bg-white text-black drop-shadow-md border rounded-xl md:min-w-[330px] gap-4 pointer-events-auto">
        <svg v-if="toast.type == ToastType.success" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4185 3.43774H9.58223C5.80598 3.43774 3.43848 6.11149 3.43848 9.89524V20.1052C3.43848 23.889 5.79473 26.5627 9.58223 26.5627H20.4172C24.206 26.5627 26.5635 23.889 26.5635 20.1052V9.89524C26.5635 6.11149 24.206 3.43774 20.4185 3.43774Z" stroke="#3ACC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.5508 15.0002L13.5183 17.9664L19.4508 12.0339" stroke="#3ACC3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="toast.type == ToastType.info" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.43774C21.385 3.43774 26.5625 8.61399 26.5625 15.0002C26.5625 21.3852 21.385 26.5627 15 26.5627C8.61375 26.5627 3.4375 21.3852 3.4375 15.0002C3.4375 8.61399 8.61375 3.43774 15 3.43774Z" stroke="#2783FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.9941 10.2554V15.7791" stroke="#2783FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.9938 19.7454H15.0062" stroke="#2783FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="toast.type == ToastType.error" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5825 26.5623L20.4188 26.5623C24.195 26.5623 26.5625 23.8885 26.5625 20.1048L26.5625 9.89476C26.5625 6.11101 24.2063 3.43726 20.4188 3.43726L9.58375 3.43726C5.795 3.43726 3.4375 6.11101 3.4375 9.89476L3.4375 20.1048C3.4375 23.8885 5.795 26.5623 9.5825 26.5623Z" stroke="#EF2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.0068 9.99975V14.9998" stroke="#EF2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.0131 19.7444H15.0006" stroke="#EF2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="toast.type == ToastType.warning" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01761 25.5459H23.9964C25.9739 25.5459 27.2151 23.4084 26.2326 21.6909L17.2501 5.98469C16.2614 4.25594 13.7689 4.25469 12.7789 5.98344L3.78136 21.6897C2.79886 23.4072 4.03886 25.5459 6.01761 25.5459Z" stroke="#FFD249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.0029 16.7686V12.8936" stroke="#FFD249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.9938 20.625H15.0062" stroke="#FFD249" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <div class="flex flex-col gap-2">
          <span class="text-xs font-light opacity-60">{{ toast.message }}</span>
          <span class="text-xs text-[#3ACC3E] font-light hidden">ویرایش</span>
          <div class="flex items-center gap-2 font-light text-xs" v-if="toast.type == ToastType.warning">
            <button class="px-3 py-1 min-w-14 text-center flex items-center justify-center rounded-md bg-danger/20 text-danger hover:bg-red-500/80 hover:text-white transition-colors duration-300" @click="toastStore.callHandler(toast.id)">تایید</button>
            <button class="px-3 py-1 min-w-14 text-center flex items-center justify-center rounded-md border border-transparent hover:border-black/10 transition-colors duration-300" @click="toastStore.removeToast(toast.id)">انصراف</button>
          </div>
        </div>
        <button class="mr-auto self-start opacity-30" @click="toastStore.removeToast(toast.id)">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.59396 1.39331L1.4043 7.58298" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5962 7.58675L1.40137 1.39062" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-move,
.toast-enter-active,
.toast-leave-active{
  transition: all 0.5s ease;
}
.toast-enter-from,
.toast-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
.toast-leave-active {
  position: absolute;
}
</style>