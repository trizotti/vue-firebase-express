<template>
  <div class="main-container">
    <q-avatar size="120px"
      ><img src="https://avatars.githubusercontent.com/u/26180773?v=4"
    /></q-avatar>

    <div class="message-container">
      <h1 class="center-text">Made by Trizotti with</h1>
      <div class="tech-container">
        <img src="@/assets/firebase.png" />
        <img src="@/assets/vue.png" />
        <img src="https://trizotti.github.io/_nuxt/img/quasar.a1cd01f.svg" />
      </div>
      <div class="center-text button-container">
        <q-btn
          no-caps
          class="action-button"
          @click="goToGitHub"
          label="View profile on Github"
        />
      </div>
      <div class="center-text lower-button-container">
        <router-link to="/">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const goToGitHub = () => {
  open('https://github.com/trizotti', '_newtab')
}
</script>
