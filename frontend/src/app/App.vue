<script setup lang="ts">
import { SideListWidget } from '@/widgets/sideList'
import { HeaderWidget } from '@/widgets/header'
</script>

<template>
  <div class="flex text-[16px] bg-white text-black">
    <div class="bg-[#F6F6F6] w-64 min-h-screen px-2 py-4"><SideListWidget /></div>
    <div class="w-screen py-3 px-4"><HeaderWidget /><RouterView /></div>
  </div>
</template>
