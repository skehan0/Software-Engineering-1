<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="row-1">
          <router-link class="header" to="/">Spice</router-link>
          <router-link class="header" to="/"><img src="../assets/LogoSpice.png" alt="Image Description" class="ml-2"></router-link>
        </div>
        <div class="row-2">
          <ul>
            <li><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">Home</router-link></li>
            <li><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/createorder">Create Order</router-link></li>
            <li><router-link class="nav-link py-3 px-0 px-lg-3 rounded" to="/about">About</router-link></li>
          </ul>
        </div>
      </div>
      <div class="row-3">
        <p>Copyright 2023 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 50px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .row-1 {
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .row-3 {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      margin-top: auto;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }
  }
}
</style>