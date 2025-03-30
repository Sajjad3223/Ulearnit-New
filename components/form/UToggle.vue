<template>
  <div class="flex flex-col gap-1">
    <span class="opacity-0">{{label}}</span>
    <div class="flex items-center gap-2">
      <span class="label">{{label}}</span>
      <label class="switch">
        <input type="checkbox" v-model="checked">
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue:boolean,
  label:string
}>()
const emits = defineEmits(['update:modelValue']);

const checked = ref(props.modelValue);

watch(
    checked,
    ()=>emits('update:modelValue',checked.value)
)

</script>

<style scoped>
span.label{
  @apply text-xs opacity-60;
}
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @apply bg-slate-900 border border-slate-800;
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.27em;
  bottom: 0.25em;
  background-color: #adb5bd;
  transition: .4s;
}

input:checked + .slider {
  background-color: #007bff;
  border: 1px solid #007bff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #007bff;
}

input:checked + .slider:before {
  transform: translateX(1.9em);
  background-color: #fff;
}
</style>