<template>
  <TheNavbar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
body {
  background-color: #fafaf9;
  color: #1e293b;
  font-size: large;
}
.container {
  max-width: 40rem;
  margin-inline: auto;
  padding-inline: 4px;
}
.color-primary {
  color: #292524;
}
.bold {
  font-weight: bold;
}
</style>
