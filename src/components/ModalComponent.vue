<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>
        Username: {{ userData.username }}
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from "vue";

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

// Tell parent component to close modal
const emit = defineEmits(['update:modelValue'])

const userData = inject('userData')

</script>

<style scoped>
.modal{
  background: beige;
  color: black;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>