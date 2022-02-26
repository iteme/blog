import { ViteSSG } from 'vite-ssg';
import { createHead } from '@vueuse/head';
import 'vue-global-api';
import 'virtual:windi.css';
import App from '@/App.vue';
import { routes } from '@/router';

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(createHead());
});
