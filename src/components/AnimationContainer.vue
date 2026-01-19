<script setup>
import GlitchyTheme from './animationComponents/GlitchyTheme.vue'
import { ref, inject } from 'vue'

const animationContainer = ref(null)
const { animationClass } = inject('animationClass')
</script>

<!-- change animation-container class on button click in header, under themes tab -->

<template>
  <div id="animation-container" ref="animationContainer">
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
