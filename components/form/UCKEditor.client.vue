<template>
  <div class="col-span-full ckeditor-holder">
    <label class="pb-1 block dark:text-white">{{title}}</label>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" tag-name="textarea" @change="$emit('update:modelValue',editorData)">
      <slot></slot>
    </ckeditor>
    <span class="text-sm text-red-600 dark:text-red-400" v-if="isRequired && (editorData === '')">وارد کردن {{title}} الزامی است</span>
  </div>
</template>


<script>
import {Ckeditor} from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/fa';

let selectedImage = '';
export default {
  name: 'app',
  props:{
    isRequired:{
      type:Boolean,
      default:true,
    },
    title:{
      type:String,
      required:false,
    },
    modelValue:{
      type:String,
      required:true
    }
  },
  emits:['update:modelValue'],
  components:{
    ckeditor: Ckeditor,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        language:'fa',
      },
    };
  },
  updated() {
    this.$emit('update:modelValue',this.editorData);
  },
  methods:{
    setContent(content){
      this.editorData = content;
    },
  },
  expose:['setContent']
}

</script>

<style>
:root{
  --ck-color-base-background: #0f172a !important;
  --ck-color-button-default-hover-background: #1e293b !important;
  --ck-color-base-foreground: #fff !important;
  --ck-color-text: #fff !important;
  --ck-color-base-text: #fff !important;
}
.ck-content{
  padding: 0 2em !important;
  height: 200px;
}
.ck-content ul,.ck-content ol{
  color: black;
  padding: 0 1.5rem !important;
}
.ck-content h1{
  @apply text-6xl;
}
.ck-content h2{
  @apply text-5xl;
}
.ck-content h3{
  @apply text-4xl;
}
.ck-content h4{
  @apply text-3xl;
}
</style>