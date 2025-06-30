<script setup lang="ts">
import RegisterForm from './RegisterForm.vue'
</script>
<template>
  <div class="py-3 px-4 flex flex-col justify-center items-center h-full gap-y-14">
    <div class="flex flex-col gap-y-1.5 text-center w-96">
      <p class="text-[30px] font-bold mb-5">Create account</p>
      <p class="font-bold">Create an account so you can explore all the file manager features</p>
      <RegisterForm />
      <RouterLink class="font-bold text-[18px]" to="/login"
        >Or click here if you already hane an account</RouterLink
      >
    </div>
  </div>
</template>
