<script setup lang="ts">
import { ref, onBeforeMount, nextTick, watchEffect } from "vue";
import { getRandomBgColor, roundDecimal } from "@/utils";

defineProps(["count"]);

const viewMore = ref(false);
const spanRow = ref("span 1/span 1");
const overflowEl = ref(null);
const isOverflowing = ref(false);
const bgColor = ref("");

watchEffect(async () => {
  await nextTick();
  isOverflowing.value =
    overflowEl.value?.scrollHeight > overflowEl.value?.clientHeight;
});

onBeforeMount(() => {
  bgColor.value = getRandomBgColor();
});

function handleViewMore() {
  viewMore.value = !viewMore.value;
  if (viewMore.value) {
    const contentHeight = overflowEl.value?.scrollHeight;
    const spans = roundDecimal(contentHeight / 300);
    spanRow.value = `span ${spans} / span ${spans}`;
  } else {
    spanRow.value = "span 1/span 1";
  }
}
</script>

<template>
  <div
    class="rounded-md bg-gray-50 p-4 shadow-md"
    :style="{ gridRow: spanRow }"
  >
    <div
      :id="`card-${count}`"
      :class="[
        'flex w-full flex-col rounded-md p-2',
        viewMore
          ? 'h-full transition-all duration-300 ease-in-out'
          : 'h-[300px] transition-all duration-300 ease-in-out',
      ]"
      :style="{ backgroundColor: bgColor }"
      :data-color="bgColor"
    >
      <div class="flex-1 overflow-y-auto" ref="overflowEl">
        <slot />
      </div>
      <div class="flex items-center justify-center bg-transparent pt-2">
        <button
          class="max-w-sm flex-1 rounded-md text-white hover:text-lg"
          @click="handleViewMore"
          v-if="isOverflowing"
        >
          {{ viewMore ? `View less` : `View more` }}
        </button>
      </div>
    </div>
  </div>
</template>
