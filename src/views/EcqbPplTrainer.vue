<script setup>
import AircraftImage from "/src/assets/posts/ecqb_ppl_trainer/aircraft.webp";
import PythonTagImage from "/src/assets/tags/python.svg";
import Sample1Image from "/src/assets/posts/ecqb_ppl_trainer/ecqb_ppl_trainer_sample1.png";
import Sample2Image from "/src/assets/posts/ecqb_ppl_trainer/ecqb_ppl_trainer_sample2.png";
</script>

<template>
  <article class="container">
    <div class="heading-section" itemscope itemtype="http://schema.org/Article">
      <h1 itemprop="name">Ecqb Ppl Trainer</h1>
      <span itemprop="author" hidden>Fabian Zweckinger</span>
      <div class="metadata">
        <time itemProp="datePublished" dateTime="2023-08-24">
          {{ new Date("2023-08-24").toLocaleDateString('de-AT', {year: 'numeric', month: 'short', day: '2-digit'}) }}
        </time>
        <img class="tag" :src="PythonTagImage" alt="Python">
      </div>
    </div>
    <img class="primary-img img-fluid" :src="AircraftImage" alt="Primary title image">

    <section>
      <h2>Description</h2>
      <ul>
        <li>
          Ecqb Ppl Trainer is a free, open-source, self-hosted, web-based training platform for theoretical questions
          pool of european private pilot licenses (ECQB).
        </li>
        <li>
          The user can train on multiple choice based quiz system, track and visualize progress.
        </li>
        <li>
          The software server side is implemented in Python3 using Flask. Vue3 and Bootstrap5 are used for frontend.
        </li>
        <li>
          Further information and sourcecode is available on
          <a href="https://github.com/FabianZweckinger/ecqb-ppl-trainer">Github</a>.
          Feel free to extend the software.
        </li>
        <li>
          Here are some sample views:
        </li>
      </ul>

      <img class="img-fluid" :src="Sample1Image" alt="Sample image ecqb ppl trainer">
      <img class="img-fluid" :src="Sample2Image" alt="Sample image ecqb ppl trainer">
    </section>


    <section>
      <h5 class="padding-top">Credit Notice</h5>
      <div>
        <ul>
          <li><a href="https://pixabay.com/de/photos/flugzeug-sonnenuntergang-silhouette-1362586/">https://pixabay.com/de/photos/flugzeug-sonnenuntergang-silhouette-1362586/</a>
          </li>
          <li><a href="https://www.python.org/community/logos/">https://www.python.org/community/logos/</a></li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style scoped>
* {
  line-height: 1.7;
}

ul {
  list-style-type: none;
}

li {
  margin-bottom: 1rem;
}

h1 {
  padding-bottom: 0;
  margin-bottom: 0.25rem;
}

.primary-img {
  border-radius: 0.75rem;
}


.heading-section {
  padding-bottom: 2.5rem;
}

.tag {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.metadata {
  gap: 0.5rem;
  display: inline-flex;
  align-items: center;
}
</style>