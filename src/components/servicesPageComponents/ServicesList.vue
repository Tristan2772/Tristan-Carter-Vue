<template>
  <div class="services-container">
    <div class="service-card">
      <h3>Full-Stack Development</h3>
      <p>
        Full-stack development encompasses both front-end and back-end technologies. From all the
        elements a user can see and interact with, to database calls and user authentification.
      </p>
    </div>
    <div class="service-card">
      <h3>SEO</h3>
      <p>
        Search Engine Optimization (SEO) refers to the many practices and techniques that rank your
        website higher in the list of search results when you look something up on Google or Bing.
      </p>
    </div>
    <div class="service-card">
      <h3>Consultation</h3>
      <p>
        Consultation services for when you need advice on site maintenance, guidance with a new
        feature, or if you would just like a third-party audit of your codebase.
      </p>
    </div>
    <div class="service-card">
      <h3>Web Performance Optimization</h3>
      <p>
        The optimization of web performance, also known as core web vitals, is the process of
        reducing database calls or page load times by various means, resulting in a better user
        experience.
      </p>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--lg-gap);
}

.service-card {
  padding: var(--sm-gap);
  border: 2px solid var(--accent);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: var(--sm-gap);
  transition:
    border var(--transition),
    scale var(--transition),
    background-color var(--transition);

  h3 {
    padding-bottom: var(--sm-gap);
    text-align: center;
    transition: var(--transition);
  }

  p {
    padding: 0 var(--md-gap);
  }
}

.service-card:hover {
  border: var(--border);
  scale: 1.05;
  background-color: var(--content-bg);

  h3 {
    color: var(--primary);
  }
}

.service-card:nth-child(1) {
  transform-origin: left top;
}
.service-card:nth-child(2) {
  transform-origin: right top;
}
.service-card:nth-child(3) {
  transform-origin: left bottom;
}
.service-card:nth-child(4) {
  transform-origin: right bottom;
}

@media screen and (max-width: 850px) {
  .services-container {
    display: flex;
    flex-direction: column;
    gap: var(--lg-gap);
    text-align: left;
  }
  .service-card {
    h3 {
      padding: 0 var(--sm-gap);
      padding-bottom: 0px;
      text-align: left;
    }

    p {
      text-align: left;
    }
  }
  .service-card:nth-child(1),
  .service-card:nth-child(2),
  .service-card:nth-child(3),
  .service-card:nth-child(4) {
    transform-origin: center bottom;
  }
}
</style>
