<template>
  <div class="overflow-hidden">
    <UHeader />
    <main>
      <slot></slot>
    </main>
    <UFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate:(title)=>{
    return title ? `${title} | یولرنیت` : 'یولرنیت - مرجع تخصصی برنامه نویسی و بازی سازی';
  }
})
</script>

<style>
body{
  @apply !bg-[#03060D] text-white !font-yekanBakh;
}
</style>