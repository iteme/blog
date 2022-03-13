<template>
  <section class="bg-home text-white min-h-100vh">
    <nav-bar />
    <h1 class="font-bold text-center pt-50 text-3xl">从明天起，做一个幸福的人</h1>
  </section>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>

<script lang="ts" setup>
  import NavBar from '@/components/NavBar.vue';
  import { useHead } from '@vueuse/head';
  useHead({
    title: '一日三饭',
    meta: [{ name: 'description', content: '从明天起，做一个幸福的人' }],
  });
</script>

<style>
  .bg-home {
    background: url('@/assets/svg/home.svg');
    background-size: cover;
    background-position: center;
  }
</style>
