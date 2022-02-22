<template>
  <div class="home">
    <Navbar />
    <Hero />
    <CardList />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "../pages/landing/components/Navbar.vue";
import Hero from "../pages/landing/components/Hero.vue";
import CardList from "../pages/landing/components/CardList.vue";
import Footer from "../pages/landing/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardList,
    Footer,
  },
};
</script>
