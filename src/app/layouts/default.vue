<template>
  <UApp>
    <Header />
    <UContainer class="z-10 mt-10 min-h-[calc(100vh-120px)]">
      <slot />
    </UContainer>
    <BgStar />
  </UApp>
</template>

<script lang="ts" setup>
import BgStar from "@/shared/ui/BgStar.vue";
import { Header } from "@/widgets/header";
</script>

<style scoped></style>
