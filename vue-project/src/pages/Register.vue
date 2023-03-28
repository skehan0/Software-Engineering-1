<template>
  <div class="form-wrap">
    <form class="register" @submit.prevent="register">
      <h3>Register with Spice</h3>
      <div class="inputs">
        <div class="input">
          <input type="email" placeholder="email" v-model="email" id="email" required>
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password" id="password" required>
        </div>
        <div class="input">
        <select v-model="location" id="location">
          <option disabled value="">Please select a location</option>
          <option v-for="county in counties" :value="county">{{ county }}</option> 
       </select>
    </div>
      </div>
      <button type="submit" @click="register">Register</button>
      <p class="register-login">
      <router-link class="login" to="/login">Already have an account? Login</router-link>
      </p>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import app from '../api/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      agree: false,
      location: "",
      counties: [
        "Antrim",
        "Armagh",
        "Carlow",
        "Cavan",
        "Clare",
        "Cork",
        "Derry",
        "Donegal",
        "Down",
        "Dublin",
        "Fermanagh",
        "Galway",
        "Kerry",
        "Kildare",
        "Kilkenny",
        "Laois",
        "Leitrim",
        "Limerick",
        "Longford",
        "Louth",
        "Mayo",
        "Meath",
        "Monaghan",
        "Offaly",
        "Roscommon",
        "Sligo",
        "Tipperary",
        "Tyrone",
        "Waterford",
        "Westmeath",
        "Wexford",
        "Wicklow",
      ],
    }
  },

  methods: {
    register() {
      console.log("Email " + this.email)
      console.log("Password" + this.password)
      const auth = getAuth(app)
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          this.$router.push({ path: "/secure" })
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
          // ..
        })
    },
  },
}
</script>
  
<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 900px) {
    width: 100%;
  }

  .register-login {
    margin-bottom: 32px;

    .login {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: white;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h3 {
      text-align: center;
      color: red;
      padding-bottom: 10px;

      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;


        input, select {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          border-radius: 0.5rem;

          &:focus {
            outline: none;
          }
        }

        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
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
    background-image: url("../assets/cocktail.png");
    width: 100%;
    height: 100%;

    @media (min-width: 900px) {
      display: initial;
    }
  }
      button {
      padding: 0.5rem 1rem;
      background-color: red;
      color: #fff;
      border: none;
      border-radius: 1rem;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #0062cc;
      }
    }
}
</style>
