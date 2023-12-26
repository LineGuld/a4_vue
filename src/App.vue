<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SignIn from './components/SignIn.vue';
import {AuthState} from './api/model'
import { ref } from 'vue'

type AppState = {
    authState: AuthState
  }

  const authState = ref<AuthState>({mode: 'not signed in', user: undefined})
    
  function signedIn() {
    authState.value.mode = 'signed in'
  }

  function GoToSignIn() {
    authState.value.mode = 'not signed in',
    authState.value.user = undefined
  }

 function GoToHelloWorld(){
   signedIn();
 }

</script>

<template>
  <HelloWorld msg="Welcome" />
  <SignIn v-if="authState.mode=='not signed in'"  @go-to-signin="GoToSignIn"/>
  <SignIn v-if="authState.mode=='signed in'"  @go-to-helloworld="GoToHelloWorld"/>
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
