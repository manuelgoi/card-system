<template>
  <div
    class="rounded-md bg-gray-50 p-4 shadow-md"
    :style="{ gridRow: spanRow }"
  >
    <div
      :id="`card-${count}`"
      class="flex h-full w-full flex-col rounded-md p-2 transition-all duration-300 ease-in-out"
      :style="{ backgroundColor: bgColor }"
      :data-color="bgColor"
    >
      <div class="flex-1 overflow-y-auto" ref="overflowEl">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onBeforeMount, nextTick, watchEffect } from "vue";
import { getRandomBgColor, roundDecimal } from "@/utils";

defineProps(["count"]);

const miniCardCount = ref(1);
const spanRow = ref("span 1/span 1");
const overflowEl = ref(null);
const isOverflowing = ref(false);
const bgColor = ref("");
provide("miniCardCount", miniCardCount);

watchEffect(async () => {
  await nextTick();
  isOverflowing.value =
    overflowEl.value?.scrollHeight > overflowEl.value?.clientHeight;
  calcRowSpan();
});

onBeforeMount(() => {
  bgColor.value = getRandomBgColor();
});

function calcRowSpan() {
  const contentHeight = overflowEl.value?.scrollHeight;
  const spans = roundDecimal(contentHeight / 300);
  spanRow.value = `span ${spans} / span ${spans}`;
}
</script>
