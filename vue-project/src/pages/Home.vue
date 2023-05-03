<template>
    <div class="home">
      <div class="row-1">
      <h1>
        Join the Future of Bars and Restaurants<span class="text-warning"> With Spice </span>
      </h1>
      <p class="lead my-4">
        Spice helps bars and restaurants cut down on extra costs by eliminating the need for waiting tables and
        ordering at counters, creating an efficient means to deliver the best possible product to the consumer.
      </p>
      </div>
      <div class="row-2">
        <span>WHY CHOOSE US?</span>
        <h3 class="title">what makes spice so good?</h3>
        <p>
          Customers value the very best from their drinks. The purpose of Spice is to help pubs and restaurants
          adapt to modern technology by solving many problems such as avoiding congestion at bars. With Spice,
          you can avoid spilling a tray of drinks while you navigate through a crowded bar. Spice is also an 
          excellent tool for those who are less mobile, but still like to drink with their friends on the weekends.
          With spice, you won't ever have to move from your seat again, leaving more time for the important things in life.
        </p>
        <h3 class="subtitle">HOW DOES IT WORK?</h3>
        <p>
          Bars and restaurants register with us and create their menu. After that, users of Spice can locate any
          business registered with us and create their order by providing their table number and order details. 
          their order is sent to the POS system in the kitchen or at the barfront, and when the order has been fulfilled,
          the customer's phone will get a notification to notify them of their order. Alternatively, restaurants can choose to
          serve the items to the customer.
        </p>
        </div>
        <router-link @click="scrollToTop()" to="/about" class="btn">read more</router-link>
      </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    components: {},
    data() {},
  };
  </script>
  
  <style>

  
.home {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  margin: 90px auto 0;
  text-align: center;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 5% 0;
}

.home h1 {
  margin-top: 0;
  font-size: 3rem;
}

.home p {
  font-size: 1.6rem;
  line-height: 2.5rem;
}

.text-warning {
  color: #27ae60;
}


.home .row-2 {
}

.home .row-2 span {
  font-size: 3rem;
  font-weight: 500;
  color: #27ae60;
  display: block;
}

.home .row-2 .title {
  font-size: 3rem;
  padding-top: 0.5rem;
  color: #130f40;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
}

.home .row-2 .subtitle {
  font-size: 3rem;
  font-weight: 500;
  color: #27ae60;
  display: block;
}

.home .row-2 p {
  padding: 1rem 0;
  line-height: 2;
  font-size: 1.6rem;
  color: black;
  margin-bottom: 2rem;
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

  .home .image {
    flex: 1 1 100%;
    margin-bottom: 1rem;
  }

  .home .row-2 {
    flex: 1 1 100%;
  }

  .home .row-2 span {
    font-size: 2rem;
  }

  .home .row-2 .title {
    font-size: 2rem;
  }

  .home .row-2 p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  .home .row-2 .icons-container .icons h3 {
    font-size: 1.3rem;
  }
}
</style>