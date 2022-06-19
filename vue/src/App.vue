<script setup>
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import useApiBaseUrl from "@/composables/useApiBaseUrl";
import axios from "axios";

const route = useRoute();
const { baseUrl } = useApiBaseUrl();
const testApi = () => {
  axios.get(baseUrl + "/hello-world").then((res) => {
    alert(res.data);
  });
};
const currentLogo = computed(() => {
  return route.name === "firebase" ? "firebase-logo.svg" : "logo.svg";
});
</script>

<template>
  <header>
    <img
      alt="Technology logo"
      class="logo"
      :src="currentLogo"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Firebase &amp; Vue with Express" />
      <div class="custom-actions">
        <button class="hello-world-btn" @click="testApi">Test API</button>
      </div>
      <nav>
        <RouterLink to="/">Vue</RouterLink>
        <RouterLink to="/firebase">Firebase</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
