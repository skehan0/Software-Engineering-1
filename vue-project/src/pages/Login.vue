<template>
    <div class="form-wrap">
      <h1>Login to Spice</h1>
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
        <a class="register" href="Register">Don't have an account? Register</a>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </template>
  
  <script>
  import app from "../api/firebase"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  export default {
    name: "Login",
    data() {
      return {
        email: null,
        password: null,
        remember: false,
        location: null,
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
          this.$router.push({path: '/secure'});
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

  <style lang="scss">
  .form-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: black;
    margin-top: 80px;
  
  
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

  .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }
    .background {
      display: none;
      flex: 2;
      background-size: cover;
      background-image: url("../assets/background.png");
      width: 100%;
      height: 100%;
      @media (min-width: 900px) {
          display: initial;
      }
    }
  
  </style>