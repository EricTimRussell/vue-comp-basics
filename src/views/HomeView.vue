<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <h3>{{ counter.title }}</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>{{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter tile:</h4>
      <input v-model="counter.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from "@/directives/vAutofocus"
import { useCounterStore } from '@/stores/counter'

const appTitle = "Counter App"

const counter = useCounterStore()

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