<template>
  <div class="home">
    <h3>{{ counterData.title }}:</h3>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>
    <div class="edit">
      <h4>Edit counter tile:</h4>
      <input v-model="counterData.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const counter = ref(0)
const counterTitle = ref('My Counter')

const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

function increaseCounter() {
  counterData.count++
}

function decreaseCounter() {
  counterData.count--
}

</script>

<style>
.home{
  text-align: center;
  padding: 20px;
}
.btn, .counter{
  font-size: 40px;
  margin: 10px;
}
.edit{
  margin-top: 60px;
}
</style>