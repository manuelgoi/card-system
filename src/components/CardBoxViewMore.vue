<template>
  <div
    ref="card"
    class="rounded-md border border-gray-300 bg-white p-4"
    :style="{ gridRow: spanRow }"
  >
    <div
      ref="content"
      :id="`card-${count}`"
      class="flex w-full flex-col rounded-md p-2 transition-all duration-300 ease-in-out"
      :style="{ backgroundColor, height }"
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
          {{ viewMore ? `View less` : `View more ${miniCardCount}` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, nextTick, watchEffect, provide, watch } from "vue";
import { getRandomBgColor, roundDecimal } from "@/utils";
import { EMPTY_STRING } from "@/components/TimeLine/TimeLine.constants";
import { useRefHistory, useMediaQuery } from "@vueuse/core";

defineProps(["count"]);

const HEIGHT: Readonly<number> = 345;
const OFFSET: Readonly<number> = 32;
const miniCardCount = ref(1);
const viewMore = ref(false);
const spanRow = ref("span 1/span 1");
const overflowEl = ref<HTMLElement | null>(null);
const content = ref(null);
const card = ref<HTMLElement | null>(null);
const isOverflowing = ref<boolean>(false);
const backgroundColor = ref<string>(EMPTY_STRING);
const height = ref<string>(`${HEIGHT}px`);
const { undo: undoHeight } = useRefHistory(height);
const windowSm = useMediaQuery("(min-width: 640px)");
const windowMd = useMediaQuery("(min-width: 768px)");
const windowLg = useMediaQuery("(min-width: 1024px)");
const windowXl = useMediaQuery("(min-width: 1280px)");
const window2xl = useMediaQuery("(min-width: 1536px)");
const window2_5xl = useMediaQuery("(min-width: 1600px)");
const window3xl = useMediaQuery("(min-width: 1800px)");
const window3_5xl = useMediaQuery("(min-width: 2000px)");
const window4xl = useMediaQuery("(min-width: 2200px)");
const window4_5xl = useMediaQuery("(min-width: 2400px)");
const window5xl = useMediaQuery("(min-width: 2600px)");
const window5_5xl = useMediaQuery("(min-width: 2800px)");
const window6xl = useMediaQuery("(min-width: 3000px)");
const window6_5xl = useMediaQuery("(min-width: 3200px)");
const window7xl = useMediaQuery("(min-width: 3400px)");
const window7_5xl = useMediaQuery("(min-width: 3600px)");
const window8xl = useMediaQuery("(min-width: 3800px)");
const window8_5xl = useMediaQuery("(min-width: 4000px)");

provide("miniCardCount", miniCardCount);

watchEffect(async () => {
  await nextTick();
  height.value = `${(card.value?.clientHeight ?? HEIGHT) - OFFSET}px`;
  await nextTick();
  globalThis.setTimeout(() => {
    if (overflowEl.value) {
      isOverflowing.value =
        overflowEl.value?.scrollHeight > overflowEl.value?.clientHeight;
    }
  }, 100);
});

watch(
  [
    windowSm,
    windowMd,
    windowLg,
    windowXl,
    window2xl,
    window2_5xl,
    window3xl,
    window3_5xl,
    window4xl,
    window4_5xl,
    window5xl,
    window5_5xl,
    window6xl,
    window6_5xl,
    window7xl,
    window7_5xl,
    window8xl,
    window8_5xl,
  ],
  async () => {
    await nextTick();
    height.value = `${(card.value?.clientHeight ?? HEIGHT) - OFFSET}px`;
    await nextTick();
    globalThis.setTimeout(() => {
      if (overflowEl.value) {
        isOverflowing.value =
          overflowEl.value?.scrollHeight > overflowEl.value?.clientHeight;
      }
    }, 100);
  }
);

onBeforeMount(() => {
  backgroundColor.value = getRandomBgColor();
});

function handleViewMore() {
  viewMore.value = !viewMore.value;
  if (viewMore.value) {
    const contentHeight = overflowEl.value?.scrollHeight ?? HEIGHT;
    let spans = roundDecimal(contentHeight / HEIGHT);
    spans = spans > 1 ? spans : 2;
    spanRow.value = `span ${spans} / span ${spans}`;
    height.value = "100%";
  } else {
    spanRow.value = "span 1/span 1";
    undoHeight();
  }
}
</script>
