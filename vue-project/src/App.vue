<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<script>
export default {
    name: "App",
    components:{
        Navigation,
        Footer,
        Header
    }
};
</script>

<template>
    <div id="app">
        <div class="navbar-wrapper">
      <Navigation class="navbar" />
    </div>
        <div class="header-wrapper">
            <Header class="header"/>
        </div>
        <router-view />
        <Footer class="footer" />
    </div>
</template>

<style>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.navbar{
    color: aqua;
}

.header-wrapper {
  margin-top: 90px; /* adjust this value to add some space between the navbar and header */
}

.header {
    color: 0;
}

.footer {
    position: fixed;
    bottom: 0;
}

</style>
