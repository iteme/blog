<template>
  <section class="bg-home flex h-100vh items-center justify-center">
    <div class="font-bold text-white scale-up-top text-3xl">从明天起，做一个幸福的人</div>
  </section>
</template>

<script lang="ts" setup>
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
