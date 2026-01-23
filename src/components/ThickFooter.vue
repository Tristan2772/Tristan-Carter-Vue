<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const activeBase = ref('')

const home = '/'
const services = '/services'
const projects = '/projects'
const contact = '/contact'
const about = '/about'
const faq = '/faq'

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
    case currentBase === faq || currentBase.startsWith(faq + '/'):
      activeBase.value = faq
      break

    default:
      activeBase.value = ''
      break
  }
})
</script>

<template>
  <footer>
    <ul>
      <li><router-link to="/" :class="{ active: activeBase === '/' }">home</router-link></li>
      <li>
        <router-link to="/services" :class="{ active: activeBase === '/services' }"
          >services</router-link
        >
      </li>
      <li>
        <router-link to="/projects" :class="{ active: activeBase === '/projects' }"
          >projects</router-link
        >
      </li>
      <!-- <li><router-link to="/blog">blog</router-link></li> -->
      <li>
        <router-link to="/contact" :class="{ active: activeBase === '/contact' }"
          >contact</router-link
        >
      </li>
      <li>
        <router-link to="/about" :class="{ active: activeBase === '/about' }">about</router-link>
      </li>
      <li><router-link to="/faq" :class="{ active: activeBase === '/faq' }">faq</router-link></li>
    </ul>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 50dvh;
  background-color: var(--bg2);
  backdrop-filter: blur(10px);
  padding-top: var(--lg-gap);
  margin-top: 80px;
  border-top: var(--border);

  ul {
    width: var(--content-width);
    display: flex;
    flex-wrap: wrap;
    gap: var(--md-gap) var(--sm-gap);
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;

    li {
      min-width: 20%;
      list-style-type: none;
      text-align: center;
      a {
        color: var(--text-color);
        transition: var(--transition);
      }
      a.active,
      a:hover {
        scale: 1.1;
        color: var(--primary);
      }
    }
  }
}
</style>
