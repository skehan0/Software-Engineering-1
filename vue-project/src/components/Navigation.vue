<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-white text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <div class="img">
        <img src="../assets/LogoSpice.png" alt="Image Description" class="ml-2">
      </div>
      </router-link>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
          aria-expanded="false" aria-label="Toggle navigation" background-color="White">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/register">Restaurant Register</router-link></li>
            <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/login">Restaurant Login</router-link></li>
            <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/about">About</router-link></li>
            <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/customer">Choose your Bar</router-link></li>
            <li v-if="isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/secure">Secure</router-link></li>
            <li v-if="isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/CreateMenu">CreateMenu</router-link></li>
            <!-- <li v-if="!isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded"
                to="/CreateOrder">Create Order</router-link></li> -->
            <li v-if="isLoggedIn" class="nav-item mx-0 mx-lg-1"><router-link @click="logout"
                class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Logout</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import app from "../api/firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Login from "@/pages/Login.vue";
export default
  {
    name: "Navigation",
    components: { Login },
    data() {
      return {
        isLoggedIn: false
      }
    },
    created() {
      // Check if the user is logged in
      const auth = getAuth(app);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
    },
    methods: {
      logout() {
        signOut(getAuth(app)).then(() => {
          // Send them back to the home page!
          this.$router.push("/");
        });
      }
    }
  }
</script>

<style scoped>
</style>



