<template>
  <div>
    <div class="w-full flex items-center justify-between">
      <strong>اعلانات</strong>
      <UButton outline color="info" @click="seenAll" :is-loading="loading" v-if="notifications?.some(n=>!n.isSeen)">
        <span class="flex gap-2">
          <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.70711 11.7782C8.31658 11.3877 7.68342 11.3877 7.29289 11.7782C6.90237 12.1688 6.90237 12.8019 7.29289 13.1925L8.70711 11.7782ZM12.2426 16.728L11.5355 17.4351C11.7231 17.6226 11.9774 17.728 12.2427 17.728C12.5079 17.728 12.7622 17.6226 12.9498 17.4351L12.2426 16.728ZM21.4346 8.94976C21.8251 8.55923 21.8251 7.92606 21.4346 7.53555C21.044 7.14504 20.4109 7.14505 20.0203 7.53559L21.4346 8.94976ZM3.70711 11.7782C3.31658 11.3877 2.68342 11.3877 2.29289 11.7782C1.90237 12.1688 1.90237 12.8019 2.29289 13.1925L3.70711 11.7782ZM6.53553 17.4351C6.92606 17.8256 7.55922 17.8256 7.94975 17.4351C8.34027 17.0446 8.34027 16.4114 7.94975 16.0209L6.53553 17.4351ZM16.4382 8.94656C16.827 8.55426 16.8241 7.92111 16.4318 7.53236C16.0395 7.14362 15.4064 7.1465 15.0176 7.53879L16.4382 8.94656ZM11.7897 10.7962C11.4009 11.1885 11.4038 11.8217 11.7961 12.2104C12.1884 12.5991 12.8216 12.5963 13.2103 12.204L11.7897 10.7962ZM7.29289 13.1925L11.5355 17.4351L12.9497 16.0209L8.70711 11.7782L7.29289 13.1925ZM12.9498 17.4351L21.4346 8.94976L20.0203 7.53559L11.5355 16.0209L12.9498 17.4351ZM2.29289 13.1925L6.53553 17.4351L7.94975 16.0209L3.70711 11.7782L2.29289 13.1925ZM15.0176 7.53879L11.7897 10.7962L13.2103 12.204L16.4382 8.94656L15.0176 7.53879Z" fill="currentColor"/>
          </svg>
          <span>همه را خواندم</span>
        </span>
      </UButton>
    </div>
    <base-divider class="my-4"/>

    <ul class="flex flex-col w-full gap-4">
        <li v-for="n in notifications" :key="n.id">
          <div :class="[n.isSeen ? 'seen-notif' : 'unseen-notif']">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9945 16H12.0035" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="flex flex-col gap-2">
              <strong>{{n.title}}</strong>
              <p>
                {{n.text}}
              </p>
            </div>
          </div>
        </li>
      </ul>

  </div>
</template>

<script setup lang="ts">
import type {NotificationDto} from "~/models/notification/notificationDto";
import {GetUserNotifications, SeenNotifications} from "~/services/notification.service";

definePageMeta({
  layout:'profile'
})

const notifications:Ref<NotificationDto[]> = ref([]);

onMounted(async ()=>{
  await getData();
})

const loading = ref(false);
const getData = async ()=>{
  loading.value = true;
  const result = await GetUserNotifications({pageId:1,take:10});
  if(result.isSuccess){
    notifications.value = result.data.data ?? [];
  }
  loading.value = false;
}

const seenAll = async ()=>{
  loading.value = true;
  const result = await SeenNotifications();
  if(result.isSuccess){
    await getData();
  }
  loading.value = false
}
</script>

<style>
.seen-notif{
  @apply border border-white/30 p-4 rounded-md bg-transparent w-full flex gap-3 items-start text-white/60;
}
.unseen-notif{
  @apply border border-indigo-500 p-4 rounded-md bg-indigo-500/10 w-full flex gap-3 items-start text-indigo-300;
}
</style>