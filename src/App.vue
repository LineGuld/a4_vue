<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import SignIn from './components/SignIn.vue';
import WelcomeUser from './components/WelcomeUser.vue';
import { AuthState } from './api/model';
import type { User } from './api/model';
import { signIn } from './api/api'
import { ref } from 'vue';

type AppState = { authState: AuthState }

const authState = ref<AuthState>({ mode: 'not signed in', user: undefined })

function submit({ username, password }) {
  signingIn(username, password)
}

async function signingIn(username, password) {
  let result = await signIn(username, password);
  authState.value.user = result;
  authState.value.mode = 'signed in'
}

function signOut() {
  authState.value.mode = 'not signed in'
  authState.value.user = undefined
}
</script>

<template>
  <SignIn v-if="authState.mode == 'not signed in'" @submit="submit" />
  <WelcomeUser msg="Signed in" :user="authState.user" v-if="authState.mode == 'signed in'" @sign-out="signOut" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
