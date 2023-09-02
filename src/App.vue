<template>
    <div class="parallax-bg">
      <header>
        <NavbarComponent/>
      </header>
      <BackgroundParallax/>
    </div>

    <main class="black-bg">
      <router-view></router-view>
      <FooterComponent/>
    </main>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

* {
  font-family: Nunito, Arial, serif;
}

@font-face {
  font-family: "Nunito";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local("Nunito"), url("@/assets/fonts/nunito/Nunito-VariableFont_wght.ttf");
}

 :root {
   --white: white;
   --beige: #FDD7BE;
   --black: #040F17;
   --darkgray: #14283D;
   --gray: #4F6E8F;
   --lightgray: #6D86A7;
   --lightestgray: #96B4CF;
 }

.white {
  color: var(--white);
  fill: var(--white);
}

.white-bg {
  background: var(--white);
}

.beige {
  color: var(--beige);
  fill: var(--beige);
}

.beige-bg {
  background: var(--beige);
}

.black {
  color: var(--black);
  fill: var(--black);
}

.black-bg {
  background: var(--black);
  fill: var(--black);
  color: var(--white);
  z-index: 98;
}

.darkgray {
  color: var(--darkgray);
  fill: var(--darkgray);
}

.darkgray-bg {
  background: var(--darkgray);
  color: var(--white);
  z-index: 98;
}

.gray {
  color: var(--gray);
}

.gray-bg {
  background: var(--gray);
  color: var(--white);
}

.lightgray {
  color: var(--lightgray);
}

.lightgray-bg {
  background: var(--lightgray);
  color: var(--white);
}

.lightestgray {
  color: var(--lightestgray);
}

.lightestgray-bg {
  background: var(--lightestgray);
  color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
  text-align: center;
  font-family: Nunito, Arial, serif;
  line-height: 1.7;
}

h1 {
  color: var(--beige);
  font-size: 2.5rem;
  font-weight: 900;
  padding-bottom: 1.5rem;
  margin-top: 0;
}

h2 {
  color: var(--beige);
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
}

h5 {
  color: var(--beige);
  font-size: 1.5rem;
  font-weight: 300;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: Nunito, Arial, serif;
  font-weight: bold;
  line-height: 1.7;
}

a:hover {
  text-decoration: underline;
  color: inherit;
}

main {
  z-index: 0;
  text-align: center;
}

.parallax-bg {
  z-index: -2;
}

.container {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 40%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.container-lg {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
 .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
 .container {
    max-width: 1320px;
  }
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>

<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import BackgroundParallax from "@/components/BackgroundParallax.vue";
</script>