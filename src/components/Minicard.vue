<template>
  <div
    :class="[
      'w-full rounded-md border border-gray-300',
      expaded ? 'h-[600px]' : 'h-[100px]',
    ]"
  >
    <button class="h-full bg-gray-300 px-4" @click="expaded = !expaded">
      View More
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const expaded = ref(false);
</script>
