<template>
  <Teleport to="body">
    <div class="modal">
      <h1>
        <slot name="title" />
      </h1>
      <slot />
      <button>Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>

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