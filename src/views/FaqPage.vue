<script setup>
import jsonData from '../assets/faq.json'
const questions = jsonData.questions
</script>

<template>
  <section>
    <h2>FAQ</h2>
    <div>
      <details v-for="question in questions" :key="question.index">
        <summary>
          {{ question.q }}
        </summary>
        <p>
          {{ question.a }}
        </p>
      </details>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--bg);

  div {
    display: flex;
    flex-direction: column;
    gap: var(--md-gap);

    details {
      border: 2px solid var(--accent);
      border-radius: 20px;
      line-height: 1.5;

      summary {
        padding: var(--md-gap);
        cursor: pointer;
      }

      p {
        padding: var(--md-gap) var(--lg-gap);
      }
    }
    details:hover {
      border: var(--border);
    }
    details[open] {
      border: var(--border);

      summary {
        border-bottom: var(--border);
      }
    }
  }
}
</style>
