<script setup lang="ts">
import { usePostStore } from '@/entities/post'
import type { IFormData } from '@/shared/types'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const postStore = usePostStore()
const { getPost, updatePost, deletePost } = postStore

onMounted(async () => {
  await getPost(+router.params.id)
})

const { post } = storeToRefs(postStore)
const router = useRoute()
const isEdit = ref(false)
const updatedPost = ref({
  title: post.value?.title,
  body: post.value?.body,
})
</script>
<template>
  <div class="py-3 px-4 flex gap-y-6 flex-col">
    <div class="flex gap-x-2 min-h-20">
      <div class="w-1 h- bg-blue-500"></div>
      <div class="" v-if="!isEdit">
        <p class="font-bold text-[20px]">{{ post?.title }}, {{ post?.id }}</p>
        <p class="text-gray-400">Posted by {{ post?.user.name }}</p>
        <p>{{ post?.body }}</p>
        <div class="flex gap-x-3 mt-4">
          <button
            @click="
              () => {
                deletePost(post!.id)
              }
            "
            class="bg-red-500 py-1 px-3 text-white font-bold"
          >
            Delete
          </button>
          <button
            @click="() => (isEdit = true)"
            class="bg-green-500 py-1 px-3 text-white font-bold"
          >
            Update
          </button>
        </div>
      </div>
      <form class="flex flex-col w-96 gap-y-7" @submit.prevent="() => (isEdit = false)" v-else>
        <input
          type="text"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          name="title"
          :placeholder="updatedPost.title"
          v-model="updatedPost.title"
          required
        />

        <textarea
          v-model="updatedPost.body"
          :placeholder="updatedPost.body"
          name="body"
          class="min-h-[45vh] w-[50vw] pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          required
        ></textarea>

        <div class="flex gap-x-5">
          <button class="h-16 bg-[#1F41BB] w-50 text-white rounded-[9px]">Cancel update</button>
          <button
            @click="
              () => {
                updatePost({ title: updatedPost.title, body: updatedPost.body }, post!.id)
              }
            "
            class="h-16 bg-green-500 w-50 text-white rounded-[9px]"
          >
            Update post
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
