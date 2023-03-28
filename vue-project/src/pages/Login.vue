<template>
  <div class="form-wrap">
    <form class="login" @submit.prevent="login">
      <h3>Login to Spice</h3>
      <div class="inputs">
        <div class="input">
          <input type="email" placeholder="email" v-model="email" id="email" required>
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password" id="password" required>
        </div>
      </div>
      <div class="remember-me">
        <label for="remember">
          <input type="checkbox" v-model="remember" id="remember">
          Remember me
        </label>
      </div>
      <button type="submit" @click="login">Login</button>
      <p class="login-register">
      <router-link class="register" to="/register">Don't have an account? Register</router-link>
      </p>
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
    };
  },
  methods: {
    login() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          let user = userCredential.user;
          console.log(user);
          this.$router.push({ path: '/secure' });
        })
        .catch((error) => {
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

  .login-register {
    margin-bottom: 32px;

    .register {
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
      color: #303030;
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


        input {
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
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;

    @media (min-width: 900px) {
      display: initial;
    }
  }
      button {
      padding: 0.5rem 1rem;
      background-color: black;
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