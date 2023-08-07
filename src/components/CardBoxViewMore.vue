<template>
  <div
    class="rounded-md border border-gray-300 bg-white p-4"
    :style="{ gridRow: spanRow }"
  >
    <div
      :id="`card-${count}`"
      :class="[
        'flex w-full flex-col rounded-md p-2',
        viewMore
          ? 'h-full transition-all duration-300 ease-in-out'
          : 'h-[360px] transition-all duration-300 ease-in-out',
      ]"
      :style="{ backgroundColor: bgColor }"
      :data-color="bgColor"
    >
      <div class="flex-1 overflow-y-auto" ref="overflowEl">
        <slot ref="content" />
      </div>
      <div class="flex items-center justify-center bg-transparent pt-2">
        <button
          class="max-w-sm flex-1 rounded-md text-white hover:text-lg"
          @click="handleViewMore"
          v-if="isOverflowing"
        >
          {{ viewMore ? `View less` : `View more ${miniCardCount}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, nextTick, watchEffect, provide } from "vue";
import { getRandomBgColor, roundDecimal } from "@/utils";

defineProps(["count"]);

const miniCardCount = ref(1);
const viewMore = ref(false);
const spanRow = ref("span 1/span 1");
const overflowEl = ref(null);
const isOverflowing = ref(false);
const bgColor = ref("");

provide("miniCardCount", miniCardCount);

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
    let spans = roundDecimal(contentHeight / 300);
    spans = spans > 1 ? spans : 2;
    spanRow.value = `span ${spans} / span ${spans}`;
  } else {
    spanRow.value = "span 1/span 1";
  }
}
</script>
