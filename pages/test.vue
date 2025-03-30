<template>
  <ClientOnly>
    <div class="relative h-svh w-full overflow-hidden rounded-lg border bg-background">
      <ParticlesBg
          class="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          :square-size="4"
          :grid-gap="6"
          color="#60A5FA"
          :max-opacity="0.5"
          :flicker-chance="0.1"
          :width="800"
          :height="800"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({
  layout:false
})
</script>