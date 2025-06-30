<script setup lang="ts">
import { useUserStore } from '@/entities/user'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

const store = useUserStore()
const { errors } = storeToRefs(store)

const signinContent = reactive({ name: '', email: '', password: '', password_confirmation: '' })
</script>
<template>
  <form
    class="flex flex-col w-96 gap-y-7"
    @submit.prevent="
      () =>
        store.authentificate('register', {
          name: signinContent.name,
          email: signinContent.email,
          password: signinContent.password,
          password_confirmation: signinContent.password_confirmation,
        })
    "
  >
    <div class="">
      <input
        type="text"
        class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
        name="login"
        placeholder="Login"
        v-model="signinContent.name"
      />
      <p class="text-red-600" v-if="errors?.name">{{ errors?.name[0] }}</p>
    </div>

    <div class="">
      <input
        type="email"
        class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
        placeholder="Email"
        name="email"
        v-model="signinContent.email"
      />
      <p class="text-red-600" v-if="errors">{{ errors?.email[0] }}</p>
    </div>

    <div class="">
      <input
        type="password"
        name="password"
        placeholder="Password"
        class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
        v-model="signinContent.password"
      />
      <p class="text-red-600" v-if="errors">{{ errors?.password[0] }}</p>
    </div>

    <div class="">
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
        v-model="signinContent.password_confirmation"
      />
      <p class="text-red-600" v-if="errors">{{ errors?.password[0] }}</p>
    </div>

    <button class="h-16 bg-[#1F41BB] w-96 text-white rounded-[9px]">Sign Up</button>
  </form>
</template>
