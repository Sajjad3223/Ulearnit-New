<script setup lang="ts">
  const collapsedHeight = ref('200px');
  const expandHeight = ref('700px');

  const isCollapsed = ref(true);

  const toggle = ()=>{
    isCollapsed.value = !isCollapsed.value;
  }
</script>

<template>
<div class=" flex flex-col items-center relative">
  <div :class="['relative transition-all duration-300',isCollapsed ? 'overflow-hidden' : 'overflow-auto']" :style="{maxHeight: isCollapsed ? collapsedHeight : expandHeight}">
    <slot></slot>
    <div v-if="isCollapsed" class="absolute inset-0 bg-gradient-to-t from-black/90 to-black/0 to-50%"></div>
  </div>
  <UButton outline color="secondary" @click="toggle" class="absolute -bottom-0 translate-y-full z-10">
    <span class="flex items-center gap-1">
      <span v-if="isCollapsed">بیشتر</span>
      <span v-else>کمتر</span>
      <svg :class="['w-4',{'rotate-180':!isCollapsed}]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </UButton>
</div>
</template>

<style scoped>

</style>