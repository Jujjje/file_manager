<script setup lang="ts">
import { useUserStore } from '@/entities/user'
import { HeaderWidget } from '@/widgets/header'
import { onMounted } from 'vue'

const store = useUserStore()

onMounted(() => {
  store.getUser()
})
</script>
<template>
  <div class="py-3 px-4"><HeaderWidget /></div>
</template>
