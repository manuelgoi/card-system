<template>
  <div class="h-screen w-full p-2">
    <h2>Escaner {{ focused ? "CONECTADO" : "NO CONECTADO" }}</h2>
    <input
      id="scan"
      autofocus
      ref="scan"
      class="pointer-events-none absolute h-1 w-1 opacity-0"
    />
    <ul class="mt-2 w-full rounded-md border border-gray-200">
      <li
        v-for="(line, index) in history"
        :key="index"
        class="flex gap-x-2 p-2"
      >
        <span>Evento {{ index }}</span>
        <span>Valor {{ line }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
// https://stackoverflow.com/questions/21633537/javascript-how-to-read-a-hand-held-barcode-scanner-best
import { onMounted, ref } from "vue";
import { useEventListener, useFocus } from "@vueuse/core";

const scan = ref<HTMLTextAreaElement | null>(null);
const { focused } = useFocus(scan, { initialValue: true });
const history = ref<string[]>([]);

useEventListener(document, "textInput", (e: MessageEvent) => {
  const el = e.target as HTMLInputElement;
  if (el?.id === "scan") {
    history.value.push(e.data);
  }
});
</script>
