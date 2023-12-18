<template>
  <div
    :class="[
      'w-full rounded-md border border-gray-300',
      expaded ? 'h-[600px]' : 'h-[100px]',
    ]"
  >
    <div class="flex">
      <div
        class="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-gray-400 text-sm font-medium text-white"
      >
        <button class="h-full bg-gray-300 px-4" @click="expaded = !expaded">
          View More
        </button>
      </div>
      <div class="grid flex-1 grid-rows-2 px-4 py-2">
        <p>202308-XII7</p>
        <p class="truncate">23423948923423jskj923498234098</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const expaded = ref(false);
</script>
