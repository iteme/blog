<template>
  <nav id="navbar" class="text-center w-full">
    <div
      class="flex flex-col mx-auto max-w-screen-xl py-2 px-8 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="flex flex-col space-x-4 items-center lg:flex-row xl:space-x-8">
        <div class="flex flex-row w-full py-6 items-center justify-between">
          <div class="w-40">
            <a href="/" class="font-bold text-2xl"> 一日三饭 </a>
          </div>
          <button class="lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <img src="@/assets/svg/menu.svg" class="h-8" />
          </button>
        </div>
        <ul
          :class="open ? 'flex' : 'hidden lg:flex'"
          class="flex flex-col flex-grow h-auto space-y-3 w-full origin-top pb-4 duration-300 lg:flex-row lg:space-y-0 lg:pb-0 lg:items-center lg:justify-end xl:space-x-2"
        >
          <li v-for="item in menus" :key="item.name" class="w-full whitespace-nowrap">
            <a class="bg-transparent text-lg py-2 md:px-4" :href="item.href">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  const open = ref(false);

  const menus = [{ name: '首页', href: '/' }];
</script>
