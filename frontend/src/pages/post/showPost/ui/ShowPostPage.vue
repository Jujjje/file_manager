<script setup lang="ts">
import { usePostStore } from '@/entities/post'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { PostUi } from '@/entities/post'
import { useRoute } from 'vue-router'
import { PostUpdater } from '@/widgets/post'

const postStore = usePostStore()
const { getPost, deletePost } = postStore

const router = useRoute()
const isEdit = ref(false)

onMounted(async () => {
  await getPost(+router.params.id)
})

const { post } = storeToRefs(postStore)

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
        <PostUi
          :post="{ title: post?.title, body: post?.body, id: post?.id, name: post?.user.name }"
        />
        <div class="flex gap-x-3 mt-4">
          <button
            @click="() => deletePost(post!.id)"
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
      <PostUpdater
        v-else
        :post="{
          title: updatedPost.title,
          body: updatedPost.body,
          id: post?.id,
          name: post?.user.name,
        }"
      />
    </div>
  </div>
</template>
