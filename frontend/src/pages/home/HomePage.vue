<script setup lang="ts">
import { usePostStore } from '@/entities/post/model/PostStore'
import { useUserStore } from '@/entities/user'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const userStore = useUserStore()
const postStore = usePostStore()
const { posts } = storeToRefs(postStore)
onMounted(() => {
  userStore.getUser()
  postStore.getAllPosts()
})

console.log(posts.value)
</script>
<template>
  <div class="py-3 px-4 flex gap-y-6 flex-col">
    <div class="flex gap-x-2 min-h-20" :key="post.id" v-for="post in posts">
      <div class="w-1 h- bg-blue-500"></div>
      <div class="">
        <p class="font-bold text-[20px]">{{ post.title }}</p>
        <p class="text-gray-400">Posted by {{ post.user.name }}</p>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>
