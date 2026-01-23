<script setup>
import { BiLinkExternal, BiFolderOpen } from 'vue-icons-plus/bi'
defineProps(['id', 'title', 'image', 'smallDesc', 'about', 'link1', 'link2'])
</script>

<template>
  <div class="project-card">
    <img loading="lazy" :src="image" :alt="smallDesc" />
    <h3>{{ title }}</h3>
    <p>{{ about }}</p>
    <div class="links">
      <a :href="link1" target="_blank">Website <BiLinkExternal size="24" /> </a>
      <a :href="link2" target="_blank">Repo <BiFolderOpen size="24" /> </a>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  width: 65%;
  max-width: 580px;
  padding-top: var(--md-gap);
  border: 2px solid var(--primary);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  transition: background-color var(--transition);

  h3 {
    text-align: center;
  }
  img {
    display: block;
    aspect-ratio: 2/1;
    width: 70%;
    margin: var(--md-gap) auto;
    border-radius: 15px;
  }
  p {
    text-align: center;
    padding: var(--sm-gap);
    line-height: var(--lh2);
  }
  div.links {
    padding-right: var(--md-gap);
    padding-bottom: var(--sm-gap);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: var(--sm-gap);
    a {
      padding-left: var(--sm-gap);
      color: var(--primary);
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3px;
      transition: scale var(--transition);
    }
    a:nth-child(2) {
      color: var(--secondary);
    }
    a:hover {
      scale: 1.1;
    }
  }
}

.project-card.active {
  background-color: var(--body-bg);
  animation: shine 0.2s linear 0.6s;
}

@media screen and (max-width: 850px) {
  .project-card {
    max-width: 400px;
  }
}
@media screen and (max-width: 650px) {
  .project-card {
    max-width: 350px;
  }
}
@media screen and (max-width: 475px) {
  .project-card {
    max-width: 300px;

    img {
      width: 80%;
    }
    p,
    div.links {
      font-size: var(--fs-xs);
    }
  }
}

@media screen and (max-width: 400px) {
.project-card {
  scale: .9;
}
}
@media screen and (max-width: 370px) {
.project-card {
  scale: .85;
}
}

</style>
