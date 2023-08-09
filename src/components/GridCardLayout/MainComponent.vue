<template>
  <div
    class="grid auto-cols-auto grid-flow-row-dense grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7"
    :style="{ gridAutoRows: `${rowHeight}px` }"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
import { useGridCardLayout } from "./index";

const { rowHeight } = useGridCardLayout();
</script>
