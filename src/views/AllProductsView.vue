<template>
  <div class="container">
    <div
      v-for="product in products.store"
      :key="product.sku"
      class="item"
    >
      <div>
        <span class="bold">{{ product.sku }}</span>
      </div>
      <div>
        <a
          @click="cart.add(product)"
          class="coin"
          >{{ product.price }} 💰
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';

const products = useProductsStore();
const cart = useCartStore();
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding-block: 8px;
  border-bottom: 1px solid #00000021;
}
.coin {
  display: block;
  align-items: center;
  background-color: #44403c;
  cursor: pointer;
  width: 6rem;
  text-align: end;
  font-weight: bold;
  color: #fafaf9;
  padding: 4px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.coin:hover {
  background-color: black;
  color: white;
}
</style>
