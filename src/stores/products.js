import { ref } from 'vue';
import { defineStore } from 'pinia';

// Overkill med Pinia här
export const useProductsStore = defineStore('products', () => {
  const store = ref([
    { sku: 'Mocca Monster', price: 500 },
    { sku: 'Java Mifty', price: 200 },
    { sku: 'Leifs Kaffeloppa', price: 2000 },
    { sku: 'Nabkaf', price: 5 },
  ]);

  return { store };
});
