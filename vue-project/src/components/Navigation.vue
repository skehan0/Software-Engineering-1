<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://127.0.0.1:5173">Spice</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="SignUp">Sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Blog">Blog</a>
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
  height: 2;
  font-size: 20px;
}

.navbar-brand {
  font-size: 40px;
  color: rgba(196, 63, 30, 0.89);
}

.d-flex {
  background-color: rgb(44, 43, 43);
  
}

</style>