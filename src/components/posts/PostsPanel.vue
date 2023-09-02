<script setup>
import PostEntry from '/src/components/posts/PostEntry.vue'

defineProps({
    posts: {
        Array,
        required: true,
    }
})
</script>

<template>
  <section class="container container-lg">
    <ul class="black-bg">
      <PostEntry v-for="item in posts" :key="item.heading" :heading="item.heading" :url="item.url" :description="item.description" :image="item.image" :tags="item.tags"/>
    </ul>
  </section>
</template>

<style scoped>
ul {
    margin: 0;
    list-style-type: none;
    display: grid;
    gap: 1.5rem;
    justify-content: center;
}

@media (min-width: 768px) {
    ul {
        grid-template-columns:repeat(2,minmax(0,1fr))
    }
}

@media (min-width: 1024px) {
    ul {
        grid-template-columns:repeat(3,minmax(0,1fr))
    }
}

@media (min-width: 1280px) {
    ul {
        grid-template-columns:repeat(4,minmax(0,1fr))
    }
}

.center{
    text-align: center;
}
</style>