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
import { ref } from 'vue'

const isActive = ref(0)
const activeNav = 'rounded-lg flex items-center gap-x-3 py-2 px-4 bg-blue-500/10'
const inActiveNav = 'rounded-lg flex items-center gap-x-3 py-2 px-4'

const list = ref([
  { txt: 'Home', icon: HomeIcon },
  { txt: 'Workspaces', icon: WorkSpaceIcon },
  { txt: 'Search', icon: SearchIcon },
  { txt: 'Notifications', icon: BellIcon },
])

const workSpaces = ref([
  { txt: 'College', icon: CollegeIcon },
  { txt: 'Work', icon: WorkIcon },
  { txt: 'Family', icon: FamilyIcon },
  { txt: 'Others', icon: OthersIcon },
])

const categories = ref([
  { txt: 'Images', icon: ImageIcon },
  { txt: 'Documents', icon: DocumentIcon },
  { txt: 'Audio', icon: MusicNoteIcon },
  { txt: 'Trash', icon: TrashIcon },
])
</script>
<template>
  <div class="flex flex-col gap-y-10">
    <div class="flex flex-col gap-y-2">
      <div
        @click="isActive = i"
        :class="i == isActive ? activeNav : inActiveNav"
        v-for="(item, i) in list"
      >
        <component class="size-5" :is="item.icon" />
        <p class="">{{ item.txt }}</p>
      </div>
    </div>
    <div class="">
      <div class="flex gap-2 px-4">
        <p>Workspaces</p>
        <ArrowIcon />
      </div>
      <div class="rounded-lg flex items-center gap-x-3 py-2 px-4" v-for="(item, i) in workSpaces">
        <component class="size-5" :is="item.icon" />
        <p class="">{{ item.txt }}</p>
      </div>
    </div>
    <div class="">
      <div class="flex gap-2 px-4">
        <p>Categories</p>
        <ArrowIcon />
      </div>
      <div class="rounded-lg flex items-center gap-x-3 py-2 px-4" v-for="(item, i) in categories">
        <component class="size-5" :is="item.icon" />
        <p class="">{{ item.txt }}</p>
      </div>
    </div>
  </div>
</template>
