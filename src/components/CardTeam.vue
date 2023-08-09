<template>
  <section
    class="flex flex-col rounded-md border border-gray-300 text-sm"
    :style="{ gridRow: value ? 'span 2/span 2' : 'span 1/span 1' }"
  >
    <header class="border-b border-b-gray-300 px-4 py-2">
      <h3 class="font-medium text-gray-900">Team</h3>
    </header>
    <main class="flex flex-1 flex-col items-center justify-center">
      <UsersIcon class="h-12 w-12 text-slate-400" />
      <p class="text-sm text-slate-500">No team assigned</p>
    </main>
    <footer
      class="flex items-center justify-end border-t border-t-gray-300 px-4 py-2"
    >
      <button
        type="button"
        @click="handleAdd"
        class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Add tag
      </button>
    </footer>
  </section>
</template>
<script setup lang="ts">
import { UsersIcon } from "@heroicons/vue/24/outline";
import { useToggle } from "@vueuse/core";

defineProps<{
  rowHeight?: number;
}>();
const [value, toggle] = useToggle();

function handleAdd() {
  toggle();
}
</script>
