import type { IFormData, IPost } from '@/shared/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostStore = defineStore('post', () => {
  const errors = ref()
  const posts = ref<IPost[]>()

  async function getAllPosts() {
    const res = await fetch('/api/posts')
    const data = await res.json()
    if (data.errors) {
      errors.value = data
    } else {
      posts.value = data
      console.log(posts.value)
    }
  }
  async function createPost(formData: IFormData) {
    const res = await fetch('/api/posts', {
      method: 'Post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (data.errors) {
      errors.value = data.errors
    } else {
      console.log(data)
    }
  }
  return { errors, posts, createPost, getAllPosts }
})
