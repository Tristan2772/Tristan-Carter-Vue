<script setup>
import { BiFile } from 'vue-icons-plus/bi'
</script>

<template>
  <section id="home-contact">
    <div>
      <h2>Contact Me!</h2>
      <p>
        If you have any questions, please refer to the <router-link to="/faq">faq</router-link>. If
        you don't see an answer for your question or you have any other inquiries, feel free to fill
        out the form.
      </p>
      <div>
        <router-link to="/contact" class="contact-btn"
          >Fill out the form! <BiFile size="24"
        /></router-link>
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
    var(--accent),
    var(--accent),
    var(--accent),
    var(--secondary),
    var(--accent)
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
        color: var(--body-bg);
        border: 2px solid var(--accent);
        border-radius: 25px;
        transition: ease-out 350ms;
        background-image: var(--button-gradient);
        display: flex;
        gap: var(--sm-gap);
        justify-content: center;
        align-items: center;
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
  }
}
</style>
