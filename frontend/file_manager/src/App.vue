<script setup lang="ts">
import AutoComplete from 'primevue/autocomplete'

import Checkbox from 'primevue/checkbox'
</script>

<template>
  <p>asdasd</p>
  <AutoComplete v-model="value" :suggestions="items" @complete="search" />
</template>
