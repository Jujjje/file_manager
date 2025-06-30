<script setup lang="ts">
import { usePostStore } from '@/entities/post'

defineProps<{
  post: {
    title: string | undefined
    name: string | undefined
    body: string | undefined
    id: number | undefined
  }
}>()

const postStore = usePostStore()
const { updatePost } = postStore
</script>
<template>
  <form class="flex flex-col w-96 gap-y-7">
    <input
      type="text"
      class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
      name="title"
      :placeholder="post.title"
      v-model="post.title"
      required
    />

    <textarea
      v-model="post.body"
      :placeholder="post.body"
      name="body"
      class="min-h-[45vh] w-[50vw] pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
      required
    ></textarea>

    <div class="flex gap-x-5">
      <RouterLink
        to="/"
        class="font-bold flex justify-center items-center h-16 bg-[#1F41BB] w-50 text-white rounded-[9px]"
        >Cancel update</RouterLink
      >
      <button
        @click="() => updatePost({ title: post.title, body: post.body }, post.id)"
        class="font-bold h-16 bg-green-500 w-50 text-white rounded-[9px]"
      >
        Update post
      </button>
    </div>
  </form>
</template>
