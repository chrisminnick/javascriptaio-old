<script setup>
import { ref } from 'vue';
const userInput = ref('');
</script>

<template>
  <div>
    <textarea v-bind="userInput" />
    <p>{{ userInput }}</p>
    <button @click="userInput = userInput.toUpperCase()">Shout It</button>
  </div>
</template>
