import { ref } from 'vue';
import { defineStore } from 'pinia';

// Overkill med Pinia här
export const useProductsStore = defineStore('products', () => {
  const store = ref([
    { sku: 'Mocca Monster' },
    { sku: 'Java Mifty' },
    { sku: 'Leifs Kaffeloppa' },
    { sku: 'Nabkaf' },
  ]);

  return { store };
});
