import type { IFormData, IPost } from '@/shared/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostStore = defineStore('post', () => {
  const errors = ref()
  const posts = ref<IPost[]>()
  const post = ref<IPost>()

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

  async function getPost(id: number) {
    const res = await fetch(`/api/posts/${id}`)
    const data = await res.json()

    if (data.errors) {
      errors.value = data
    } else {
      post.value = data
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
      //@ts-ignore explanation in main.ts
      this.router.push('/')
    }
  }

  async function deletePost(id: number) {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'Delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    const data = await res.json()

    if (data.errors) {
      errors.value = data.errors
    }

    //@ts-ignore explanation in main.ts
    this.router.push('/')
  }

  async function updatePost(formData: IFormData, id: number | undefined) {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'put',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (data.errors) {
      errors.value = data.errors
    }

    //@ts-ignore explanation in main.ts
    this.router.push('/')
  }

  return { errors, posts, createPost, getAllPosts, getPost, post, deletePost, updatePost }
})
