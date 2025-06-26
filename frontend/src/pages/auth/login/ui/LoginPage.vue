<script setup lang="ts">
import { useUserStore } from '@/entities/user'
import { storeToRefs } from 'pinia'
import { reactive, watch } from 'vue'

const store = useUserStore()
const { errors } = storeToRefs(store)

const loginContent = reactive([{ input: '' }, { input: '' }])
</script>
<template>
  <div class="py-3 px-4 flex flex-col justify-center items-center h-full gap-y-14">
    <div class="flex flex-col gap-y-1.5 text-center w-96">
      <p class="text-[30px] font-bold">Enter account</p>
      <p class="font-bold">Log in account so you can explore all the file manager features</p>
    </div>
    <form
      class="flex flex-col w-96 gap-y-7"
      @submit.prevent="
        () =>
          store.authentificate('login', {
            email: loginContent[0].input,
            password: loginContent[1].input,
          })
      "
    >
      <div class="">
        <input
          type="email"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          name="email"
          placeholder="Email"
          v-model="loginContent[0].input"
          required
        />
        <p class="text-red-600" v-if="errors">
          {{
            errors.email == 'The provided credentinals are incorect'
              ? errors.email
              : errors.email[0]
          }}
        </p>
      </div>

      <div class="">
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="h-16 w-96 pl-5 pr-9 py-5 bg-blue-50 rounded-[10px]"
          v-model="loginContent[1].input"
          required
        />
        <p class="text-red-600" v-if="errors?.password">{{ errors.password[0] }}</p>
      </div>

      <button class="h-16 bg-[#1F41BB] w-96 text-white rounded-[9px]">Log in</button>
    </form>
  </div>
</template>
