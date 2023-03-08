<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>      
 <div id="app">
  <Navigation />
  <router-view />
  <Footer />
</div>
</template>




<style scoped>
#app {
  background-image: url("https://cdn.pixabay.com/photo/2021/12/18/06/01/wine-6878013__480.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;  
}
</style>
