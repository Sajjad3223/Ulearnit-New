<template>
<div class="flex flex-col gap-1">
  <label for="tag" class="text-xs opacity-60">{{label}}</label>
  <div class="bg-slate-900 rounded-lg border h-max border-slate-800 flex flex-wrap gap-2 py-2 px-4">
    <div v-if="tags.length > 0" class="flex flex-wrap gap-2">
      <div v-for="(tag,i) in tags" class="flex items-center gap-1 bg-slate-800 rounded border border-slate-700 px-2">
        <span class="text-sm">{{ tag }}</span>
        <button @click="removeTag(i)">
          <i class="pi pi-times text-[10px] text-red-300 bg-red-300/20 p-1 rounded-full"></i>
        </button>
      </div>
    </div>
    <input type="text" id="tag" name="tag" v-model="tagInput" @input="onChange" @keyup="handleKeyUp" class="flex-1 bg-transparent focus:outline-none text-sm placeholder-white/40 placeholder:text-sm placeholder:font-light" :placeholder="placeholder">
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue:string,
  label?:string,
  placeholder?:string
}>()
const emits = defineEmits(['update:modelValue'])

const tags = ref<string[]>([]);
const tagInput = ref('');

const handleKeyUp = (e:Event)=>{
  if((e as KeyboardEvent).key === ' ' && tagInput.value.trim() !== '') {
    if(!tags.value.includes(tagInput.value))
      tags.value.push(tagInput.value.trim());
    tagInput.value = '';
    emits('update:modelValue',tags.value.join(','));
  }
  if((e as KeyboardEvent).key === 'Backspace' && tagInput.value === '' && tags.value.length > 0){
    tags.value.pop();
    emits('update:modelValue',tags.value.join(','));
  }
}

const onChange = (e)=>{
    e.target.value = e.target.value.replace(/\s/g, "");
}

const removeTag = (index:number)=>{
  tags.value.splice(index,1)
  emits('update:modelValue',tags.value.join(','));
}
</script>