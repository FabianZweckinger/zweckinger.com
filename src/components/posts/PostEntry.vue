<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <article class="darkgray-bg">
    <router-link :to="url">
      <img :src="image" :alt="heading"/>
      <div class="entry-body">
        <h3>{{ heading }}</h3>
        <p>{{ description }}</p>
        <div>
          <img v-for="item in tags" class="tag" :src="item" :key="item" :alt="item">
        </div>
      </div>
    </router-link>
  </article>
  <!--<div>
    <router-link to="/">{{heading}}</router-link>
    <p class="gray">{{date.toLocaleDateString()}}</p>
  </div>-->
</template>

<style scoped>
article {
  font-size: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 0.75rem;
  max-width: 24rem;
}

img {
  width: 100%;
}

p {
  margin: 0.5rem 0.5rem 1rem;
}

h3 {
  text-align: center;
  margin: 0;
}

a:hover {
  text-decoration: none;

  /*TODO*/
}

.entry-body {
  padding: 1rem;
}

.tag {
  width: 1.5rem;
  margin-right: 0.5rem;
}
</style>