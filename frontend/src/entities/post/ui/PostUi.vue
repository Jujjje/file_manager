<script setup lang="ts">
defineProps<{
  post: {
    title: string | undefined
    name: string | undefined
    body: string | undefined
    id: number | undefined
  }
}>()
</script>
<template>
  <div class="">
    <p class="font-bold text-[20px]">{{ post.title }}</p>
    <p class="text-gray-400">Posted by {{ post.name }}</p>
    <p>{{ post.body }}</p>
    <RouterLink class="text-blue-500" :to="'/post/' + post.id">Read more...</RouterLink>
  </div>
</template>
