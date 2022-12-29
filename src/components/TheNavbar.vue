<template>
  <div class="navbar-bg">
    <nav class="container navbar">
      <div>
        <router-link to="/">☕ coff Machines</router-link>
      </div>
      <div class="text-end">
        <router-link to="/cart">
          <template v-if="cart.count"> ({{ cart.count }})</template>
          🛒
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const cart = useCartStore();
</script>

<style scoped>
.navbar-bg {
  background-color: #d6d3d1;
  padding-block: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #1e293b;
}
.navbar .router-link-exact-active {
  color: #df4b11;
}
</style>
