<script setup>
import GlitchyTheme from './animationComponents/GlitchyTheme.vue'
import { inject, ref } from 'vue'

const { animationClass } = inject('animationClass')

const reducedMotion = ref(window.matchMedia('(prefers-reduced-motion: reduce)'))
</script>

<!-- change animation-container class on button click in header, under themes tab -->

<template>
  <div v-show="reducedMotion.value" id="animation-container">
    <GlitchyTheme v-if="animationClass === 'glitch'" />
  </div>
</template>

<style scoped>
#animation-container {
  position: fixed;
  inset: 0;
  width: 99%;
  margin: 0 auto;
  height: 100dvh;
  pointer-events: none;
  z-index: -10;
}
</style>
