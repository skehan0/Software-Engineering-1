<template>
  <!-- <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Spice</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
      <span class="navbar-toggler-icon"></span>
    </button>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/SignUp">Sign up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/About">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Blog">Blog</router-link>
        </li>
      </ul>
    </div>
  </nav> -->
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Spice</router-link>
      <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" background-color="White">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/blog">Blog</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/signup">Sign Up</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/login">Sign In</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</router-link></li>
          <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Logout</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  name:  "Navigation"
}
</script>

<style scoped>

#navbarResponsive{
  background-color: white;
}
/* .container-fluid {
  font-size: 20px;
  
}
.navbar-brand {
  font-size: 20px;
  color: rgba(196, 63, 30, 0.89);
}
.navbar-toggler {
  color: rgb(255, 106, 0);
}
.collapse {
  background-color: white;
} */
</style>