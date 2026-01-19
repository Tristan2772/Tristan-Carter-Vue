<script setup>
import { RouterView } from 'vue-router'
import { ref, provide } from 'vue'
import SlimHeader from './components/SlimHeader.vue'
import ThickFooter from './components/ThickFooter.vue'

import AnimationContainer from './components/AnimationContainer.vue'
const animationClass = ref('glitch')

function updateClass(newClass) {
  animationClass.value = newClass
}

provide('animationClass', { animationClass, updateClass })
</script>

<template>
  <SlimHeader />
  <Transition name="slide-fade">
    <RouterView />
  </Transition>

  <ThickFooter />
  <AnimationContainer />
</template>

<style scoped>
@import './assets/base.css';

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from {
  transform: translateX(30px);
  opacity: 0;
}
</style>
