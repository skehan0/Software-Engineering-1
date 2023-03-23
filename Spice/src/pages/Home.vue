<script setup>
import app from '../api/firebase';
</script>
<template>
    <div class="container">
      <h1>Join The Future With <span class="text-warning"> Digital Transformation </span></h1>
          <p class="lead my-4">
            Digital transformation is the process of using digital technologies to create new —
            or modify existing — business processes, culture, and customer experiences to meet changing business and
            market requirements. This reimagining of business in the digital age is digital transformation
          </p>
    </div>
    <div class="home-about">
            <div class="image">
                <img src="../assets/images/about-img.jpg" alt="">
            </div>
            <div class="content">
                <span>why choose us?</span>
                <h3 class="title">what's make our app so good?</h3>
                <p>Customers value the very best from their drinks. The purpose of the app is to help more pubs and restaurants adapt to modern technology by
                    solving many problems such as ordering at the bar when taking kids to a pub, not losing a table.
                    Avoid navigating through a crowded pub carrying a sizable round of drinks on a tray. The app
                    also be an excellent tool for those who are less mobile or seated far from the bar, such beer
                    gardens or on an upper floor.

                </p>
                <router-link @click="scrollToTop()" to="/about" class="btn">read more</router-link>

                <div class="icons-container">
                    <div class="icons">
                        <img src="../assets/images/serv-1.png" alt="">
                        <h3>fast technology</h3>
                    </div>
                    <div class="icons">
                        <img src="../assets/images/serv-2.png" alt="">
                        <h3>fresh drinks</h3>
                    </div>
                    <div class="icons">
                        <img src="../assets/images/serv-3.png" alt="">
                        <h3>digital transformation</h3>
                    </div>
                    <div class="icons">
                        <img src="../assets/images/serv-4.png" alt="">
                        <h3>24/7 support</h3>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
.container{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    position: center;
    margin: 8px;
    padding-left: 5px;
    position: relative;
    width: 100%;
    left: 0;
    right: 0;
    margin-top: 90px;
    
}

.h1 {
  position: fixed;
  margin-top: 0px;
}

.home-about {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    background: #f7f7f7;
}
.home-about .image {
    flex: 1 1 40rem;
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
}
.home-about .content .title {
    font-size: 3rem;
    padding-top: .5rem;
    color: #130f40;
}
.home-about .content p {
    padding: 1rem 0;
    line-height: 2;
    font-size: 1.4rem;
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
</style>