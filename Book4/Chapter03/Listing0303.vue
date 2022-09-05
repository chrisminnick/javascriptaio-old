<script setup>
defineProps(['date', 'author', 'articleTitle', 'articleText']);
function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}
</script>
<template>
  <h1>{{ articleTitle }}</h1>
  <h3>By {{ author }} on {{ formatDate(date) }}</h3>
  <p>{{ articleText }}</p>
</template>
