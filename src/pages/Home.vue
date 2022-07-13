<script>
import Carousel from "../components/Carousel.vue";
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Navigation,
    Carousel,
    Footer,
  },
};
</script>

<template>
  <Navigation />
  <Carousel />
  <Footer />
</template>

<style></style>
