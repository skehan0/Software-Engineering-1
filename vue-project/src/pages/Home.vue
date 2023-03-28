<template>
    <div class="home">
      <h1>
        Join The Future With <span class="text-warning"> Digital Transformation </span>
      </h1>
      <p class="lead my-4">
        Digital transformation is the process of using digital technologies to create new — or modify existing — business
        processes, culture, and customer experiences to meet changing business and market requirements. This reimagining of
        business in the digital age is digital transformation
      </p>
    </div>
    <div class="home-about">
      <div class="image">
        <img src="#" alt="">
      </div>
      <div class="content">
        <span>why choose us?</span>
        <h3 class="title">what's make our app so good?</h3>
        <p>
          Customers value the very best from their drinks. The purpose of the app is to help more pubs and restaurants
          adapt to modern technology by solving many problems such as ordering at the bar when taking kids to a pub, not
          losing a table. Avoid navigating through a crowded pub carrying a sizable round of drinks on a tray. The app also
          be an excellent tool for those who are less mobile or seated far from the bar, such beer gardens or on an upper
          floor.
        </p>
        <router-link @click="scrollToTop()" to="/about" class="btn">read more</router-link>
  
        <div class="icons-container">
          <div class="icons">
            <img src="#" alt="">
            <h3>fast technology</h3>
          </div>
          <div class="icons">
            <img src="#" alt="">
            <h3>fresh drinks</h3>
          </div>
          <div class="icons">
            <img src="#" alt="">
            <h3>digital transformation</h3>
          </div>
          <div class="icons">
            <img src="#" alt="">
            <h3>24/7 support</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import app from "../api/firebase";
  
  export default {
    name: "Home",
    components: {},
    data() {},
  };
  </script>
  
  <style>
.home {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: black;
  margin: 90px auto 0;
  text-align: center;
  max-width: 1000px; /* optional - limits the width of the element */
}

.home h1 {
  margin-top: 0;
  font-size: 3rem;
}

.home p {
  font-size: 1.6rem;
  line-height: 2.5rem;
}

.home-about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  padding: 5% 0;
}

.home-about .image {
  flex: 1 1 40rem;
  margin-bottom: 2rem;
}

.home-about .image img {
  width: 100%;
}

.home-about .content {
  flex: 1 1 40rem;
}

.home-about .content span {
  font-family: 'Satisfy', cursive;
  font-size: 3rem;
  color: #27ae60;
  display: block;
}

.home-about .content .title {
  font-size: 3rem;
  padding-top: .5rem;
  color: #130f40;
}

.home-about .content p {
  padding: 1rem 0;
  line-height: 2;
  font-size: 1.6rem;
  color: black;
}

.home-about .content .icons-container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.home-about .content .icons-container .icons {
  flex: 1 1 20rem;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}

.home-about .content .icons-container .icons h3 {
  font-size: 1.7rem;
  color: #130f40;
}

@media only screen and (max-width: 768px) {
  .home {
    margin-top: 60px;
  }

  .home h1 {
    font-size: 2.5rem;
  }

  .home p {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  .home-about .image {
    flex: 1 1 100%;
    margin-bottom: 1rem;
  }

  .home-about .content {
    flex: 1 1 100%;
  }

  .home-about .content span {
    font-size: 2rem;
  }

  .home-about .content .title {
    font-size: 2rem;
  }

  .home-about .content p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  .home-about .content .icons-container .icons h3 {
    font-size: 1.3rem;
  }
}
</style>

  