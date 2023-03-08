<template>
    <div class="signup-container">
      <h1>Restaurant Sign Up</h1>
      <form @submit.prevent="signup">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required>
        <label for="location">Location</label>
        <select v-model="location" id="location">
          <option disabled value="">Please select a location</option>
          <option v-for="county in counties" :value="county">{{ county }}</option>
        </select>
        <div class="remember-me">
          <label for="agree">
            <input type="checkbox" v-model="agree" id="agree" required>
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        agree: false,
        location: '',
        counties: [
          'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal',
          'Down', 'Dublin', 'Fermanagh', 'Galway', 'Kerry', 'Kildare', 'Kilkenny',
          'Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath',
          'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford',
          'Westmeath', 'Wexford', 'Wicklow'
        ]
      };
    },
    methods: {
    async signup() {
      try {
        // create new user account
        const userCredential = await firebase.auth().createUserWithEmailPasswordAndLocation(this.email, this.password, this.location)
        const uid = userCredential.user.uid

        // store additional user information in database
        await firebase.database().ref(`users/${uid}`).set({

          email: this.email,
          username: this.username,
          location: this.location,
          password: this.password,
        })

        // redirect to home page
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }
}


  </script>
  
  <style scoped>
  .signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200vh;
    
   
  }
  
  h1 {
    margin-bottom: 2rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
    padding: 2rem;
    background-color: bl;
    border-radius: 0.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    border: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  }
  
  .remember-me {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #0076f5;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  button:hover {
    background-color: #41cc00;
  }
  
  </style>
  