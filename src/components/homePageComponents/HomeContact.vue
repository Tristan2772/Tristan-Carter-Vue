<script setup>
import { BiAbacus, BiMailSend } from 'vue-icons-plus/bi'
</script>

<template>
  <section id="home-contact">
    <div>
      <h2>Contact Me!</h2>
      <p>
        If you have any questions, please refer to the <router-link to="/faq">faq</router-link>. If
        you don't see an answer for your question or just want to contact me, feel free to fill out
        the form or simply email me.
      </p>
      <div>
        <router-link to="/contact" class="contact-btn"
          >Fill out the form! <BiAbacus size="24"
        /></router-link>
        <a class="contact-btn" href="mailto:tristancarter2772@gmail.com"
          >Simply Email! <BiMailSend size="24"
        /></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section#home-contact {
  margin-top: 80px;
  min-height: 25%;
  background-image: linear-gradient(
    135deg,
    var(--secondary),
    var(--primary),
    var(--secondary),
    var(--secondary),
    var(--secondary)
  );
  border: var(--border);
  color: var(--body-bg);
  text-align: center;
  div {
    margin: auto 0;
    h2 {
      color: var(--body-bg);
      padding-bottom: var(--md-gap);
    }
    p {
      line-height: var(--lh2);
      font-size: var(--fs-sm);

      a {
        color: var(--body-bg);
      }
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: var(--lg-gap);
      margin-top: var(--md-gap);

      .contact-btn {
        height: auto;
        width: fit-content;
        padding: var(--sm-gap) var(--md-gap);
        color: var(--primary);
        border: 2px solid var(--accent);
        border-radius: 25px;
        transition: ease-out 350ms;
        background-image: var(--dark-button-gradient);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--md-gap);
        text-decoration: none;
        font-weight: 300;
      }
      .contact-btn:hover {
        scale: 1.1;
        box-shadow: var(--dark-shadow);
        transition: var(--transition);
      }
    }
  }
}
</style>
