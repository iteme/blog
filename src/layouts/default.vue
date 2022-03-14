<template>
  <nav-bar />
  <router-view />
  <footer-bar />
</template>

<script lang="ts" setup>
  import NavBar from '@/components/NavBar.vue';
  import FooterBar from '@/components/FooterBar.vue';
</script>
