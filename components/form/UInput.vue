<template>
  <div class="flex flex-col w-full gap-2">
    <div class="flex items-center gap-2">
      <slot name="icon"></slot>
      <label :for="name">{{label}}</label>
      <span class="text-xs opacity-70 text-red-400">{{errorMessage}}</span>
    </div>
    <input v-if="!multiline"
        :class="[{'!border-red-500/50':errorMessage}]"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeHolder"
        :required="required"
        :maxlength="maxLength"
        :dir="dir"
        :value="inputValue ?? modelValue"
        @input="valueChanged"
        @blur="handleBlur"
    >
    <textarea v-else
        :class="[{'!border-red-500/50':errorMessage}]"
        :name="name"
        :id="name"
        :placeholder="placeHolder"
        :required="required"
        :maxlength="maxLength"
        :dir="dir"
        :value="inputValue ?? modelValue"
        @input="valueChanged"
        @blur="handleBlur"
        rows="4"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue:string,
  label:string,
  name:string,
  required?:boolean,
  type?:'text' | 'number' | 'password' | 'email' | 'hidden',
  placeHolder?:string | null | undefined,
  maxLength?:number | undefined | null,
  dir?:'rtl' | 'ltr',
  value?:string,
  multiline?:boolean
}>(),{
  required:false,
  type:"text",
  dir:'rtl',
  multiline:false,
})

const emits = defineEmits(['update:modelValue']);

const name = toRef(props,'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});

const valueChanged = (e:any)=>{
  handleChange(e);
  emits('update:modelValue',e.target.value);
}

</script>

<style scoped>
label{
  @apply text-xs opacity-60;
}
input,textarea{
  @apply bg-slate-900 rounded-lg border h-full border-slate-800 py-2 px-4 focus:outline-none focus:border-slate-700 transition-colors duration-200
  placeholder-white/40 placeholder:text-sm placeholder:font-light;
}
</style>