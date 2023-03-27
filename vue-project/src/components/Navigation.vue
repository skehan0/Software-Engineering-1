<template>
    <header>
    <nav class="navbar navbar-expand-lg bg-white text-uppercase fixed-top" id="mainNav">
    <div class="container">
      <router-link class="navbar-brand" to="/">Spice</router-link>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" background-color="White">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/blog">Blog</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/register">Register</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/login">Login</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name:  "Navigation",
  
};
</script>

<style scoped>

header{
  background-color: white;
}
 

</style>



