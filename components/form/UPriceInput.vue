<template>
  <div class="flex flex-col w-full gap-2">
    <div class="flex items-center gap-2">
      <label :for="name">{{label}}</label>
      <i class="text-xs opacity-70 text-red-400">{{errorMessage}}</i>
    </div>
    <div class="relative w-full flex items-center">
      <input type="text" :name="name" :id="name"  :placeholder="placeHolder" v-model="price" dir="ltr" :required="required" @input="valueChanged" :disabled="disabled">
      <span>تومان</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue:number,
  label:string,
  name:string,
  required?:boolean,
  //value:number,
  type?:'text' | 'number' | 'password' | 'email',
  placeHolder?:string | null | undefined,
  maxLength?:number | undefined | null,
  dir?:'rtl' | 'ltr',
  disabled?:boolean
}>(),{
  required:false,
  type:"text",
  dir:'rtl',
  disabled:false
})

const price = ref(props.modelValue.toLocaleString());

const emits = defineEmits(['update:modelValue']);

const name = toRef(props,'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});

const valueChanged = (e:any)=>{
  let priceValue = Number(e.target.value.replaceAll(',',''));
  if(isNaN(priceValue)) priceValue = 0;
  price.value = priceValue.toLocaleString();
  emits('update:modelValue',priceValue);
  e.target.value = priceValue;
  handleChange(e);
}
</script>

<style scoped>
label{
  @apply text-xs opacity-60;
}
input{
  @apply w-full bg-slate-900 rounded-lg border border-slate-800 py-2 pr-4 pl-16 focus:outline-none focus:border-slate-700 transition-colors duration-200
  placeholder-white/40 placeholder:text-sm placeholder:font-light disabled:text-white/50;
}
span{
  @apply absolute left-4 font-light opacity-70 pointer-events-none select-none;
}
</style>