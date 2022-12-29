<template>
  <div class="container">
    <template v-if="cart.store.length">
      <div
        v-for="product in cart.store"
        :key="product.sku"
        class="item"
      >
        <div>
          <span class="bold">{{ product.sku }}</span>
        </div>
        <div>
          <span>{{ product.price }} 💰</span>
          <input
            type="number"
            min="0"
            @keypress="positiveInput.keypress"
            @paste="positiveInput.paste"
            v-model="product.quantity"
            class="quantity"
          />
          <button @click="cart.remove(product)">Remove</button>
        </div>
      </div>
      <div class="subtotal">
        <span class="bold">{{ cart.subtotal }} 💰</span>
      </div>
    </template>
    <template v-else>empty</template>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useCartStore } from '@/stores/cart';
import * as positiveInput from '@/utils/validation/positiveinput.js';

const cart = useCartStore();

watch(cart.store, () =>
  cart.store.forEach((product) => {
    if (product.quantity === 0) {
      // För att göra något om kvantitet blir 0
    }
  })
);
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-block: 16px;
}
.quantity {
  width: 4rem;
  text-align: end;
}
.subtotal {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  text-align: end;
}
</style>
