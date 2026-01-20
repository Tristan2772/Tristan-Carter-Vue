<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { onMounted, ref } from 'vue'
import { CgSpinner } from 'vue-icons-plus/cg'
import { BiPaperPlane } from 'vue-icons-plus/bi'

const tookOff = ref(false)
const planeCrash = ref(false)
const planeSafe = ref(false)
const planeReset = ref()

onMounted(() => {
  tookOff.value = false
  planeCrash.value = false
  planeSafe.value = false
})

function takeOff() {
  clearTimeout(planeReset.value)
  tookOff.value = false
  planeCrash.value = false
  planeSafe.value = false
  tookOff.value = true
  planeReset.value = setTimeout(() => {
    tookOff.value = false
    planeCrash.value = false
    planeSafe.value = false
  }, 5000)
}

const form = ref({
  name: '',
  email: '',
  number: '',
  subject: '',
  message: '',
})
const formRef = ref(null)
const loading = ref(false)
const status = ref('')
const toast = ref('')
async function submitForm() {
  loading.value = true
  status.value = ''
  const body = new FormData()
  body.append('name', form.value.name)
  body.append('email', form.value.email)
  body.append('number', form.value.number)
  body.append('subject', form.value.subject)
  body.append('message', form.value.message)
  const result = await fetch(
    'https://script.google.com/macros/s/AKfycbxRMNLC3jcIw5FGXDtKhITTd78iLEgABFxm7CtihPdqJEDuyhIs_Dkc--8QAfRxsq5PzQ/exec',
    {
      method: 'POST',
      body,
    },
  )
  const data = await result.json()

  if (data.status === 'success') {
    planeSafe.value = true
    toast.value = 'Message sent!'
    status.value = 'success'
    formRef.value.resetForm()
  } else {
    planeCrash.value = true
    toast.value = 'An error occured!'
    status.value = 'error'
  }

  loading.value = false
  setTimeout(() => {
    toast.value = ''
  }, 5000)
}
function validateEmail(value) {
  // if the field is empty
  if (!value) {
    planeCrash.value = true
    return 'Required!'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    planeCrash.value = true
    return 'Invalid email!'
  }
  // All is good
  return true
}
function validatePhone(value) {
  if (!value) {
    planeCrash.value = true
    return 'Required'
  }
  const regex = /^\+?\d{0,3}\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?/
  if (!regex.test(value)) {
    planeCrash.value = true
    return 'Invalid Phone!'
  }
  return true
}
function validateName(value) {
  if (!value) {
    planeCrash.value = true
    return 'Required'
  }
  const regex = /[a-zA-Z\s]/
  if (!regex.test(value)) {
    planeCrash.value = true
    return 'Invalid Name!'
  }
  return true
}
function validateText(value) {
  if (!value) {
    planeCrash.value = true
    return 'Required'
  }
  const regex = /[a-zA-Z\s0-9]/
  if (!regex.test(value)) {
    planeCrash.value = true
    return 'Invalid Subject!'
  }
  return true
}
function validateMessage(value) {
  if (!value) {
    planeCrash.value = true
    return 'Required'
  }
  const regex = /[a-zA-Z\s0-9]/
  if (!regex.test(value)) {
    planeCrash.value = true
    return 'Invalid Subject!'
  }
  return true
}
</script>

<template>
  <section id="contact">
    <h2 class="heading">Contact</h2>
    <p>Have a Question? Check out the <RouterLink to="/faq">faq</RouterLink> first!</p>
    <Form ref="formRef" @submit="submitForm" name="contact-form" id="form-data">
      <div id="input-group">
        <div>
          <label for="fName"
            >*Full Name:
            <Field
              id="fName"
              name="name"
              type="text"
              v-model="form.name"
              :disabled="loading"
              placeholder="Full Name"
              :rules="validateName"
            />
            <ErrorMessage name="name" />
          </label>
          <label for="fEmail"
            >*Email:
            <Field
              id="fEmail"
              name="email"
              type="email"
              v-model="form.email"
              :disabled="loading"
              placeholder="example@mail.com"
              :rules="validateEmail"
            />
            <ErrorMessage name="email" />
          </label>
          <label for="fNumber"
            >*Phone Number:
            <Field
              id="fNumber"
              name="number"
              type="text"
              v-model="form.number"
              :disabled="loading"
              placeholder="(###) ###-####"
              :rules="validatePhone"
            />
            <ErrorMessage name="number" />
          </label>
          <label for="fSubject"
            >*Subject:
            <Field
              id="fSubject"
              name="subject"
              type="text"
              v-model="form.subject"
              :disabled="loading"
              placeholder="Subject"
              :rules="validateText"
            />
            <ErrorMessage name="subject" />
          </label>
        </div>
        <div>
          <label for="fMessage"
            >*Message:
            <Field
              id="fMessage"
              as="textarea"
              name="message"
              v-model="form.message"
              :disabled="loading"
              cols="30"
              rows="9"
              placeholder="Your Message"
              :rules="validateMessage"
            />
            <ErrorMessage name="message" />
          </label>
        </div>
      </div>
      <div id="submission">
        <button
          id="submit-btn"
          type="submit"
          class="contact-btn"
          @click="takeOff(planeReset)"
          :class="{
            active: tookOff === true,
            crashed: planeCrash === true && planeSafe !== true,
            safe: planeSafe === true,
          }"
          :disabled="loading"
        >
          Send Message <BiPaperPlane size="24" />
        </button>
      </div>
    </Form>
  </section>
  <teleport to="body"
    ><div
      v-if="toast || loading"
      id="formToast"
      :class="{ error: status === 'error', loading: loading }"
    >
      <button v-if="!loading" @click="toast = ''">X</button>
      <p v-if="!loading">{{ toast }}</p>
      <p v-if="loading">
        <CgSpinner />
      </p></div
  ></teleport>
</template>

<style scoped>
#contact {
  background-color: var(--bg);
  min-height: auto;
  h2 {
    padding-bottom: 20px;
  }
  p {
    text-align: center;
    padding-bottom: var(--md-gap);

    a {
      color: var(--txt-color);
    }
  }
}
#contact form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--md-gap);
  margin: 0 auto;
  text-align: center;
}
#contact form #input-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--md-gap);
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#input-group div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;
}

#input-group div label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: var(--md-gap) 0 0;
}

#input-group div label input,
#input-group div label textarea {
  width: 100%;
  background: var(--bg);
  border: 2px solid var(--primary);
  padding: var(--sm-gap);
  font-size: var(--fs-xs);
  color: var(--txt-color);
  border-radius: 15px;
  /* resize: none; */
}

#input-group div label input:disabled,
#input-group div label textarea:disabled {
  cursor: progress;
}

#input-group div label span {
  text-align: left;
  font-size: 16px;
  color: red;
  font-weight: bold;
  padding-left: var(--sm-gap);
  padding-top: 2px;
}

#submission {
  .contact-btn {
    height: auto;
    width: fit-content;
    padding: var(--sm-gap) calc(var(--md-gap) + var(--sm-gap) + 24px) var(--sm-gap) var(--md-gap);
    color: var(--body-bg);
    font-size: var(--fs-xs);
    border: 2px solid var(--accent);
    border-radius: 25px;
    transition: ease-out 350ms;
    background-image: var(--button-gradient);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    position: relative;

    svg {
      position: absolute;
      right: var(--md-gap);
    }
  }
  .contact-btn:hover {
    scale: 1.1;
    box-shadow: var(--dark-shadow);
    transition: var(--transition);

    svg {
      transition: all 0.3s ease-out;
      translate: -5px 8px;
      rotate: -15deg;
      scale: 1.05;
    }
  }
  .contact-btn.active.crashed {
    svg {
      animation: plane-crash 1s 1 linear;
    }
  }
  .contact-btn.safe {
    svg {
      animation: plane-safe 1s 1 linear;
    }
  }

  button {
    padding: var(--sm-gap) var(--md-gap);
    background: var(--primary);
    border-radius: 20px;
    color: var(--body-bg);
    border: 2px solid transparent;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.05);
    box-shadow: var(--primary-shadow2);
  }
}

#formToast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: var(--sm-gap) var(--md-gap);
  background-color: var(--body-bg);
  border: var(--border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: var(--md-gap);
  color: var(--primary);
  backdrop-filter: blur(10px);

  button {
    aspect-ratio: 1/1;
    padding: 5px;
    border: var(--border);
    background-color: transparent;
    border-radius: 50%;
    box-shadow: none;
    align-self: flex-end;
    color: var(--primary);
    cursor: pointer;
    transition: var(--transition);
  }
  button:hover {
    transform: scale(1.1);
  }
}
#formToast.error {
  border-color: red;

  p {
    color: white;
  }
}
#formToast.loading {
  padding: var(--lg-gap) var(--xl-gap);
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);

  p {
    width: max-content;
    aspect-ratio: 1/1;
    transform-origin: center center;
    animation: loading 1s linear infinite;
  }
}

@keyframes loading {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

@keyframes plane-crash {
  35% {
    color: red;
    translate: 45px -30px;
    rotate: 15deg;
    scale: 0.95;
    filter: drop-shadow(10px 10px 10px black);
  }
  50% {
    translate: 60px -30px;
  }
  65% {
    translate: 80px -20px;
    scale: 0.75;
  }
  80%,
  to {
    translate: 120px 8px;
    rotate: 115deg;
    scale: 0.45;
    color: red;
  }
}
@keyframes plane-safe {
  25% {
    color: var(--primary);
  }
  80% {
    translate: 80px -60px;
    rotate: 30deg;
    scale: 0.25;
  }
  100% {
    translate: 100px -65px;
    rotate: 30deg;
    scale: 0.05;
  }
}

@media screen and (max-width: 600px) {
  #contact form #input-group {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  #input-group div {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  #input-group div {
    width: 90%;
  }
}
</style>
