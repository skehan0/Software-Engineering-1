<template>
  <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://127.0.0.1:5173">Spice</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/SignUp" class="nav-link">Sign up</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/About" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Blog" class="nav-link">Blog</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation.vue"
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