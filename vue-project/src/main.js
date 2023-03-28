import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/routes.js';

let router = createRouter({
    history: createWebHistory(),
    routes: routes
});
router.onError((error, to) => {
    if (error.message.includes('Failed to fetch dynamically imported module')) {
      window.location = to.fullPath
    }
  });
const app = createApp(App)
app.use(router);
app.mount('#app');