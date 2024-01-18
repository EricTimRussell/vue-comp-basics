<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>
    <ModalComponent v-if="showModal" title="My Modal Title via props">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius adipisci ipsam quam beatae placeat
        dignissimos praesentium totam vel cumque impedit, exercitationem tempore minima? Tempora deserunt temporibus
        ipsam
        sint odit?</p>
    </ModalComponent>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalComponent from "@/components/ModalComponent.vue"


const showModal = ref(false)

</script>

<style scoped>


</style>