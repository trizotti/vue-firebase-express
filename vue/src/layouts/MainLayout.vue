<template>
  <q-layout class="root-container">
    <router-view />
  </q-layout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

body {
  font-family: 'Ubuntu';
}

.root-container {
  background-color: #efefef;
}

.main-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message-container {
  max-width: 500px;
  text-align: justify;
  box-sizing: border-box;
  padding: 32px;
}

.tech-container {
  max-width: 500px;
  text-align: center;
  box-sizing: border-box;
  padding: 32px;
}

.tech-container img {
  width: 50px;
}

h1 {
  font-size: x-large;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

img {
  width: 120px;
}

.center-text {
  text-align: center;
}

.button-container {
  margin-top: 32px;
}

.action-button {
  background-color: #42b883;
  color: white;
  font-weight: 700;
}

.message-text {
  color: #3c3c3cb3;
}

.lower-button-container {
  margin-top: 32px;
}
</style>
