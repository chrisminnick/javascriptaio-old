<script setup>
import { $ref } from 'vue/macros';

const cupsOfCoffee = $ref(0);
function drinkCoffee() {
  cupsOfCoffee++;
}
</script>
<template>
  <h1>Coffee Tracker</h1>
  <button @click="drinkCoffee">Drink Coffee</button>
  <p>You've had {{ cupsOfCoffee }} cups of coffee.</p>
</template>
