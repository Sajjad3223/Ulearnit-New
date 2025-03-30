<template>
  <button :class="[
      'btn',
      `size-${size}`,
      wFull ? 'w-full' : 'w-max',
      !outline ? `button-${color}` : `button-outline-${color}`
      ]" :disabled="disabled || isLoading">
    <span v-if="!leftIcon">
      <slot v-if="!isLoading" name="icon"></slot>
    </span>
    <span v-if="!isLoading">
      <slot></slot>
    </span>
    <span v-if="leftIcon">
      <slot v-if="!isLoading" name="icon"></slot>
    </span>
    <ULoading width="2.5em" :stroke-width="4" stroke-color="currentColor" v-if="isLoading" />
  </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  wFull?:boolean,
  disabled?:boolean,
  isLoading?:boolean,
  size?:'xs' | 'sm' | 'base' | 'lg' | 'xl',
  outline?:boolean,
  color?:'primary' | 'warning' | 'danger' | 'secondary' | 'info' | 'dark' | 'white' | 'transparent',
  leftIcon?:boolean
}>(),{
  wFull:false,
  disabled:false,
  isLoading:false,
  size:'base',
  outline:false,
  color:'primary',
  leftIcon:false
})
</script>

<style scoped>
.btn{
  @apply transition-all duration-300
  flex items-center justify-center gap-2 px-6 py-2 rounded-lg disabled:bg-indigo-500/10 disabled:text-white/40 disabled:cursor-not-allowed
  outline-none focus:outline-none border border-transparent focus:border-white/50;
}
.btn:hover, .btn:focus{
  box-shadow: 0 0 15px 0 #402EBD;
}
.button-primary{
  @apply bg-[#402EBD] text-white;
}
.button-warning{
  @apply bg-yellow-500 text-black;
}
.button-danger{
  @apply bg-red-400 text-white;
}
.button-info{
  @apply bg-blue-500 text-white;
}
.button-secondary{
  @apply bg-gray-500 text-white;
}
.button-dark{
  @apply bg-slate-900 text-white;
}
.button-white{
  @apply bg-white text-black;
}
.button-transparent{
  @apply bg-transparent text-transparent;
}

.button-outline-primary{
  @apply border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white;
}
.button-outline-warning{
  @apply border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black;
}
.button-outline-danger{
  @apply border border-red-400 text-red-400 hover:bg-red-400 hover:text-white;
}
.button-outline-info{
  @apply border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white;
}
.button-outline-secondary{
  @apply border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white;
}
.button-outline-dark{
  @apply border border-slate-900 text-white hover:bg-slate-900 hover:text-white;
}
.button-outline-white{
  @apply border border-white text-white hover:bg-white hover:text-black;
}
.button-outline-transparent{
  @apply border border-transparent text-white;
}

.size-xs{
  @apply text-xs;
}
.size-sm{
  @apply text-sm;
}
.size-base{
  @apply text-base;
}
.size-lg{
  @apply text-lg;
}
.size-xl{
  @apply text-xl;
}
</style>