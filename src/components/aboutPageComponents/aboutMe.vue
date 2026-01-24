<script setup>
import SocialLinks from '../SocialLinks.vue'
</script>

<template>
  <section>
    <div class="about-container">
      <img src="/src/assets/tristan-carter.webp" alt="a dev" />

      <div class="details">
        <h2>About Me</h2>
        <p>
          I am a freelance full-stack web developer. I love building smooth, responsive,
          user-focused experiences with JavaScript. I got introduced to programming in high school,
          where I built small games in python and scratch, and have been building ever since. I am
          always learning and expanding my skills, from full-stack development to experimenting with
          the Unity game engine and even hands-on PC hardware upgrades. No matter the project, I
          bring a genuine passion for building clean and intuitive designs while implementing best
          practices and standards.
        </p>
        <SocialLinks />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: auto;
  background-color: var(--bg);
  div.about-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--lg-gap);
    img {
      align-self: center;
      width: clamp(300px, 30%, 500px);
      aspect-ratio: 1/1;
      border-radius: 15px;
    }
    div.details {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: var(--lh2);
      h2 {
        padding-bottom: var(--md-gap);
      }
    }
  }
}

@media screen and (max-width: 940px) {
  section {
    div.about-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 50vw;
      }
    }
  }
}
</style>
