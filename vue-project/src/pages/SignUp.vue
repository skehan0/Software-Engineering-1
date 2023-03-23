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
        <button type="submit" onclick="submit()">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import app from '../api/firebase'
  import {getAuth, createUserWithEmailAndPassword} from  "firebase/auth"
  export default {
    name: "SignUp",
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

      methods : {
        submit(){
          const auth = getAuth(app);
          createUserWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
// Signed in
                const user = userCredential.user;
                console.log(user)
// ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
// ..
              });
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
    color:black;
    position: relative;
    height: auto;
    padding-top: 60px;
    
    
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
    background-color: white;
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
    box-shadow: 0 0.125rem 0.25rem rgba(221, 19, 19, 0.1);
  }
  
  .remember-me {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #0076f5;
    color: black;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(216, 10, 10, 0.1);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    color: white;
  }
  
  button:hover {
    background-color: #41cc00;
  }
  
  </style>
  