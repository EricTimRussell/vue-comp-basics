<template>
  <div class="user-data">
    {{ userData.name }} @{{ userData.username }} |
    Network Status:
    <span :style="{ color: online ? 'green' : 'red' }">
      {{ online ? 'Online' : 'Offline' }}
    </span>
  </div>

  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/posts">Posts</RouterLink>
      <RouterLink to="/modals">Modals</RouterLink>
    </nav>
  </header>

  <div class="view">
    <RouterView />
  </div>
</template>

<script setup>
import { reactive, provide } from "vue";
import { useOnline } from '@vueuse/core'

// online status
const online = useOnline()

const userData = reactive({
  name: 'Eric',
  username: 'Eric123'
})

provide('userData', userData)

</script>

<style scoped>
header{
  display: flex;
  justify-content: center;
  width: 100%;
}
.view{
  display: flex;
  grid-column: 1;
  margin-top: 30px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data{
  position: absolute;
  background: beige;
  top: 0;
  right: 0;
  font-size: 12px;
  padding: 5px;
  color: black;
}
</style>
