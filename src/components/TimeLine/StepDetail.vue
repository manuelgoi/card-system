<template>
  <div>
    <div
      v-if="index !== totalGroups - 1"
      class="absolute left-4 top-4 -ml-[2px] mt-0.5 h-full w-1 bg-gray-300"
      aria-hidden="true"
    />
    <div
      :class="['group relative flex items-start', { 'items-start': trackedAt }]"
    >
      <span
        class="flex h-[70px] w-8 shrink-0 items-start justify-center"
        aria-hidden="true"
      >
        <span
          :class="[
            'relative z-10 mt-2 flex h-4 w-4 items-center justify-center rounded-full ',
            group.type === EventType.INCIDENCE
              ? 'bg-red-600 group-hover:bg-red-700'
              : 'bg-blue-600 group-hover:bg-blue-800',
          ]"
        >
          <span
            class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
          />
        </span>
      </span>
      <span class="ml-4 flex min-w-0 flex-col">
        <span
          :title="group?.name"
          class="truncate text-sm font-medium text-gray-500"
          >{{ group?.name }}</span
        >
        <span class="text-sm text-gray-500">{{
          trackedAt ?? EMPTY_STRING
        }}</span>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TimeGroup } from "@/components/TimeLine/TimeLine.types";
import { EventType } from "@/components/TimeLine/TimeLine.types";
import { EMPTY_STRING } from "@/components/TimeLine/TimeLine.constants";
import { computed } from "vue";
import format from "date-fns/format";

const props = defineProps<{
  group: TimeGroup;
  totalGroups: number;
  index: number;
}>();

const trackedAt = computed(() =>
  format(props.group?.tracked_at, "yyyy-MM-dd HH:mm")
);
</script>
