<script setup lang="ts">
import { HomeIcon, UploadIcon, ArrowIcon } from '@/shared/assets/icons'
import { DefaultAvatar } from '@/shared/assets/imgs'
</script>
<template>
  <div class="flex justify-between min-w-max">
    <div class="flex gap-2 items-center">
      <HomeIcon />
      <p>Home</p>
    </div>
    <input
      type="text"
      placeholder="Search"
      class="bg-zinc-100 rounded-lg h-8 px-4 py-3 font-medium w-130"
    />
    <div class="flex gap-x-8 items-center">
      <button class="h-8 p-3 bg-blue-500 rounded-lg inline-flex justify-start items-center gap-2">
        <UploadIcon />
        <p class="text-white font-medium">Upload file</p>
      </button>
      <div class="flex gap-x-3">
        <img :src="DefaultAvatar" alt="" srcset="" />
        <p class="">Cody</p>
        <ArrowIcon />
      </div>
    </div>
  </div>
</template>
