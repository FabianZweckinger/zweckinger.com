<script setup>
import PostsPanel from "@/components/posts/PostsPanel.vue";

//Images:
import TemplateThumbnailImage from "/src/assets/posts/template.webp";
import AircraftImage from "/src/assets/posts/ecqb_ppl_trainer/aircraft.webp";
import UnityTagImage from "/src/assets/tags/unity.svg";
import CsTagImage from "/src/assets/tags/cs.svg";
import PythonTagImage from "/src/assets/tags/python.svg";

const posts = [
  {heading: 'ECQB PPL Trainer', url: '/ecqb-ppl-trainer', description: 'An open source training platform for European Private Pilot License written in flask', image:AircraftImage, tags:[PythonTagImage]},
]

</script>

<template>
  <article>
    <PostsPanel :posts="posts"/>
  </article>
</template>

<style scoped>

</style>