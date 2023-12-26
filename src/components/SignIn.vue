<script setup lang="ts">
import { User } from '../api/model';
import { ref } from 'vue'
import{signIn} from '../api/api'

const username = ref('username')
const password = ref('password')

async function SignIn(username, password) {

    console.log(username + " " + password)

    signIn(username, password)
  }
</script>

<template>
    <h2>Please sign in</h2>
    <input v-model="username" placeholder="username"> 
    <input v-model="password" placeholder="password"> 
    <button @click="SignIn(username, password)">Sign in</button>
</template>

<!--
We can create two-way bindings between state and form inputs using the v-model directive.
-->