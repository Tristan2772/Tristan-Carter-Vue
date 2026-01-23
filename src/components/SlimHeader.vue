<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AnimatedText from './animationComponents/AnimatedText.vue'
// import ThemeBtn from './ThemeBtn.vue'

const route = useRoute()
const activeBase = ref('')

const home = '/'
const services = '/services'
const projects = '/projects'
const contact = '/contact'
const about = '/about'

watchEffect(() => {
  const currentBase = route.path

  switch (true) {
    case currentBase === home || currentBase.startsWith(home + '/'):
      activeBase.value = home
      break
    case currentBase === services || currentBase.startsWith(services + '/'):
      activeBase.value = services
      break
    case currentBase === projects || currentBase.startsWith(projects + '/'):
      activeBase.value = projects
      break
    case currentBase === contact || currentBase.startsWith(contact + '/'):
      activeBase.value = contact
      break
    case currentBase === about || currentBase.startsWith(about + '/'):
      activeBase.value = about
      break

    default:
      activeBase.value = ''
      break
  }
})
</script>

<template>
  <header>
    <div class="container">
      <!-- logo -->
      <router-link to="/"><img src="/public/tc-logo.webp" alt="Tristan Carter Logo" /></router-link>

      <!-- links -->
      <nav>
        <router-link
          class="nav-link"
          to="/services"
          :class="{ active: activeBase === '/services' }"
        >
          <AnimatedText :class="{ active: activeBase === '/services' }">Services</AnimatedText>
        </router-link>
        <router-link
          class="nav-link"
          to="/projects"
          :class="{ active: activeBase === '/projects' }"
        >
          <AnimatedText :class="{ active: activeBase === '/projects' }">Projects</AnimatedText>
        </router-link>
        <!-- <router-link class="nav-link" to="/blog">
          <AnimatedText>Blog</AnimatedText>
        </router-link> -->
        <router-link class="nav-link" to="/contact" :class="{ active: activeBase === '/contact' }">
          <AnimatedText :class="{ active: activeBase === '/contact' }">Contact</AnimatedText>
        </router-link>
        <router-link class="nav-link" to="/about" :class="{ active: activeBase === '/about' }">
          <AnimatedText :class="{ active: activeBase === '/about' }">About</AnimatedText>
        </router-link>

        <!-- Hide on lower bandwidth devices or prefers reduced motion -->
        <!-- <ThemeBtn /> -->
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: var(--bg2);
  backdrop-filter: blur(10px);
  border-bottom: var(--border);
  z-index: 10;
  margin-bottom: 60px;

  .container {
    padding: var(--md-gap) 0 0;
    width: var(--content-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: var(--md-gap);

    a img {
      width: 50px;
      aspect-ratio: 1/1;
      transition: var(--transition);
    }
    a img:hover {
      scale: 1.05;
    }

    nav {
      flex-grow: 1;
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-end;
      justify-content: space-around;
      margin: 0 auto;

      .nav-link {
        margin: 0 var(--sm-gap) var(--sm-gap);
        font-size: var(--fs-sm);
        list-style: none;
        color: var(--txt-color);
        text-decoration: none;
        transition: var(--transition);
        cursor: pointer;
        background-color: transparent;
        border: none;
        border: 2px solid transparent;
      }
      .nav-link:hover {
        border-bottom: 2px solid var(--primary);
        color: var(--primary);
        scale: 1.05;
      }
      .nav-link.active {
        border-bottom: 2px solid var(--primary);
        color: var(--primary);
        scale: 1.05;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  header {
    .container {
      a img {
        margin-left: var(--md-gap);
      }
      nav {
        justify-content: flex-start;
        flex-wrap: wrap;

      }
    }
  }
}
</style>
