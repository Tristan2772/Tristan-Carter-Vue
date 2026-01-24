<script setup>
import SocialLinks from '../SocialLinks.vue'
</script>

<template>
  <section id="home">
    <img src="/src/assets/tristan-carter.webp" alt="Tristan Carter Portrait Photo" />
    <div id="home-details">
      <h1>Hi, I'm Tristan<span> Carter.</span></h1>
      <h2>I am a <span id="change-text-animation">Full-Stack</span> developer.</h2>
      <div class="info">
        <p>
          I build custom solutions for small-medium businesses that help them grow their online
          presence.
        </p>
        <p>
          I provide everything from consulting to full-stack development. From advice to complete
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
      font-size: 30px;
    }
    div.info {
      border-left: 2px solid var(--bg);
      p:first-of-type {
        padding-bottom: 5px;
      }
      p {
        padding-left: var(--sm-gap);
        line-height: var(--lh2);
        font-size: var(--fs-xs);
      }
    }
  }
}
.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--md-gap);

  .contact-btn {
    height: 48px;
    width: fit-content;
    padding: var(--sm-gap) var(--md-gap);
    color: var(--body-bg);
    border: 2px solid var(--accent);
    border-radius: 25px;
    transition: ease-out 350ms;
    background-image: var(--button-gradient);
    text-decoration: none;
    font-weight: bold;
  }
  .contact-btn:hover {
    scale: 1.1;
    box-shadow: var(--dark-shadow);
    transition: var(--transition);
  }
  .contact-btn:active {
    scale: 1;
    transition: none;
  }
}
#change-text-animation {
  position: relative;
  width: 100%;
  font-family: monospace;
  color: transparent;
  white-space: pre;
}
#change-text-animation::before {
  font-size: 1em;
  content: '';
  font-family: monospace;
  animation:
    glitchy-words 20s infinite,
    glitch1 5s infinite;
  color: var(--secondary);
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
}
#change-text-animation::after {
  content: '';
  color: var(--accent);
  font-family: monospace;
  animation:
    glitchy-words 20s infinite,
    glitch2 5s infinite;
  display: inline-block;
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: -1;
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
@media screen and (max-width: 650px) {
  #home {
    #home-details {
      h1 {
        font-size: var(--fs-lg);
      }
      h2 {
        font-size: 24px;
        font-weight: 100;
      }
    }
  }
}
</style>
