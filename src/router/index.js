import { createRouter, createWebHistory } from 'vue-router'; // Import necessary functions from vue-router
import MerchantPage from '../components/MerchantPage.vue';
import PaymentPage from '../components/PaymentPage.vue';

const routes = [
  { path: '/', component: MerchantPage },
  { path: '/payment', name: 'PaymentPage', component: PaymentPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use createWebHistory for browser history mode
  routes,
});

export default router;
