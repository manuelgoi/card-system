<template>
  <div class="p-4">
    <textarea autofocus class="h-screen w-full rounded-md"></textarea>
  </div>
</template>
<script setup lang="ts">
// https://stackoverflow.com/questions/21633537/javascript-how-to-read-a-hand-held-barcode-scanner-best
import { onMounted } from "vue";

onMounted(() => {
  document.addEventListener("textInput", function (e) {
    console.log(e.data);
  });
});
</script>
