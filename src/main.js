import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Handle redirect from 404.html for GitHub Pages SPA routing
const redirectPath = new URLSearchParams(window.location.search).get('redirect')
if (redirectPath) {
  // Wait for router to be ready before navigating
  router.isReady().then(() => {
    window.history.replaceState(null, null, window.location.pathname)
    router.push(redirectPath)
  })
}

// Register Service Worker for image caching
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/Tristan-Carter/sw.js').catch(() => {
    // Service Worker registration failed, app still works
  })
}
