<script setup lang="ts">
import { SideListWidget } from '@/widgets/sideList'
</script>

<template>
  <div class="flex text-[16px]">
    <div class="bg-[#F6F6F6] w-64 h-screen px-2 py-4"><SideListWidget /></div>
    <div class="w-screen"><RouterView /></div>
  </div>
</template>
