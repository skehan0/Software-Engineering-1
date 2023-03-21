<script setup>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>
<template>
    <Navigation />
    <router-view></router-view>
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
