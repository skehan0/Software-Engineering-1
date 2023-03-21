<template>
  <div>
    <div v-for="input in inputs" :key="input.id">
      <input type="text" v-model="input.value">
    </div>
    <button @click="addInput">Add</button>
  </div>
  <div>
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