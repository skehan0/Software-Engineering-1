<template>
    <div class="login-container">
      <h1>Restaurant Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" required>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" required>
        <label for="location">Location</label>
        <select v-model="location" id="location">
          <option disabled value="">Please select a location</option>
          <option v-for="county in counties" :value="county">{{ county }}</option>
        </select>
        <div class="remember-me">
          <label for="remember">
            <input type="checkbox" v-model="remember" id="remember">
            Remember me
          </label>
        </div>
        <button type="submit" onclick="submit()">Login</button>
        <a class="sign-up" href="SignUp">Sign up</a>
      </form>
    </div>
  </template>
  <script>

  import app from "../api/firebase"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        remember: false,
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
      submit() {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, this.email, this.password).then((userCredential) => {
        // Signed in
          let user = userCredential.user;
          console.log(user);
        }).catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
        });
      }
    }
  }

  </script>
  <style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
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
    background-color: black;
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
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  button:hover {
    background-color: #0062cc;
  }
  
  select {
    width: 100%;
  }

  
  </style>