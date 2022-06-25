<script setup>
import { computed } from 'vue'
import axios from 'axios'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <template #page>
      <RouterView />
    </template>
  </MainLayout>
</template>
