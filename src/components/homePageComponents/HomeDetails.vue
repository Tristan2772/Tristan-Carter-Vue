<script setup>
import SocialLinks from '../SocialLinks.vue'
</script>

<template>
  <section id="home">
    <img src="/tristan-carter.jpeg" alt="Tristan Carter Portrait Photo" />
    <div id="home-details">
      <h1>Hi, I'm Tristan<span> Carter.</span></h1>
      <h2>I am a <span id="change-text-animation"></span></h2>
      <div class="info">
        <p>
          I build custom solutions for small-medium businesses that help them grow their online
          presence.
        </p>
        <p>
          I provide everything from consulting to full-stack development, from advice to complete
          apps.
        </p>
      </div>
      <div class="social-links">
        <SocialLinks />
        <router-link to="/contact" class="contact-btn">Contact Me!</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '../../styles/glitch.css';
#home {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--lg-gap);
  background-color: var(--bg);
  img {
    aspect-ratio: 1/1;
    width: clamp(300px, 30vw, 450px);
    border-radius: 50%;
    box-shadow: var(--primary-shadow3);
  }
  #home-details {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 42px;
      span {
        color: var(--primary);
        font-family: var(--header-font);
      }
    }
    h2 {
      text-align: left;
      color: var(--text-color);
      padding-bottom: var(--sm-gap);
    }
    div.info {
      border-left: 2px solid var(--bg);
      p:first-of-type {
        padding-bottom: 5px;
      }
      p {
        padding-left: var(--sm-gap);
        line-height: var(--lh2);
      }
    }
  }
}
.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--md-gap);

  .contact-btn {
    height: auto;
    width: fit-content;
    padding: var(--sm-gap) var(--md-gap);
    color: black;
    border: var(--border);
    border-radius: 25px;
    transition: ease-out 350ms;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
  }
  .contact-btn:hover {
    scale: 1.1;
    box-shadow: var(--primary-shadow);
    transition: var(--transition);
  }
}
#change-text-animation::before {
  font-size: 1em;
  content: 'web developer';
  animation: glitchy-words 10s infinite;
  color: var(--primary);
}
@media screen and (max-width: 1000px) {
  #home {
    #home-details {
      h1 {
        font-size: var(--fs-lg);
      }
      h2 {
        font-size: var(--fs-md);
      }
    }
  }
}
@media screen and (max-width: 900px) {
  #home {
    flex-direction: column;
  }
}
@keyframes glitchy-words {
  0%,
  25% {
    content: 'Front-End Developer.';
  }
  26%,
  50% {
    content: 'Web Designer.';
  }
  51%,
  75% {
    content: 'UI / UX Developer.';
  }
  76%,
  100% {
    content: 'Software Engineer.';
  }
}
</style>
