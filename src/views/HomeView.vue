<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <h3>Hard coded</h3>

    <div>
      <button class="btn">--</button>
      <button class="btn">-</button>
      <span class="counter">0</span>
      <button class="btn">+</button>
      <button class="btn">++</button>
    </div>

    <p>This counter is odd/even</p>

    <div class="edit">
      <h4>Edit counter tile:</h4>
      <input type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from "@/directives/vAutofocus"

const appTitle = "Counter App"


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