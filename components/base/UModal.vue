<template>
  <Transition enter-from-class="-translate-y-24 opacity-0" enter-to-class="translate-y-0 opacity-100" enter-active-class="transition-all duration-300"
              leave-to-class="-translate-y-24 opacity-0" leave-from-class="translate-y-0 opacity-100" leave-active-class="transition-all duration-300">
    <div v-if="modelValue" @click.self="closeModal" class="flex items-center justify-center fixed inset-0 bg-black/50 z-50 backdrop-blur-sm">
      <div class="modal bg-slate-900 p-4 rounded-xl drop-shadow-lg w-[90%] lg:w-[400px] xl:w-[500px]" :style="{width:props.width}">
        <div class="modal-header flex flex-col items-center ">
          <button class="hidden md:w-8 md:h-8 self-end md:grid place-items-center hover:bg-danger/10 text-danger rounded-lg opacity-50 transition-colors duration-200" @click="closeModal" v-if="!hideCloseButton">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 18L6 6M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <template v-if="$slots.header">
            <slot name="header" />
          </template>
          <template v-else>
            <div class="flex items-center w-full">
              <div class="flex-1 h-px rounded-full bg-gray-300"></div>
              <div class="flex flex-col items-center w-max px-4">
                <h5 class="md:text-xl font-thin">{{title}}</h5>
                <p class="font-light text-xs mt-1">{{subTitle}}</p>
              </div>
              <div class="flex-1 h-px rounded-full bg-gray-300"></div>
            </div>
          </template>
        </div>
        <div class="modal-body" dir="rtl">
          <slot></slot>
          <div class="actions items-center mt-2" v-if="$slots.actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

//@ts-ignore
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  },
  hideCloseButton:{
    type:Boolean,
    default:false
  },
  title:{
    type:String,
    required:false
  },
  subTitle:{
    type:String,
    required:false
  },
  width:{
    type:String,
    required:false
  }
})
const emit = defineEmits(['update:modelValue']);

const closeModal = ()=>{
  emit('update:modelValue',false);
}
</script>