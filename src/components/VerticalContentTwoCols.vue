<script setup lang="ts">
import { inject } from "vue";
import { onMounted } from "vue";
import { rnd } from "@/utils";

const minicards = inject("miniCardCount");

onMounted(() => {
  minicards.value = rnd(15);
});
</script>

<template>
  <div class="grid grid-cols-1 gap-x-2 sm:grid-cols-2">
    <div
      v-for="(n, i) in minicards"
      :key="i"
      class="mb-2 flex h-[100px] w-full items-center justify-center rounded-md bg-gray-100 font-bold"
    >
      {{ n }}
    </div>
  </div>
</template>
