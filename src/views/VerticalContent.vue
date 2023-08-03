<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { rnd } from "@/utils";

const minicards = ref(1);

onMounted(() => {
  minicards.value = rnd(25);
});
</script>

<template>
  <div
    v-for="(n, i) in minicards"
    :key="i"
    class="mb-2 flex h-[100px] w-full items-center justify-center rounded-md bg-gray-100 font-bold"
  >
    {{ n }}
  </div>
</template>
