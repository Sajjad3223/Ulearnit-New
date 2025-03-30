<template>
<div class="w-full flex items-center">
  <div class="flex-1 h-px bg-white/30"></div>
  <template v-if="$slots.default">
    <span class="mx-4 text-xs opacity-50">
      <slot></slot>
    </span>
  </template>
  <div class="flex-1 h-px bg-white/30"></div>
</div>
</template>