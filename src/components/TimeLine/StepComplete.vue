<template>
  <div>
    <div
      v-if="index !== totalGroups - 1"
      :class="[
        'absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5',
        group.status === Status.CURRENT ? 'bg-gray-300' : 'bg-blue-600',
      ]"
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
          class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 group-hover:bg-blue-800"
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
      <StepDetail
        v-for="(groupDetail, subIdx) in detailGroups"
        :key="`${index}-${subIdx}`"
        :total-groups="detailGroups.length"
        :index="subIdx"
        :group="groupDetail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Status } from "@/components/TimeLine/TimeLine.types";
import type { TimeGroup } from "@/components/TimeLine/TimeLine.types";
import { EMPTY_STRING } from "@/components/TimeLine/TimeLine.constants";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/20/solid";
import StepDetail from "@/components/TimeLine/StepDetail.vue";
import { useToggle } from "@vueuse/core";

const [value, toggle] = useToggle();
defineEmits<{
  "toggle:detail": [group: TimeGroup];
}>();
defineProps<{
  group: TimeGroup;
  detailGroups: Array<TimeGroup>;
  totalGroups: number;
  index: number;
}>();
</script>
