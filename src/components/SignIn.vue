<script setup lang="ts">
import { User } from '../api/model';
import { ref } from 'vue'
import{signIn} from '../api/api'

const username = ref('username')
const password = ref('password')
  
</script>

<template>
    <h2>Please sign in</h2>
  <!--
  We can create two-way bindings between state and form inputs using the v-model directive.
  -->
    <input v-model="username" placeholder="username"> <br>
    <input type="password" v-model="password" placeholder="password"><br>
    <button @click="$emit('submit', {username, password})">Sign in</button>
</template>

