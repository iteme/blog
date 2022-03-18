<template>
  <div class="mx-auto max-w-screen-lg py-10 px-3">
    <section v-for="bookmark in bookmarks" :key="bookmark.title" class="fade-in-left">
      <h1 class="font-bold text-xl text-center pt-4 lg:text-left">{{ bookmark.title }}</h1>
      <div class="flex flex-row flex-wrap">
        <a v-for="item in bookmark.items" :key="item.name" :href="item.url">
          <p class="rounded-xl space-x-2 bg-[#f1f6f8] shadow-sm my-4 mx-2 mb-1 py-3 px-4 w-35">
            <img :src="item.logo" alt="" class="h-4 mb-1 inline-block" />
            <span>{{ item.name }}</span>
          </p>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import bookmarks from '@/config/bookmark';
</script>

<style>
  .fade-in-left {
    animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.2s both;
  }
  @keyframes fade-in-left {
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
