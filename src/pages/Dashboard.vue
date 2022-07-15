<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
  methods: {
    search(val) {},
  },
};
</script>

<template>
  <Sidebar @search-input-emit="search" />
  <router-view />
</template>

<style></style>
