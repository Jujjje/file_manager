<script setup lang="ts">
import { useUserStore } from '@/entities/user'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'

const store = useUserStore()
const { errors } = storeToRefs(store)

const signinContent = reactive([{ input: '' }, { input: '' }, { input: '' }, { input: '' }])
</script>
<template>
  <div class="py-3 px-4 flex flex-col justify-center items-center h-full gap-y-14">
    <div class="flex flex-col gap-y-1.5 text-center w-96">
      <p class="text-[30px] font-bold">Create account</p>
      <p class="font-bold">Create an account so you can explore all the file manager features</p>
    </div>
    <form
      class="flex flex-col w-96 gap-y-7"
      @submit.prevent="
        () =>
          store.authentificate('register', {
            name: signinContent[0].input,
            email: signinContent[1].input,
            password: signinContent[2].input,
            password_confirmation: signinContent[3].input,
          })
      "
    >
      <div class="">
        <input
          type="text"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          name="login"
          placeholder="Login"
          v-model="signinContent[0].input"
        />
        <p class="text-red-600" v-if="errors?.name">{{ errors?.name[0] }}</p>
      </div>

      <div class="">
        <input
          type="email"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          placeholder="Email"
          name="email"
          v-model="signinContent[1].input"
        />
        <p class="text-red-600" v-if="errors">{{ errors?.email[0] }}</p>
      </div>
      <div class="">
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          v-model="signinContent[2].input"
        />
        <p class="text-red-600" v-if="errors">{{ errors?.password[0] }}</p>
      </div>
      <div class="">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          v-model="signinContent[3].input"
        />
        <p class="text-red-600" v-if="errors">{{ errors?.password[0] }}</p>
      </div>

      <button class="h-16 bg-[#1F41BB] w-96 text-white rounded-[9px]">Sign Up</button>
    </form>
  </div>
</template>
