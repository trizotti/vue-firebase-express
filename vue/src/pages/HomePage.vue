<template>
  <div class="main-container">
    <img src="@/assets/vue-fire.png" />
    <div class="message-container">
      <h1 class="center-text">Your Vue 3 setup is ready!</h1>
      <div class="message-text">
        This template allows you to use Firebase Cloud Functions as an Express
        application, and also deploy your SPA as a static website with Hosting.
        You'll also enjoy building the UI with amazing components from Quasar.
      </div>
      <div class="center-text button-container">
        <q-btn
          no-caps
          class="action-button"
          @click="testApi"
          label="Test Cloud Functions API"
        />
      </div>
      <div class="center-text lower-button-container">
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import useApiBaseUrl from '@/composables/useApiBaseUrl'
import axios from 'axios'

const route = useRoute()
const { baseUrl } = useApiBaseUrl()
const testApi = () => {
  axios.get(baseUrl + '/hello-world').then((res) => {
    alert(res.data)
  })
}
</script>
