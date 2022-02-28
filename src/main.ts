import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from '@/App.vue';
import 'vue-global-api';
import 'virtual:windi.css';
import '@/assets/styles/main.css';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes });
