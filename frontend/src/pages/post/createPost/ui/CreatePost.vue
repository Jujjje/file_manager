<script setup lang="ts">
import { usePostStore } from '@/entities/post/model/PostStore'
import { reactive } from 'vue'

const postContent = reactive({ title: '', body: '' })
const store = usePostStore()
const { createPost } = store
</script>
<template>
  <div class="py-3 px-4 flex flex-col items-left h-full gap-y-14">
    <h1 class="text-[30px] font-bold">Create post</h1>
    <form
      class="flex flex-col w-96 gap-y-7"
      @submit.prevent="() => createPost({ title: postContent.title, body: postContent.body })"
    >
      <input
        type="text"
        class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
        name="title"
        placeholder="Title"
        v-model="postContent.title"
        required
      />

      <textarea
        v-model="postContent.body"
        placeholder="body"
        name="body"
        class="min-h-[45vh] w-[50vw] pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
        required
      ></textarea>

      <button class="h-16 bg-[#1F41BB] w-96 text-white rounded-[9px]">Create post</button>
    </form>
  </div>
</template>
