<template>
  <div :class="[!transparent ? 'cont' : 'transparent-cont']">
    <div class="tabs" dir="ltr">
      <template v-for="(item,index) in Object.keys(options).filter(i=>isNaN(i)).map((v,i)=>{
        return {
          title:v.replaceAll('_',' '),
          value:i
        }
      })">
        <input type="radio" :id="`${name}-${item.title}-${index + 1}`" :value="item.value" :name="name" v-model="value">
        <label class="tab" :for="`${name}-${item.title}-${index + 1}`">{{ item.title }}</label>
      </template>
      <span class="glider"></span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  options:Object,
  modelValue:number,
  name:string,
  transparent?:boolean
}>();
const emits = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);
watch(value,()=>emits('update:modelValue',value));

</script>

<style scoped>
.cont {
  @apply w-full flex bg-[#010205] text-white p-2 rounded-xl items-center border border-white/30;
}
.transparent-cont{
  @apply w-max flex text-white p-2 rounded-xl items-center;
}
.cont .tabs {
  @apply w-full flex relative items-center;
}
.transparent-cont .tabs {
  @apply w-full flex items-center;
}

.tabs * {
  z-index: 2;
}

input[type="radio"] {
  display: none;
}

.cont .tab {
  @apply flex items-center justify-center h-10 text-sm text-white text-center rounded-lg cursor-pointer transition-colors duration-200 w-1/3;
}
.transparent-cont .tab {
  @apply flex items-center justify-center h-10 text-sm text-white text-center rounded-lg cursor-pointer transition-colors duration-200 w-[100px];
}

.cont input[type="radio"]:checked + label {
  color: #fff ;
}
.transparent-cont input[type="radio"]:checked + label {
  @apply text-[#046BEC];
}

input[type="radio"]:nth-of-type(1):checked ~ .glider {
  transform: translateX(0);
}

input[type="radio"]:nth-of-type(2):checked ~ .glider {
  transform: translateX(100%);
}

input[type="radio"]:nth-of-type(3):checked ~ .glider {
  transform: translateX(200%);
}

.cont .glider {
  @apply absolute flex w-1/3 h-10 bg-indigo-500 z-[1] rounded-lg transition-all duration-300;
}
.transparent-cont .glider {
  @apply absolute flex w-[100px] h-10 bg-[#046BEC]/20 z-[1] rounded-lg transition-all duration-300;
}


</style>