<template>
    <div class="app-wrapper">
        <div class="app">
            <Navigation v-if="!navigation" />
            <router-view/>
            <Footer v-if="!navigation"/>
        </div>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { getAuth } from 'firebase/auth';
export default {
    name: "app",
    components: { Navigation, Footer},
    data(){
        return {
            navigation: true,
        };
    },
    created() {
        this.checkRoute();
    },
    mounted() {},
    methods: {
        checkRoute() {
      if (
        this.$route.name === "Login" || 
        this.$route.name === "Register" 
        ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  }, 
    watch: {
        $route(){
           this.checkRoute(); 
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
}
.app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container{
    max-width: 1440px;
    margin: 0 auto;
}

.link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
}

.link-light{
    color: white;
}

</style>


