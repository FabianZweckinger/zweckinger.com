<script setup>
import {onMounted} from "vue";

onMounted(() => {
    //Parallax
    window.addEventListener("scroll", function () {
        let parallaxLayers = document.getElementsByClassName("parallax");
        for (let i = 0; i < parallaxLayers.length; i++) {
            let xTranslation = -(this.pageYOffset * parallaxLayers[i].getAttribute('horizontal-parallax-speed') / 100);
            let yTranslation = -(this.pageYOffset * parallaxLayers[i].getAttribute('parallax-speed') / 100);
            parallaxLayers[i].setAttribute('style', 'transform: translate3d(' + xTranslation + 'px, ' + yTranslation + 'px, 0px)');
        }
    });
})
</script>

<template>
  <div>
    <img class="none-clickable-img layer parallax beige-bg" src="~@/assets/background/background-l1.svg" alt="Background image">
    <img class="none-clickable-img layer parallax" parallax-speed="2" horizontal-parallax-speed="5" src="~@/assets/background/background-l2.svg" alt="Background image">
    <img class="none-clickable-img layer parallax" parallax-speed="2" src="~@/assets/background/background-l3.svg" alt="Background image">
    <img class="none-clickable-img layer parallax" parallax-speed="25" src="~@/assets/background/background-l4.svg" alt="Background image">
    <img class="none-clickable-img layer parallax" parallax-speed="60" src="~@/assets/background/background-l5.svg" alt="Background image">
    <img class="none-clickable-img" src="~@/assets/background/background-l6.svg" alt="Background image">
  </div>
</template>

<style scoped>
div {
  display: flex;
}

.layer {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>