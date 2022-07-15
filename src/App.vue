<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import Home from "./pages/Home.vue";
import Footer from "./components/Footer.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";

export default {
  name: "App",
  components: {},
};
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-md-12 mt-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>
