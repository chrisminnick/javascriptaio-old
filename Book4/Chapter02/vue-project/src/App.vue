<script setup>
import { onErrorCaptured, ref } from 'vue';
import Listing0206 from './components/Listing0206.vue';

const error = ref('');

onErrorCaptured((e) => {
  error.value = e.message;
});
function resetError() {
  error.value = '';
}
</script>

<template>
  <div v-if="error">
    There's been an error: {{ error }} <button @click="resetError">OK</button>
  </div>
  <Listing0206 />
</template>
