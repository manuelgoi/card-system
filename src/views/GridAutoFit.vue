<script setup lang="ts">
import DynamicCard from "@/views/DynamicCard.vue";
</script>

<template>
  <div
    class="grid auto-cols-auto grid-flow-row-dense grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"
  >
    <DynamicCard v-for="(n, i) in 25" :key="i" :count="n" />
  </div>
</template>
