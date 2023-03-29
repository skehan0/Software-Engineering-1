<template>
  <div class="menu-container">
    <h1>Create Your Menu</h1>
    <div v-for="input in inputs" :key="input.id" class="input-container">
      <input type="text" v-model="input.value" placeholder="Enter item name">
    </div>
    <div class="button-container">
      <button class="add-button" @click="addInput">Add Item</button>
      <button class="delete-button" @click="deleteInput">Delete Item</button>
      <button class="submit-button" type="submit" @click="submit">Submit Menu</button>
    </div>
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
      if (this.inputs.length > 1) {
        this.inputs.pop();
      }
    },
    submit() {
      const db = app.firestore();
      const collection = db.collection('menu-items');
      this.inputs.forEach(input => {
        if (input.value.trim() !== '') {
          collection.add({ name: input.value })
              .then(docRef => console.log(`Menu item with ID ${docRef.id} added to Firestore`))
              .catch(error => console.error('Error adding menu item to Firestore:', error));
        }
      });
      this.inputs = [{ id: 1, value: '' }]; // Reset inputs to initial state
    }
  }
};
</script>

<style scoped>
.menu-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  margin-top: 150px;
  background-color: white;
}

body {
  background-image: url('../assets/flame.png');
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  margin-top: 0;
  color: orange;
  font-size: 2rem;
}

.input-container {
  margin-bottom: 1rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.add-button {
  background-color: orange;
}

.delete-button {
  background-color: orange;
}

.submit-button {
  background-color: orange;
}

button {
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; 
}

button:hover {
  opacity: 0.8;
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
