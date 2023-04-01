<template>
  <div class="container mt-5">
    <h1>Create Your Order</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Table Number</label>
      <input type="email" class="form-control" v-model="handle" id="exampleFormControlInput1"
        placeholder="no.">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Order</label>
      <textarea class="form-control" v-model="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="mb-3 right">
      <button type="submit" @click="postComment" class="btn btn-primary">Post Order</button>
    </div>
    <div class="mb-3 right">
      <button type="button" @click="getComments" class="btn btn-primary">Show Order</button>
    </div>
    </div>
</template>

<script>
import { getFunctions, httpsCallable } from "firebase/functions";
import app from '../api/firebase';
export default {
  data() {
    return {
      handle: '',
      comment: '',
      commentsArray:[],
      editing:false,
      tempValue:null,
    }
  },
  created() {},
  methods : {
    postComment() {
      // let loader = this.$loading.show({    // Optional parameters
      //   loader: 'dots',
      //   container: this.$refs.container,
      //   canCancel: false
      // });
      const functions = getFunctions(app);
      // Uncomment this code if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
        //connectFunctionsEmulator(functions, "localhost", 5001);
      const postComment = httpsCallable(functions, 'postusercomment');
      postComment({"handle": this.handle, "comment": this.comment}).then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} */
        loader.hide();
        this.getComments();
      });
    },
    getComments() {
      //  let loader = this.$loading.show({    // Optional parameters
      //    loader: 'dots',
      //    container: this.$refs.container,
      //    canCancel: false
      //  });
      const functions = getFunctions(app);
      
      const getComments = httpsCallable(functions, 'getcomments');
      getComments().then((result) => {
        // Read result of the Cloud Function.
        // /** @type {any} */
        console.log(result.data);
        loader.hide();
        this.commentsArray = result.data;
      });
    },
    deleteComment(id){
      const functions = getFunctions(app);
      const deleteComment = httpsCallable(functions, 'deleteusercomment');
      deleteComment({id:id}).then((result) => {
        console.log(result.data);
        if(result.data == "Document successfully deleted")
          this.getComments();
      }); // To refresh the client
    },
    enableEditing(comment){
      this.tempValue = comment;
      this.editing = true;
      },
    disableEditing(){
      this.tempValue = null;
      this.editing = false;
    },
    save(id) {
      const functions = getFunctions(app);
      // Uncomment this section if your local emulators are running and you wish to test locally
      //if(window.location.hostname === 'localhost') // Checks if working locally
      //connectFunctionsEmulator(functions, "localhost", 5001);
      const updateComment = httpsCallable(functions, 'updatecomment?id=' + id);
      // Data field automatically populated by Firebase client lib
      // JSON that will arrive at the server will be { data : {comment : "text from input"} }
      updateComment({ comment : this.tempValue }).then((result) => {
        this.getComments();
        this.editing = false;
      });
    }
  }
}
</script>


<style scoped>
.container {
  padding-top: 60px;
}
.right{
  text-align: right;
}
</style>