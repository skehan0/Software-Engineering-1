<template>
  <div>
    <h1>Create your Menu</h1>
    <div v-for="input in inputs" :key="input.id">
      <input type="text" v-model="input.value">
    </div>
    <button @click="addInput">Add</button>
    <button @click="deleteInput">Delete</button>
    <button type="submit" @click="submit">Submit</button>
  </div>
 
</template>

<script>
import app from '../api/firebase'
export default {
  data() {
    return {
      inputs: [{ id: 1, value: '' }]
    };
  },
  methods: {
    addInput() {
      this.inputs.push({ id: this.inputs.length + 1, value: '' });
    },
    deleteInput() {
      this.inputs.pop({ id: this.inputs.length - 1, value: '' });
    },
    submit() {
      const db = app.firestore();
      const collection = db.collection('inputs');
      this.inputs.forEach(input => {
        if (input.value !== '') {
          collection.add({ value: input.value })
              .then(docRef => console.log(`Input with ID ${docRef.id} added to Firestore`))
              .catch(error => console.error('Error adding input to Firestore:', error));
        }
      });
    }
  }
};
</script>
<style>
h1{
  color: black;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out; 
  }

  
</style>