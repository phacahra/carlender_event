import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure this is the correct path
import './assets/styles.css'; // Check if this file exists


createApp(App)
  .use(router)
  .mount('#app');
