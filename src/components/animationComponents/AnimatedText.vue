<script setup>
import { inject, computed, useSlots } from 'vue'

const { animationClass } = inject('animationClass')

// CSS content needs a quoted string for content: var(--dynamic-content)
// Get slot content and sanitize for :before and :after in themed styles

const slots = useSlots()
const slotContent = slots.default?.() || []
const slotText = slotContent.map((node) => node.children).join('')
const cssVarContent = computed(() => {
  const txt = slotText || ''
  return `'${String(txt).replace(/'/g, "\\'")}'`
})
</script>

<template>
  <div
    class="animated-text"
    :class="animationClass"
    :style="{ '--dynamic-content': cssVarContent }"
  >
    <slot />
  </div>
</template>

<style scoped>
/* add imports for all text animations when created
   styles are based on the injected animationClass
*/
@import '../../styles/glitch.css';
</style>
