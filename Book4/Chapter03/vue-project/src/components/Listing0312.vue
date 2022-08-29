<script setup>
const myParentObject = { fruit: 'apple', color: 'red' };
const myChildObject = Object.create(myParentObject);
myChildObject.vegetable = 'asparagus';
</script>
<template>
  <div v-for="(value, name, index) in myChildObject">
    {{ name }}: {{ value }}: {{ index }}
  </div>
</template>
