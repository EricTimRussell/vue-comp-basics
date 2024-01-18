<template>
  <div class="postDetail">
    <h1>Post Details</h1>
    <p>Display post content with ID of {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post Id</button>
    </div>
    <div>
      <button @click="goHomeIn3Seconds">Go Home In Three Seconds</button>
    </div>
    <span>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </span>
  </div>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

function showPostId() {
  alert(`The ID of this post is: ${route.params.id}`)
}

function goHomeIn3Seconds() {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000);
}


</script>