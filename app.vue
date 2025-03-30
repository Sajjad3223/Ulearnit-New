<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
<!--  <coming-soon />-->

  <Transition name="slideFade">
    <div class="fixed bg-black/10 backdrop-blur-sm inset-0 z-40 grid place-items-center" v-if="authStore.showAuthModal" @click.self="authStore.showAuthModal = false">
      <div class="grid place-items-center bg-[#090D16] text-white rounded-xl w-1/3 h-3/4 drop-shadow-lg border border-white/30">
        <auth-container />
      </div>
    </div>
  </Transition>

  <ClientOnly>
    <UToast class="fixed z-40 inset-0 grid items-end justify-start p-5" />
  </ClientOnly>

</template>

<script setup lang="ts">
import 'primeicons/primeicons.css'
import {useAuthStore} from "~/stores/authStore";

const authStore = useAuthStore();
const accountStore = useAccountStore();
onMounted(async ()=>{
  await accountStore.initData();
})
</script>

<style>
html{
  scroll-behavior: smooth;
  scroll-snap-align: center;
}

.container{
  @apply px-4 lg:px-0
}

.slideFade-enter-active,
.slideFade-leave-active{
  @apply transition-all duration-300;
}

.slideFade-enter-from,
.slideFade-leave-to{
  @apply scale-75 opacity-0;
}



</style>
