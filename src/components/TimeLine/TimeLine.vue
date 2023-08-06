<template>
  <div class="ml-4 mt-8">
    <nav aria-label="Progress">
      <ol role="list" class="overflow-hidden">
        <li
          v-for="(group, stepIdx) in groupsWithNames"
          :key="group.id"
          :class="[
            stepIdx !== groupsWithNames.length - 1 ? 'pb-10' : '',
            'relative',
          ]"
        >
          <StepComplete
            v-if="
              group.status === Status.CURRENT ||
              group.status === Status.COMPLETE
            "
            :total-groups="groupsWithNames.length"
            :index="stepIdx"
            :group="group"
            :detail-groups="
              filter(historyWithNames, { timeline_group: group.code }) as unknown as Array<TimeGroup>
            "
          />
          <StepInComing
            v-if="group.status === Status.UPCOMING"
            :total-groups="groupsWithNames.length"
            :index="stepIdx"
            :group="group"
          />
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type {
  TimeEvent,
  TimeGroup,
} from "@/components/TimeLine/TimeLine.types";
import { Status } from "@/components/TimeLine/TimeLine.types";
import {
  timeEventName,
  timeGroupName,
} from "@/components/TimeLine/TimeLine.constants";
import find from "lodash-es/find";
import findLast from "lodash-es/findLast";
import filter from "lodash-es/filter";
import some from "lodash-es/some";
import StepComplete from "@/components/TimeLine/StepComplete.vue";
import StepInComing from "@/components/TimeLine/StepInComing.vue";
import { computed } from "vue";

const props = defineProps<{
  groups: Array<TimeGroup>;
  history: Array<TimeEvent>;
}>();

const groupsWithNames = computed<Array<TimeGroup>>(() => {
  const groupWithNames = props.groups.map((group) => {
    const { name } = find(timeGroupName, { code: group.code });
    const status = some(props.history, {
      timeline_group: group.code,
    })
      ? Status.COMPLETE
      : Status.UPCOMING;
    return {
      ...group,
      name,
      status,
    } as TimeGroup;
  });
  const lastCurrent = findLast(groupWithNames, { status: Status.COMPLETE });
  lastCurrent.status = Status.CURRENT;
  return groupWithNames;
});

const historyWithNames = computed<Array<TimeEvent>>(() =>
  props.history.map((event) => {
    const { name } = find(timeEventName, { code: event.code });
    return {
      ...event,
      name,
      tracked_at: new Date(event.tracked_at),
    } as TimeEvent;
  })
);
</script>
