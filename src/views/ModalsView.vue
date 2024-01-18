<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">Show Dark Modals?</label>
      <input v-model="showDarkModal" type="checkbox">
    </div>
    <button @click="showModal = true">Show Modal</button>
    <component :is="showDarkModal ? ModalDarkComponent : ModalComponent" v-model="showModal"
      title="My Modal Title via props">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius adipisci ipsam quam beatae placeat
        dignissimos praesentium totam vel cumque impedit, exercitationem tempore minima? Tempora deserunt temporibus
        ipsam
        sint odit?</p>
    </component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalComponent from "@/components/ModalComponent.vue"
import ModalDarkComponent from "@/components/ModalDarkComponent.vue"


const showDarkModal = ref(false)
const showModal = ref(false)

</script>

<style scoped>


</style>