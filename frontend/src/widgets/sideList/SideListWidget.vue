<script setup lang="ts">
import {
  BellIcon,
  HomeIcon,
  SearchIcon,
  WorkSpaceIcon,
  CollegeIcon,
  WorkIcon,
  FamilyIcon,
  OthersIcon,
  ArrowIcon,
  ImageIcon,
  DocumentIcon,
  MusicNoteIcon,
  TrashIcon,
} from '@/shared/assets/icons'
import { ref, shallowRef } from 'vue'

const isActive = ref(0)
const activeNav = 'rounded-lg flex items-center gap-x-3 py-2 px-4 bg-blue-500/10'
const inActiveNav = 'rounded-lg flex items-center gap-x-3 py-2 px-4'

const list = shallowRef([
  { txt: 'Home', icon: HomeIcon, nav: '/' },
  { txt: 'Workspaces', icon: WorkSpaceIcon, nav: '/' },
  { txt: 'Search', icon: SearchIcon, nav: '/' },
  { txt: 'Notifications', icon: BellIcon, nav: '/' },
])

const workSpaces = shallowRef([
  { txt: 'College', icon: CollegeIcon },
  { txt: 'Work', icon: WorkIcon },
  { txt: 'Family', icon: FamilyIcon },
  { txt: 'Others', icon: OthersIcon },
])

const categories = shallowRef([
  { txt: 'Images', icon: ImageIcon },
  { txt: 'Documents', icon: DocumentIcon },
  { txt: 'Audio', icon: MusicNoteIcon },
  { txt: 'Trash', icon: TrashIcon },
])
</script>
<template>
  <div class="flex flex-col gap-y-10">
    <div class="flex flex-col gap-y-2">
      <RouterLink
        :to="item.nav"
        @click="isActive = i"
        :class="i == isActive ? activeNav : inActiveNav"
        v-for="(item, i) in list"
        :key="i"
      >
        <component class="size-5" :is="item.icon" />
        <p class="">{{ item.txt }}</p>
      </RouterLink>
    </div>
    <div class="">
      <div class="flex gap-2 px-4">
        <p>Workspaces</p>
        <ArrowIcon />
      </div>
      <div
        class="rounded-lg flex items-center gap-x-3 py-2 px-4"
        v-for="(item, i) in workSpaces"
        :key="i"
      >
        <component class="size-5" :is="item.icon" />
        <p class="">{{ item.txt }}</p>
      </div>
    </div>
    <div class="">
      <div class="flex gap-2 px-4">
        <p>Categories</p>
        <ArrowIcon />
      </div>
      <div
        class="rounded-lg flex items-center gap-x-3 py-2 px-4"
        v-for="(item, i) in categories"
        :key="i"
      >
        <component class="size-5" :is="item.icon" />
        <p class="">{{ item.txt }}</p>
      </div>
    </div>
  </div>
</template>
