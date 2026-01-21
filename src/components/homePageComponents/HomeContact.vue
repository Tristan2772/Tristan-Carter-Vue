<script setup>
import { BiFile } from 'vue-icons-plus/bi'
</script>

<template>
  <section id="home-contact">
    <div>
      <h2>Contact Me!</h2>
      <p>
        If you have any questions, please refer to the <router-link to="/faq">faq</router-link>. If
        you don't see an answer for your question or you have any other inquiries, click the button
        below to fill out the form.
      </p>
      <div>
        <router-link to="/contact" class="contact-btn"
          >Go to Form! <BiFile size="24"
        /></router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
section#home-contact {
  margin-top: 80px;
  min-height: 25%;
  border: var(--border);
  color: var(--body-bg);
  text-align: center;
  background-image: linear-gradient(
    135deg,
    var(--accent),
    var(--accent),
    var(--accent),
    var(--accent),
    var(--accent),
    var(--secondary),
    var(--accent),
    var(--accent)
  );
  transition: scale 0.25s;

  &:hover {
    scale: 1.05;
    animation: primary-shine 0.25s 1 linear forwards;
  }
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
@keyframes primary-shine {
  from {
    background-image: linear-gradient(
      135deg,
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--secondary),
      var(--accent),
      var(--accent)
    );
  }
  12.5% {
    background-image: linear-gradient(
      115deg,
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--secondary),
      var(--accent)
    );
  }
  25% {
    background-image: linear-gradient(
      115deg,
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--secondary)
    );
  }
  37.5% {
    background-image: linear-gradient(
      115deg,
      var(--secondary),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent)
    );
  }
  50% {
    background-image: linear-gradient(
      135deg,
      var(--accent),
      var(--secondary),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent)
    );
  }
  62.5% {
    background-image: linear-gradient(
      135deg,
      var(--accent),
      var(--accent),
      var(--secondary),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent)
    );
  }
  75% {
    background-image: linear-gradient(
      135deg,
      var(--accent),
      var(--accent),
      var(--accent),
      var(--secondary),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent)
    );
  }
  87.5% {
    background-image: linear-gradient(
      135deg,
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--secondary),
      var(--accent),
      var(--accent),
      var(--accent)
    );
  }
  to {
    background-image: linear-gradient(
      135deg,
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--accent),
      var(--secondary),
      var(--accent),
      var(--accent)
    );
  }
}
@media screen and (max-width: 520px) {
  section#home-contact {
    border-left: none;
    border-right: none;
  }
}
</style>
