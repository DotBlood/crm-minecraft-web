<template>
  <div
    class="absolute left-0 right-0 top-0 bottom-0 star-container w-screen h-screen z-[-1]"
  >
    <span
      v-for="(star, index) in stars"
      :key="index"
      class="star bg-black dark:bg-white"
      :style="{
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.speed}s`,
        left: `${star.position}%`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
const stars = Array.from({ length: 150 }, () => ({
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  speed: Math.random() * 5 + 5,
  position: Math.random() * 100,
}));
</script>

<style scoped>
.window {
  overflow: auto;
}
.star-container {
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Скрытие элементов, выходящих за пределы контейнера */
}

.star {
  position: absolute;
  bottom: -10px; /* Начальная позиция немного ниже экрана */
  border-radius: 50%;
  animation: rise infinite ease-out; /* Бесконечная анимация */
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(0.5); /* Внизу экрана, маленький размер */
    opacity: 0.5; /* Полупрозрачность */
  }
  50% {
    opacity: 1; /* Полная видимость */
  }
  100% {
    /* Позиция вверху экрана, полный размер */
    transform: translateY(-100vh) scale(1); /* Поднимается вверх, увеличивается */
    opacity: 0; /* Исчезает */
  }
}
</style>
