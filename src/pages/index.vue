<template>
  <section id="home" class="flex h-100vh items-center justify-center">
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
  #home {
    height: calc(100vh - 5rem);
    background: url('@/assets/svg/home.svg');
    background-size: cover;
    background-position: center;
  }

  .scale-up-top {
    animation: scale-up-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes scale-up-top {
    0% {
      transform: scale(0.5);
      transform-origin: 50% 0;
    }
    100% {
      transform: scale(1);
      transform-origin: 50% 0;
    }
  }
</style>
