<template>
  <h1>Welcome to my blog page</h1>
  <p>This is my blog page for my Spice app</p>
  <div class="container">
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

h1{
  margin-top: 50px;
  color: cadetblue;
  padding-left: 12px;
  position: fixed;
}
p{
  color: orange;
  padding-left: 12px;
  position: fixed;
  margin-top: 90px;
}
 .container{
  width: fit-content;
  margin-top: 90px;
}
/*
h1{
  color: white;
}

p{
  color: white;
} */
</style>



