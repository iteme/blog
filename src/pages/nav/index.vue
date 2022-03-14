<template>
  <div class="mx-auto max-w-screen-lg py-20 px-3">
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
