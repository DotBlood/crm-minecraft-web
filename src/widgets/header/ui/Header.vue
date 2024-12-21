<template>
  <UContainer class="sticky top-5 left-0 right-0 z-[1000]">
    <UCard>
      <div class="flex items-center gap-2">
        <!-- left nav brand -->
        <NavBrand text="NavBrand" />
        <!-- center  nav navigation -->
        <ul class="flex gap-2">
          <li>
            <UButton key="1" variant="outline" icon="" label="Главная" to="/" />
          </li>
          <li>
            <UButton
              key="1"
              variant="outline"
              icon=""
              label="Магазин"
              to="/shop"
            />
          </li>
          <li>
            <UButton
              key="1"
              variant="outline"
              icon=""
              label="Форум"
              to="/forum"
            />
          </li>
        </ul>

        <!-- right nav profile/auth -->
        <div class="ml-auto">
          <ul v-if="isAuth">
            <li><UButton key="2" icon="" label="123" /></li>
          </ul>
          <ul v-else class="flex gap-2">
            <li>
              <UButton
                variant="outline"
                icon=""
                label="Войти"
                to="/auth/signin/"
              />
            </li>
            <li>
              <UButton
                variant="outline"
                icon=""
                label="Регистрация"
                to="/auth/signup/"
              />
            </li>
          </ul>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import NavBrand from "./NavBrand.vue";
const isAuth = ref(false);
</script>
