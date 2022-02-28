<template>
  <div> 从明天起，做一个幸福的人 </div>
</template>

<script lang="ts" setup>
  import { useHead } from '@vueuse/head';
  useHead({
    title: '一日三饭',
    meta: [{ name: 'description', content: '从明天起，做一个幸福的人' }],
  });
</script>
