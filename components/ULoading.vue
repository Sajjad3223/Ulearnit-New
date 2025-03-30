<script setup lang="ts">
const props = withDefaults(
defineProps<{
  width?:string,
  strokeWidth?:number,
  strokeColor?:string
}>(),{
  width:'2em',
  strokeWidth:4,
  strokeColor:'#3189FC'
})
</script>

<template>
<span >
      <svg class="loading" :style="{width: width}" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50" :stroke="strokeColor" :stroke-width="strokeWidth"></circle>
      </svg>
    </span>
</template>

<style scoped>
svg.loading {
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

svg.loading circle {
  fill: none;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}
</style>