<template>
  <div class="container-fluid">
    <h1 class="blog-title">Welcome to my blog page</h1>
    <p class="blog-text">This is my blog page for my Spice app</p>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email"  v-model= "handle" class="form-control" id="exampleFormControlInput1"
             placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Comment</label>
      <textarea class="form-control"  v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="postComment" class="btn btn-primary">Post Comment</button>
    </div>
  </div>
</template>

<script>
import app from '../api/firebase';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
export default {
  name: "Blog",
  data() {
    return {
      handle: '',
      comment: ''
    }
  },
  methods : {
    postComment () {
      console.log(this.handle);
      console.log(this.comment);

      const functions = getFunctions(app);
      if(window.location.hostname === 'localhost') // Check if working locally
      connectFunctionsEmulator(functions, "localhost", 5001);
      const postComment = httpsCallable(functions, 'postcomment');
      postComment({"handle": this.handle, "comment":
        this.comment})
          .then((result) => {
// Read result of the Cloud Function.
            /** @type {any} */
            console.log(result);
          });
    }
  }
}
</script>

<style>

.blog-title{
  color: black;
  padding-top: 70px;
  
}

.blog-text{
  color: black;
  padding-top: 20px;
  
}
.form-label{
  color:black;
}


/* .container{
  width: fit-content;
}

h1{
  color: white;
}

p{
  color: white;
} */
</style>



