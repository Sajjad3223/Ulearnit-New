<template>
  <div class="flex flex-col w-full gap-2">
    <label :for="name">{{label}}</label>
    <div class="bg-slate-900 w-full flex flex-row-reverse items-center gap-4 py-2 px-4 rounded-lg border-slate-800 border">
      <input type="number" name="hour" id="hour" class="flex-1 w-1/5 bg-transparent px-4 focus:outline-none text-center text-sm" min="0" v-model="timeData.hour">
      <label for="hour" class="text-xs opacity-50 font-light">ساعت</label>
      <span>:</span>
      <input type="number" name="minute" id="minute" class="flex-1 w-1/5 bg-transparent px-4 focus:outline-none text-center text-sm" min="0" max="59" v-model="timeData.minute">
      <label for="minute" class="text-xs opacity-50 font-light">دقیقه</label>
      <span>:</span>
      <input type="number" name="second" id="second" class="flex-1 w-1/5 bg-transparent px-4 focus:outline-none text-center text-sm" min="0" max="59" v-model="timeData.second">
      <label for="second" class="text-xs opacity-50 font-light">ثانیه</label>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue:string,
  label:string,
  name:string,
  required?:boolean,
  type?:'text' | 'number' | 'password' | 'email',
  placeHolder?:string | null | undefined,
  maxLength?:number | undefined | null,
  dir?:'rtl' | 'ltr'
}>(),{
  required:false,
  type:"text",
  dir:'rtl'
})

const emits = defineEmits(['update:modelValue']);

const initValue = props.modelValue.split(':');
const timeData = reactive({
  hour:Number(initValue[0] ?? 0),
  minute:Number(initValue[1] ?? 0),
  second:Number(initValue[2] ?? 0)
})

watch(
    timeData,
    ()=>{
      const hourString = timeData.hour < 10 ? `0${timeData.hour}` : `${timeData.hour}`;
      const minuteString = timeData.minute < 10 ? `0${timeData.minute}` : `${timeData.minute}`;
      const secondString = timeData.second < 10 ? `0${timeData.second}` : `${timeData.second}`;
      const timeString = `${hourString}:${minuteString}:${secondString}`;
      emits('update:modelValue',timeString);
    }
)

</script>

<style scoped>
label{
  @apply text-xs opacity-60;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>