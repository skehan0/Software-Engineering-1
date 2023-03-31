<template>
    <div>
        <div class="home-main">
            <div class="content">
                <span>Welcome to Spice</span>
              
                <p>We provide the technology to deliver fresh drinks to you.</p>
                <router-link @click="scrollToTop()" to="#" class="btn">Order now from one of our partners!</router-link>
            </div>
        </div>


        <div class="home-category">
            <router-link @click="scrollToTop()" to="/CreateOrder" class="box">
                <img src="../assets/flame.png" alt="">
                <h3>Sult</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/BackDoorCreateOrder" class="box">
                <img src="../assets/drinks.png" alt="">
                <h3>Back Door</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/HuskersCreateOrder" class="box">
                <img src="../assets/cocktail.png" alt="">
                <h3>Huskers</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/XIXCreateOrder" class="box">
                <img src="../assets/flame.png" alt="">
                <h3>XIX</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/ZionCreateOrder" class="box">
                <img src="../assets/drinks.png" alt="">
                <h3>Zion</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/8CreateOrder" class="box">
                <img src="../assets/cocktail.png" alt="">
                <h3>8</h3>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style scoped>
.home-main,
.home-about,
.home-banner,
.home-category {
    padding: 2rem 9%;
}
.home-main {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 2rem;
    position: relative;
    overflow: hidden;
}
.home-main .content {
    flex: 1 1 41rem;
}
.home-main .content span {
    font-size: 2rem;
    color: #27ae60;
}
.home-main .content h3 {
    font-size: 4rem;
    color: #130f40;
    padding-top: 1rem;
}
.home-main .content p {
    font-size: 1.4rem;
    color: #666;
    line-height: 2;
    padding: 1rem 0;
}
.home-main .image {
    flex: 1 1 41rem;
    margin: 2rem 0;
    pointer-events: none;
}
.home-main .image .home-img {
    width: 100%;
    margin-top: 5rem;
}
.home-main .home-parallax-img {
    position: absolute;
    top: -15rem;
    right: -15rem;
    width: 80vw;
}
/* home category */
.home-category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1.5rem;
    padding-bottom: 5rem;
}
.home-category .box {
    padding: 2rem;
    text-align: center;
    border-radius: .5rem;
    background: #f7f7f7;
}
.home-category .box:hover {
    background: #27ae60;
}
.home-category .box:hover h3 {
    color: #fff;
}
.home-category .box img {
    height: 7rem;
}
.home-category .box h3 {
    font-size: 1.8rem;
    color: #130f40;
}
/* home banner */

@media (max-width: 576px) {
    .home-main .content h3 {
        font-size: 3rem;
    }
    .home-main .content p {
        font-size: 1.5rem;
    }
}
</style>