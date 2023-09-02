<template>
  <footer class="darkgray-bg">
    <nav>
      <div>
        <router-link to="/legal-disclosure">⚖️Legal Disclosure</router-link>
      </div>
      <div class="mt-1">
        <span>©️Fabian Zweckinger ({{ new Date().getFullYear() }})</span>
      </div>
    </nav>
  </footer>
</template>

<style scoped>

footer {
  margin-top: 4rem;
  padding: 1.5em;
}

div {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 1.25em;
}

</style>
<script setup>
</script>