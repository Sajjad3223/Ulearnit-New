<script setup lang="ts">
withDefaults(defineProps<{
  size?:'xs'|'sm'|'base'|'lg'|'xl',
  color:'primary'|'danger'|'success'|'warning'|'dark'|'white'|'transparent'
}>(),{
  size:'xs',
  color:'primary'
})
</script>

<template>
  <span :class="['badge',`badge-${size}`,`badge-${color}`]">
    <slot></slot>
  </span>
</template>

<style scoped>
.badge{
  @apply px-2 py-1 rounded-lg w-max;
}
.badge-xs{
  @apply text-xs;
}
.badge-sm{
  @apply text-sm;
}
.badge-base{
  @apply text-base;
}
.badge-lg{
  @apply text-lg;
}
.badge-xl{
  @apply text-xl;
}
.badge-primary{
  @apply bg-indigo-400/20 text-indigo-400;
}
.badge-success{
  @apply bg-green-400/20 text-green-400;
}
.badge-danger{
  @apply bg-red-400/20 text-red-400;
}
</style>