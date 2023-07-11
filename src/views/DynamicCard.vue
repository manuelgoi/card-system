<script setup lang="ts">
import { ref, onMounted, nextTick, watchEffect } from "vue";

defineProps(["count"]);

const viewMore = ref(false);
const spanRow = ref("span 1/span 1");
const minicards = ref(1);
const overflowEl = ref(null);
const isOverflowing = ref(false);
const bgColor = ref("");
const rnd = (max) => Math.floor(Math.random() * max) + 1;

watchEffect(async () => {
  await nextTick();
  isOverflowing.value =
    overflowEl.value?.scrollHeight > overflowEl.value?.clientHeight;
});
onMounted(() => {
  minicards.value = rnd(25);
  bgColor.value = getRandomBgColor();
});

function roundDecimal(decimal) {
  const integer = Math.floor(decimal);
  const decimals = decimal % 1;

  if (decimals >= 0.5) {
    return integer + 1;
  } else {
    return integer;
  }
}
function getRandomBgColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
}
function handleViewMore() {
  console.log(overflowEl.value?.scrollHeight, overflowEl.value?.clientHeight);
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
        'w-ful flex flex-col rounded-md p-2',
        viewMore ? 'h-full' : 'h-[300px]',
      ]"
      :style="{ backgroundColor: bgColor }"
    >
      <div class="flex-1 overflow-y-auto" ref="overflowEl">
        <div
          v-for="(n, i) in minicards"
          :key="i"
          class="mb-2 flex h-[100px] w-full items-center justify-center rounded-md bg-gray-100 font-bold"
        >
          {{ n }}
        </div>
      </div>
      <button
        class="rounded-md bg-blue-500 p-2 text-white"
        @click="handleViewMore"
        v-if="isOverflowing"
      >
        {{
          viewMore
            ? `[${count}] View less (${minicards})`
            : `[${count}] View more (${minicards})`
        }}
      </button>
    </div>
  </div>
</template>
