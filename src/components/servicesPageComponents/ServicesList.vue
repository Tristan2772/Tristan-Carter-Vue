<script setup>
import { onBeforeUnmount, ref } from "vue";
import jsonData from "../../assets/services.json";
const servicesList = jsonData.services
const activeCard = ref(null)

onBeforeUnmount(() => {
  activeCard.value = null
})
</script>

<template>
  <div class="services-container">
    <div v-for="(service, index) in servicesList" :key="index" class="service-card" @click="activeCard = index" :class="{active: activeCard === index}">
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--lg-gap);
}

.service-card {
  padding: var(--sm-gap);
  border: 2px solid var(--accent);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: var(--sm-gap);
  background-color: var(--body-bg);
  pointer-events: all;

  transition:
    border var(--transition),
    scale var(--transition);
  h3 {
    padding-bottom: var(--sm-gap);
    text-align: center;
    transition: var(--transition);
  }

  p {
    padding: 0 var(--md-gap);
  }
}

.service-card:hover,
.service-card.active {
  border: var(--border);
  scale: 1.05;
  animation: shine 0.2s linear;

  h3 {
    color: var(--primary);
  }
}

.service-card:nth-child(1) {
  transform-origin: left top;
}
.service-card:nth-child(2) {
  transform-origin: right top;
}
.service-card:nth-child(3) {
  transform-origin: left bottom;
}
.service-card:nth-child(4) {
  transform-origin: right bottom;
}

@media screen and (max-width: 850px) {
  .services-container {
    display: flex;
    flex-direction: column;
    gap: var(--lg-gap);
    text-align: left;
  }
  .service-card {
    h3 {
      padding: 0 var(--sm-gap);
      padding-bottom: 0px;
      text-align: left;
    }

    p {
      text-align: left;
    }
  }
  .service-card:nth-child(1),
  .service-card:nth-child(2),
  .service-card:nth-child(3),
  .service-card:nth-child(4) {
    transform-origin: center bottom;
  }
}
</style>
