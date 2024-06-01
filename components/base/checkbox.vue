<template>
  <div class="relative grid place-items-center">
    <input type="checkbox" name="" id="">
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute pointer-events-none">
      <path d="M1 4L3.99647 7L10 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
input[type=checkbox]{
  appearance: none;
  @apply outline outline-1 outline-[#3C42E7] w-4 h-4 rounded bg-transparent transition-all duration-200;
}

input[type=checkbox]:checked{
  @apply bg-[#3C42E7];
  box-shadow: 0 0 10px rgba(60, 66, 231, 0.5);
}
input[type=checkbox] + svg {
  @apply opacity-0 transition-all duration-200 scale-0;
}
input[type=checkbox]:checked + svg {
  @apply opacity-100 scale-100;
}

</style>