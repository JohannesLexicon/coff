import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const store = ref([]);
  // Map hämtar ut alla kvantiteter och lägger dem i en array
  // Reduce adderar kvantiteterna, med start från 0
  const count = computed(() =>
    store.value
      .map((product) => product.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  );

  const add = (product) => {
    const index = store.value.findIndex((_product) => _product.sku === product.sku);

    if (index === -1) {
      store.value.push({ ...product, quantity: 1 });
    } else {
      store.value[index].quantity++;
    }
  };

  const remove = (product) => {
    const index = store.value.findIndex((_product) => _product.sku === product.sku);

    if (index > -1) {
      store.value.splice(index, 1);
    }
  };

  return { store, count, add, remove };
});
