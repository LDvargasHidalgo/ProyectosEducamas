<template>
  <div class="home">
    <Navbar />
    <Description />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "../pages/landing/components/Navbar.vue";
import Description from "../pages/productdetails/Description.vue";
import Footer from "../pages/landing/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Description,
    Footer,
  },
};
</script>
