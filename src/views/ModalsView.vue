<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <ModalComponent v-if="showModal"></ModalComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalComponent from "@/components/ModalComponent.vue"


const showModal = ref(false)

</script>

<style scoped>


</style>