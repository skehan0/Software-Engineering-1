<template>
  <h1>Welcome to my blog page</h1>
  <p>This is my blog page for my SaaS app</p>
  <div class="container">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1"
             placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3 right">
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  </div>
</template>

<style scoped>
.right{
  text-align: right;
}
</style>