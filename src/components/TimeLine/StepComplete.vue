<template>
  <div :class="[!value && index !== totalGroups - 1 ? 'pb-10' : '']">
    <div
      v-if="index !== totalGroups - 1"
      class="absolute left-4 top-4 -ml-[2px] mt-0.5 h-full w-1 bg-gray-300"
      aria-hidden="true"
    />
    <div
      :class="[
        'group relative flex w-full items-center',
        { 'items-start': group?.trackedAt },
      ]"
    >
      <span class="flex h-9 items-center">
        <span
          :class="[
            'relative z-10 flex h-8 w-8 items-center justify-center rounded-full ',
            isIncidence
              ? 'bg-yellow-300 group-hover:bg-yellow-400'
              : 'bg-blue-600 group-hover:bg-blue-800',
          ]"
        >
          <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
        </span>
      </span>
      <button class="flex w-full justify-between" @click="toggle()">
        <span class="ml-4 flex min-w-0 flex-1 flex-col items-start">
          <span class="text-sm font-medium">{{ group?.name }}</span>
          <span class="text-sm text-gray-500">{{
            group?.trackedAt ?? EMPTY_STRING
          }}</span>
        </span>
        <ChevronDownIcon v-if="!value" class="h-5 w-5" />
        <ChevronUpIcon v-else class="h-5 w-5" />
      </button>
    </div>
    <div v-if="value">
      <div class="relative h-4">
        <div
          class="absolute -top-1 left-4 -ml-[2px] h-9 w-1 bg-gray-300"
          aria-hidden="true"
        />
      </div>
      <StepDetail
        v-for="(groupDetail, subIdx) in detailGroups"
        :key="`${index}-${subIdx}`"
        :total-groups="detailGroups.length"
        :index="subIdx"
        :group="groupDetail"
        class="relative"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimeGroup } from "@/components/TimeLine/TimeLine.types";
import { EventType } from "@/components/TimeLine/TimeLine.types";
import { EMPTY_STRING } from "@/components/TimeLine/TimeLine.constants";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/20/solid";
import StepDetail from "@/components/TimeLine/StepDetail.vue";
import { useToggle } from "@vueuse/core";
import some from "lodash-es/some";
import { computed } from "vue";

const [value, toggle] = useToggle();
defineEmits<{
  "toggle:detail": [group: TimeGroup];
}>();
const props = defineProps<{
  group: TimeGroup;
  detailGroups: Array<TimeGroup>;
  totalGroups: number;
  index: number;
}>();
const isIncidence = computed(() =>
  some(props.detailGroups, { type: EventType.INCIDENCE })
);
</script>
