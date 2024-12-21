<template>
  <p class="text-lg font-bold">{{ text }}</p>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<style scoped></style>
