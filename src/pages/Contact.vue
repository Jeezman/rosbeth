<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import ContactContent from "../components/ContactContent.vue";
export default {
  name: "Contact",
  components: {
    Navigation,
    Footer,
    ContactContent,
  },
};
</script>

<template>
  <Navigation />
  <ContactContent />
  <Footer />
</template>

<style></style>
