<script>
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<template>
  <Navigation />
  <div class="container">
    <div class="row">
      <div class="col-md-12 mt-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>
