import { createApp } from 'vue'; // Import createApp from Vue
import App from './App.vue';
import router from './router';

const app = createApp(App); // Create a Vue app instance

app.use(router); // Use the router configuration

app.mount('#app'); // Mount the app to the DOM element with id 'app'
