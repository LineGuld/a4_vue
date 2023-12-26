<script setup lang="ts">
import { ref, PropType } from 'vue'
import type { User } from '../api/model';

defineProps({
  msg: String,
  user:{
    type: Object as PropType<User>
  } 
})

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>Welcome {{ user.username }}</h2>
  Here is your token: {{ user?.token }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
