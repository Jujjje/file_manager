<script setup lang="ts">
import { useUserStore } from '@/entities/user'
import { HomeIcon, UploadIcon, ArrowIcon, Logout } from '@/shared/assets/icons'
import { DefaultAvatar } from '@/shared/assets/imgs'
import { storeToRefs } from 'pinia'
const store = useUserStore()
const { logout } = store
const { user } = storeToRefs(store)
</script>
<template>
  <div class="flex justify-between items-center min-w-max">
    <div class="flex gap-2 items-center">
      <HomeIcon />
      <p>Home</p>
    </div>
    <input
      type="text"
      placeholder="Search"
      class="bg-zinc-100 rounded-lg h-8 px-4 py-3 font-medium w-130"
    />
    <div class="flex gap-x-5 items-center">
      <div class="flex gap-x-5 items-center" v-if="user">
        <button class="h-8 p-3 bg-blue-500 rounded-lg inline-flex justify-start items-center gap-2">
          <UploadIcon />
          <p class="text-white font-medium">Upload file</p>
        </button>
        <div class="flex gap-x-3">
          <img :src="DefaultAvatar" alt="" srcset="" />
          <p class="">{{ user.name }}</p>
          <ArrowIcon />
        </div>
        <form @submit.prevent="logout()">
          <button class="flex gap-x-1">
            <Logout />
            <p>Logout</p>
          </button>
        </form>
      </div>

      <div class="flex gap-x-2" v-else>
        <RouterLink to="/register">
          <button
            class="h-8 p-3 bg-blue-500 rounded-lg inline-flex justify-start items-center gap-2"
          >
            <p class="text-white font-medium">Sign in</p>
          </button>
        </RouterLink>
        <RouterLink to="/login">
          <button
            class="h-8 p-3 bg-blue-500 rounded-lg inline-flex justify-start items-center gap-2"
          >
            <p class="text-white font-medium">Log in</p>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
