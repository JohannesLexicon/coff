import { createRouter, createWebHistory } from 'vue-router';
import AllProductsView from '@/views/AllProductsView.vue';
import CartView from '@/views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AllProductsView,
      meta: {
        title: 'Machines',
      },
    },
    {
      path: '/cart',
      component: CartView,
      meta: {
        title: 'Cart',
      },
    },
  ],
});

router.afterEach((to) => (document.title = 'coff | ' + to.meta.title));

export default router;
