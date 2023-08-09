<template>
  <div
    ref="card"
    class="rounded-md border border-gray-300 bg-white p-4"
    :style="{ gridRow: spanRow }"
  >
    <div
      ref="content"
      :id="`card-${id}`"
      class="flex h-full w-full flex-col rounded-md p-2 transition-all duration-300 ease-in-out"
      :style="{ backgroundColor }"
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
import { ref, onBeforeMount, nextTick, watchEffect, provide } from "vue";
import { getRandomBgColor, roundDecimal } from "@/utils";
import { EMPTY_STRING } from "@/components/TimeLine/TimeLine.constants";

const props = defineProps<{
  id: string;
  rowHeight: number;
}>();

const miniCardCount = ref(1);
const viewMore = ref(false);
const spanRow = ref("span 2/span 2");
const overflowEl = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
const card = ref<HTMLElement | null>(null);
const isOverflowing = ref<boolean>(false);
const backgroundColor = ref<string>(EMPTY_STRING);

provide("miniCardCount", miniCardCount);

watchEffect(async () => {
  await nextTick();
  globalThis.setTimeout(() => {
    if (overflowEl.value) {
      isOverflowing.value =
        overflowEl.value?.scrollHeight > overflowEl.value?.clientHeight;
    }
  }, 100);
});

onBeforeMount(() => {
  backgroundColor.value = getRandomBgColor();
});

function handleViewMore() {
  viewMore.value = !viewMore.value;
  if (viewMore.value) {
    const contentHeight = overflowEl.value?.scrollHeight ?? props.rowHeight;
    let spans = Math.ceil(contentHeight / props.rowHeight);
    spans = spans > 2 ? spans : 2;
    spanRow.value = `span ${spans} / span ${spans}`;
  } else {
    spanRow.value = "span 2/span 2";
  }
}
</script>
