<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'





</script>

<template>
    <div id="app">
        <div class="header-wrapper">
        <Header class="header"/>
    </div>
        <div class="navbar-wrapper">
      <Navigation class="navbar" />
    </div>
    
        <Footer class="footer" />
        <router-view />
    </div>

</template>

<style>



.navbar{
    position: fixed;
    top: 0;
    height: 0px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    margin-top: 70px;
}

.header-wrapper {
    position: fixed;
    top: 0;
    height: 0px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    margin-top: 0px;
}

.header {
    color:white;
    margin-top: 0px;
}

.footer {
    position: fixed;
    bottom: 0;
}

</style>
