<script setup lang="ts">
const props = defineProps<{
  price:number,
  noFree?:boolean
}>();
</script>

<template>
<div v-if="price > 0 || noFree" class="flex items-center gap-2">
  <strong class="text-lg">{{price.toLocaleString('fa-IR')}}</strong>
  <BaseTooman/>
</div>
<span v-else>
  رایگان!
</span>
</template>

<style scoped>

</style>