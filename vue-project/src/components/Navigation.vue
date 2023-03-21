<template>
  <nav class="navbar navbar-expand-lg ">
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
  </nav>
</template>

<script>
export default{
  name:  "Navigation.vue"
}
</script>

<style scoped>
.container-fluid {
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
}
</style>