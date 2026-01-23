<script setup>
import jsonData from '../../assets/faq.json'
import { BiPlus } from 'vue-icons-plus/bi'
const questions = jsonData.questions
</script>

<template>
    <section>
    <h2>FAQ</h2>
    <div>
      <details name="question" v-for="(question, index) in questions" :key="index">
        <summary>
          <BiPlus size="24" />
          {{ question.q }}
        </summary>
        <p>
          {{ question.a }}
        </p>
      </details>
    </div>
    <routerLink to="/contact" class="contact-btn">Contact Me!</routerLink>
  </section>
</template>

<style scoped>
section {
  background: var(--bg);

  div {
    display: flex;
    flex-direction: column;
    gap: var(--md-gap);
    margin-bottom: var(--lg-gap);

    details {
      border: 2px solid var(--accent);
      background-color: var(--body-bg);
      border-radius: 20px;
      line-height: 1.5;
      overflow: hidden;
      interpolate-size: allow-keywords;

      summary {
        padding: var(--md-gap);
        padding-left: var(--sm-gap);
        cursor: pointer;
        font-size: var(--fs-sm);
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        list-style-type: none;

        svg {
          color: var(--text-color);
          font-size: var(--fs-sm);
          transition: transform 0.3s;
          margin-right: var(--sm-gap);
          translate: 0 2px;
        }
      }
      summary::-webkit-details-marker {
        display: none;
      }

      p {
        border-top: var(--border);
        padding: var(--md-gap) var(--lg-gap);
        font-size: var(--fs-xs);
      }
    }
    details:hover {
      border: var(--border);
      summary {
        color: var(--primary);
        svg {
          color: var(--primary);
        }
      }
    }
    details[open] {
      border: var(--border);
      animation: shine 0.2s linear 0.2s;

      summary {
        color: var(--primary);
        svg {
          color: var(--primary);
          transform: rotate(135deg);
        }
      }
    }
    details::details-content {
      height: 0;
      transition:
        height 0.3s ease-out,
        content-visibility 0.3s;
      transition-behavior: allow-discrete;
    }
    details[open]::details-content {
      height: auto;
    }
  }
  .contact-btn {
    height: 48px;
    width: fit-content;
    padding: var(--sm-gap) var(--md-gap);
    color: var(--body-bg);
    border: 2px solid var(--accent);
    border-radius: 25px;
    background-image: var(--button-gradient);
    text-decoration: none;
    font-weight: bold;
    font-size: var(--fs-sm);
    transition: ease-out 350ms;
    display: block;
    margin: 0 auto;
  }
  .contact-btn:hover {
    box-shadow: var(--dark-shadow);
    scale: 1.1;
    transition: var(--transition);
  }
  .contact-btn:active {
    scale: 1;
    transition: none;
  }
}
</style>
