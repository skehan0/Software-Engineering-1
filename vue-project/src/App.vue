<script setup>
import Navigation from './components/Navigation.vue'
import Login from './components/Login.vue'
</script>

<template>
  <div class="body">
     <Navigation/>
  <Login/>
  
  <router-view></router-view>
  
</div>
</template>




<style scoped>
.body {
background-image: url(bar.svg);
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
