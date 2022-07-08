<script>
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import PolicyContent from "../components/PolicyContent.vue";
export default {
  name: "PrivacyPolicy",
  components: {
    Navigation,
    Footer,
    PolicyContent,
  },
};
</script>

<template>
  <Navigation />
  <PolicyContent />
  <Footer />
</template>

<style></style>
