import type { IUser } from '@/shared/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const errors = ref()
  const user = ref()
  const token = ref()

  async function getUser() {
    if (localStorage.getItem('token')) {
      const res = await fetch('/api/user', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      const data = await res.json()

      if (res.ok) {
        user.value = data
        errors.value = null
        console.log(user.value)
      }
    }
  }

  async function authentificate(apiRoute: 'register' | 'login', formData: IUser) {
    const res = await fetch(`/api/${apiRoute}`, {
      method: 'Post',
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    if (data.errors) {
      errors.value = data.errors
    } else {
      localStorage.setItem('token', data.token)
      errors.value = null
      token.value = data.user

      //@ts-ignore explanation in main.ts
      this.router.push('/')
    }
  }

  async function logout() {
    const res = await fetch('/api/logout', {
      method: 'post',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    const data = await res.json()

    if (res.ok) {
      user.value = null
      errors.value = null
      localStorage.removeItem('token')

      //@ts-ignore explanation in main.ts
      this.router.push('/welcome')
    }
  }
  return { errors, authentificate, getUser, user, token, logout }
})
