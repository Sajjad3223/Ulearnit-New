<template>
  <div role="progressbar" :style="{'--value': value}"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue:number
}>();

const value = ref(props.modelValue);

watch(
    ()=> props.modelValue,
    ()=> value.value = props.modelValue
)

</script>

<style scoped>
@property --percentage {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;

}

[role="progressbar"] {
  --percentage: var(--value);
  --primary: #93c5fd;
  --secondary: #0F172A;
  --size: 30px;

  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
}

[role="progressbar"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(var(--primary) calc(var(--percentage) * 1%), var(--secondary) 0);
  mask: radial-gradient(white 55%, transparent 0);
  mask-mode: alpha;
  -webkit-mask: radial-gradient(#0000 55%, #000 0);
  -webkit-mask-mode: alpha;
}

[role="progressbar"]::after {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
  font-size: calc(var(--size) / 4);
  color: var(--primary);
}
</style>