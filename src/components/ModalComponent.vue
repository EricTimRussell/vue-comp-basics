<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('hideModal')">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: "No specified title"
  }
})

// Tell parent componenet to set showModal to false
const emit = defineEmits(['hideModal'])

</script>

<style scoped>
.modal{
  background: blue;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>