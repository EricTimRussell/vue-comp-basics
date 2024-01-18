<template>
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
</style>
