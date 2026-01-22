<script setup>
import { BiLeftArrowAlt, BiRightArrowAlt } from "vue-icons-plus/bi";
import HomeProjectCard from './HomeProjectCard.vue'
import jsonData from '../../assets/projects.json'
const projectData = jsonData.projects
const featuredProjectData = projectData.filter((project) => project.featured)

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const currentIndex = ref(0)
const cards = ref([])
const maxIndex = computed(() => featuredProjectData.length - 1)

onMounted(() => {
  cards.value[currentIndex.value]?.$el.classList.add("active")
  scrollToCard(currentIndex.value)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  scrollToCard(currentIndex.value)
}

const scrollToCard = (index) => {
  animateScrollToCard(index, 600)
  setActiveCard(index)
}

function clearActiveCard(index) {
  const cardEl = cards.value[index]?.$el
  cardEl.classList.remove("active")

}
function setActiveCard(index) {
  const cardEl = cards.value[index]?.$el
  cardEl.classList.add("active")

}

function animateScrollToCard(index, duration = 600) {
  const cardEl = cards.value[index]?.$el
  const trackEl = document.querySelector('.carousel-track')
  if (!cardEl || !trackEl) return

  const cardRect = cardEl.getBoundingClientRect()
  const trackRect = trackEl.getBoundingClientRect()

  const currentScroll = trackEl.scrollLeft
  const trackOffset = cardRect.left - trackRect.left
  const targetScroll = currentScroll + trackOffset - trackRect.width / 2 + cardRect.width / 2

  const startTime = performance.now()

  function animate(time) {
    const elapsed = time - startTime
    const progress = Math.min(elapsed / duration, 1)
    // ---------- animation ease-in-out -------------
    const ease =
      progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
    trackEl.scrollLeft = currentScroll + (targetScroll - currentScroll) * ease
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

// ----------------------------fix clear active function
// ----------------------------fix clear active function
// ----------------------------fix clear active function


const previousSlide = () => {
  clearActiveCard(currentIndex.value)
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : maxIndex.value
  scrollToCard(currentIndex.value)
}

const nextSlide = () => {
  clearActiveCard(currentIndex.value)
  currentIndex.value = currentIndex.value < maxIndex.value ? currentIndex.value + 1 : 0
  scrollToCard(currentIndex.value)
}
</script>

<template>
  <section id="home-projects">
    <h2>Featured Projects</h2>
    <div class="carousel-container" >
      <button type="button" @click="previousSlide" :disabled="currentIndex == 0"><BiLeftArrowAlt /></button>
      <div class="carousel-track" >
        <div class="carousel">
          <HomeProjectCard
            v-for="(projects, index) in featuredProjectData"
            :key="projects.id"
            :ref="(el) => (cards[index] = el)"
            :id="projects.id"
            :title="projects.title"
            :image="projects.image"
            :smallDesc="projects.smallDesc"
            :about="projects.about"
            :link1="projects.link1"
            :link2="projects.link2"
          ></HomeProjectCard>
        </div>
      </div>
      <button type="button" :disabled="currentIndex == maxIndex" @click="nextSlide"><BiRightArrowAlt /></button>
    </div>
    <router-link to="/projects" class="int-link">See All Projects <BiRightArrowAlt /></router-link>
  </section>
</template>

<style scoped>
#home-projects {
  background-color: var(--bg);

  .carousel-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
      min-width: 50px;
      max-width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: var(--border);
      background-color: transparent;
      color: var(--primary);
      font-weight: bold;
      cursor: pointer;
      transition: box-shadow var(--transition);
    }
    button:hover {
      box-shadow: var(--primary-shadow);
    }
    button:disabled {
      color: var(--accent);
      box-shadow: none;
      border-color: var(--accent);
      cursor: not-allowed;
    }
    .carousel-track {
      overflow-x: hidden;
      padding: 0 200px;

      /* ------------image mask----------- */
      -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black 20%,
        black 80%,
        black 20%,
        transparent
      );
      -webkit-mask-composite: destination-in;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: 100% 100%;
      mask-image: linear-gradient(
        to right,
        transparent,
        black 20%,
        black 80%,
        black 20%,
        transparent
      );
      mask-repeat: no-repeat;
      mask-composite: intersect;
      mask-size: 100% 100%;

      /* ---------carousel ---------------- */
      .carousel {
        width: max-content;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        gap: var(--xl-gap);
        scroll-snap-type: x mandatory;
      }
    }
    .carousel-track::-webkit-scrollbar {
      display: none;
    }
  }

  a.int-link {
    margin: var(--md-gap) var(--md-gap) 0 auto;
    display: block;
    width: fit-content;
    text-align: right;
    color: var(--primary);
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 3px;
  }
  a.int-link:hover {
    scale: 1.1;
  }
}

@media screen and (max-width: 1100px){
  #home-projects {
    padding: var(--lg-gap) var(--sm-gap);
    .carousel-container {
      .carousel-track {
        -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        black 10%,
        transparent
      );
      -webkit-mask-composite: destination-in;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: 100% 100%;
      mask-image: linear-gradient(
        to right,
        transparent,
        black 10%,
        black 90%,
        black 10%,
        transparent
      );
      mask-repeat: no-repeat;
      mask-composite: intersect;
      mask-size: 100% 100%;
      }
    }
  }
}
@media screen and (max-width: 550px){
  #home-projects {
    padding: var(--lg-gap) 0;

    .carousel-container {
      .carousel-track {
        -webkit-mask-image: none;
        mask-image: none;
      }
    }
  }
}
@media screen and (max-width:425px) {
  #home-projects {

    .carousel-container {
      button {
        min-width: 30px;
        height: 30px;
      }
    }
  }
}

</style>
