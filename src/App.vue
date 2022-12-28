<template>
  <h2>Products</h2>
  <div
    v-for="product in products.store"
    :key="product.sku"
  >
    <button @click="cart.add(product)">Add</button>
    <span>{{ product.sku }}</span>
  </div>

  <h2>Cart ({{ cart.count }})</h2>
  <div
    v-for="product in cart.store"
    :key="product.sku"
  >
    <button @click="cart.remove(product)">Remove</button>
    <input
      type="number"
      name="cartQuantity"
      id="cartQuantity"
      min="0"
      v-model="product.quantity"
    />
    <span> {{ product.sku }}</span>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

const products = useProductsStore();
const cart = useCartStore();

// För att göra något om kvantitet blir 0
watch(cart.store, () => {
  if (cart.store.some((product) => product.quantity === 0)) {
    console.log('it zero');
  }
});
</script>
