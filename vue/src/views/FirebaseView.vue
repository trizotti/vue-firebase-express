<template>
  <div class="about">
    <div>
      <h1>Using Firebase</h1>
      This template allows you to use Firebase Cloud Functions as an Express
      application and Vue deployed as a static website with Hosting. To get the
      API base URL just use the useApiBaseUrl composable to get a baseUrl
      string.
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
h1 {
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
}
</style>
