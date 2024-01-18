<template>
  <Teleport to="body">
    <div class="modal">
      <h1>This is a modal</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eius adipisci ipsam quam beatae placeat
        dignissimos praesentium totam vel cumque impedit, exercitationem tempore minima? Tempora deserunt temporibus
        ipsam
        sint odit?</p>
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