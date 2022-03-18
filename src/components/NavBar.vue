<template>
  <nav id="navbar" class="bg-[#266a83] h-20 text-center text-white w-full">
    <div
      class="flex flex-col mx-auto max-w-screen-xl px-8 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="flex flex-col items-center lg:flex-row xl:space-x-8">
        <div class="flex flex-row w-full py-6 items-center justify-between">
          <div class="w-40">
            <a href="/">
              <img src="@/assets/svg/logo.svg" alt="" class="h-6" />
            </a>
          </div>
          <button class="lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <img src="@/assets/svg/menu.svg" class="h-8" />
          </button>
        </div>
        <ul
          :class="open ? 'flex' : 'hidden lg:flex'"
          class="flex flex-col h-auto space-y-3 bg-[#266a83] origin-top pb-4 w-100vw duration-300 lg:flex-row lg:space-y-0 lg:w-full lg:pb-0 lg:items-center"
        >
          <li v-for="item in menus" :key="item.name" class="w-full whitespace-nowrap">
            <a class="bg-transparent text-lg py-2 px-4" :href="item.href">
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

  const menus = [{ name: '导航', href: '/nav' }];
</script>
