import { resolve } from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-md';
import markdownitPrism from 'markdown-it-prism';
import markdownitAnchor from 'markdown-it-anchor';
import LinkAttributes from 'markdown-it-link-attributes';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        md.use(markdownitPrism);
        md.use(markdownitAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '#' });
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),
    WindiCSS(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
  },
});
