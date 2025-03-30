<template>
  <div class="flex flex-col w-full gap-2">
    <label :for="name">{{ label }}</label>
    <div class="flex items-center relative">
      <label class="fileArea" :for="name">{{ file?.name ?? 'فایل خود را انتخاب کنید، یا بکشید و اینجا رها کنید' }}
        <input type="file" :name="name" :id="name" :required="required" @change="fileSelected" :accept="getAcceptedFileType">
      </label>
      <button @click.prevent="uploadFile"
              class="absolute p-2 min-w-10 grid place-items-center bg-indigo-400/20 text-indigo-300 rounded-lg aspect-square left-4 z-[2] hover:bg-indigo-400/40 duration-200 transition-colors">
        <svg v-if="!uploading" width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 9.50999L12 6.50999L15 9.50999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M12 6.50999V14.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span v-else-if="uploading && progress < 100">
          <URadialProgress v-model="progress"/>
        </span>
        <span v-else>
          <span v-if="!failed">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </span>
        <span v-else>
          <span class="grid place-items-center relative">
            <span class="absolute w-6 rounded-full h-0.5 bg-red-400 rotate-45"></span>
            <span class="absolute w-6 rounded-full h-0.5 bg-red-400 -rotate-45"></span>
          </span>
        </span>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

const props = withDefaults(defineProps<{
  modelValue: string,
  label: string,
  name: string,
  required?: boolean,
  placeHolder?: string | null | undefined,
  uploadUrl:string,
  type?:'image'|'video'|'document'|'compressed'|'audio'|'all'
}>(), {
  required: false,
  type: "all",
  dir: 'rtl'
})

const emits = defineEmits(['update:modelValue']);
const file = ref();
const uploading = ref(false);
const progress = ref(0);
const failed = ref(false);
const isUploaded = ref(false);

const fileSelected = (event) => {
  file.value = event.target.files[0];
}

const uploadFile = async () => {
  if(!file.value) return;

  failed.value = false;
  uploading.value = true;

  const formData = new FormData();
  formData.append('file', file.value);

  await axios.post(props.uploadUrl, formData, {
    onUploadProgress: (progressEvent) => {
      progress.value = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    },
  }).then((res) => {
    emits('update:modelValue',res.data.data);
    isUploaded.value = true;
  }).catch((err)=>{
    failed.value = true;
  }).finally(() => {
    //uploading.value = false;
  })
}

const getAcceptedFileType = computed(()=>{
  switch (props.type){
    case "image":
      return 'image/*'
    case "video":
      return 'video/*'
    case "document":
      return 'video/*'
    case "audio":
      return 'audio/*'
    case "compressed":
      return '.zip, .rar, .7zip'
    case "all":
      return undefined;
  }
})

defineExpose({
  uploadFile,
  isUploaded,
  selectedFile:file
})
</script>

<style scoped>
label {
  @apply text-xs opacity-60;
}

label.fileArea {
  @apply w-full relative flex items-center justify-center rounded-lg h-20 border-2 border-slate-700 bg-slate-900 border-dashed;
}

input {
  @apply opacity-0 absolute inset-0 cursor-pointer;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #93c5fd;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards
}

.checkmark {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #0F172A;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #93c5fd;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0
  }
}

@keyframes scale {
  0%, 100% {
    transform: none
  }
  50% {
    transform: scale3d(1.1, 1.1, 1)
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #93c5fd
  }
}
</style>