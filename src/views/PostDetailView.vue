<template>
  <div class="postDetail">
    <h1>Post Details</h1>
    <p>Display post content with ID of {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post Id</button>
    </div>
    <span>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

function showPostId() {
  alert(`The ID of this post is: ${route.params.id}`)
}


</script>