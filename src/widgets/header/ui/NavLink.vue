<template>
  <UButton
    :label="text"
    :variant="variant"
    :link="link"
    :icon="icon"
    :avatar="avatar"
  />
</template>

<script setup lang="ts">
import type { INavLink } from "../model/NavLink.type";
defineProps<INavLink>();
</script>

<style scoped></style>
