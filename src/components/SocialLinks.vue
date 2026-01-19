<script setup>
import {
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoMeta,
  BiLogoLinkedinSquare,
} from 'vue-icons-plus/bi'
</script>

<template>
  <div class="links">
    <a href="https://www.linkedin.com/in/tristan27/" target="_blank">
      <BiLogoLinkedinSquare size="24" />
    </a>
    <a href="https://github.com/Tristan2772" target="_blank">
      <BiLogoGithub size="24" />
    </a>
    <a href="https://www.instagram.com/technique.cne/" target="_blank">
      <BiLogoInstagramAlt size="24" />
    </a>
    <a href="https://www.facebook.com/TechNique.CnE/" target="_blank">
      <BiLogoMeta size="24" />
    </a>
  </div>
</template>

<style scoped>
.links {
  padding-top: var(--md-gap);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--md-gap);

  a {
    width: 50px;
    aspect-ratio: 1/1;
    border: var(--border);
    border-radius: 50%;
    transition: ease-out 350ms;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
  }
  a:hover {
    scale: 1.1;
    color: black;
    background-color: var(--primary);
    box-shadow: var(--primary-shadow);
    transition: var(--transition);
  }
}
</style>
