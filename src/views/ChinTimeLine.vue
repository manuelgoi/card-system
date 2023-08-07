<template>
  <div class="grid grid-cols-1 sm:grid-cols-[3fr_min-content]">
    <div class="min-h-[300px] bg-amber-500 p-8 sm:h-screen">
      <form @submit.prevent class="flex w-[300px] flex-col">
        <fieldset class="flex items-center justify-between">
          <label :for="GroupCode.PICKED_UP">{{
            find(timeGroupName, { code: GroupCode.PICKED_UP })?.name
          }}</label>
          <input
            :id="GroupCode.PICKED_UP"
            :value="GroupCode.PICKED_UP"
            type="radio"
            name="events"
            v-model="event"
          />
        </fieldset>

        <fieldset class="flex items-center justify-between">
          <label :for="GroupCode.IN_TRANSIT">{{
            find(timeGroupName, { code: GroupCode.IN_TRANSIT })?.name
          }}</label>
          <input
            :value="GroupCode.IN_TRANSIT"
            :id="GroupCode.IN_TRANSIT"
            type="radio"
            name="events"
            v-model="event"
          />
        </fieldset>

        <fieldset class="flex items-center justify-between">
          <label :for="GroupCode.OUT_FOR_DELIVERY">{{
            find(timeGroupName, { code: GroupCode.OUT_FOR_DELIVERY })?.name
          }}</label>
          <input
            :value="GroupCode.OUT_FOR_DELIVERY"
            :id="GroupCode.OUT_FOR_DELIVERY"
            type="radio"
            name="events"
            v-model="event"
          />
        </fieldset>

        <fieldset class="flex items-center justify-between">
          <label :for="GroupCode.DELIVERED">{{
            find(timeGroupName, { code: GroupCode.DELIVERED })?.name
          }}</label>
          <input
            :value="GroupCode.DELIVERED"
            :id="GroupCode.DELIVERED"
            type="radio"
            name="events"
            v-model="event"
          />
        </fieldset>
      </form>
    </div>
    <div class="p-4 sm:w-[400px]">
      <TimeLine
        class="rounded-md border border-gray-300 p-2"
        :groups="timeGroupsEndPoint as Array<TimeGroup>"
        :history="history as unknown as Array<TimeEvent>"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TimeLine from "@/components/TimeLine";
import timeGroupsEndPoint from "@/stores/timeGroups.json";
import historyEndPoint from "@/stores/history.json";
import type { TimeGroup, TimeEvent } from "@/components/TimeLine";
import { GroupCode, timeGroupName } from "@/components/TimeLine";
import find from "lodash-es/find";
import filter from "lodash-es/filter";
import { computed, ref } from "vue";

const event = ref<string>(GroupCode.DELIVERED);

const history = computed(() => {
  switch (event.value) {
    case GroupCode.PICKED_UP:
      return filter(historyEndPoint, { timeline_group: event.value });
    case GroupCode.IN_TRANSIT:
      return historyEndPoint.filter(
        (event) =>
          event.timeline_group === GroupCode.PICKED_UP ||
          event.timeline_group === GroupCode.IN_TRANSIT
      );
    case GroupCode.OUT_FOR_DELIVERY:
      return historyEndPoint.filter(
        (event) =>
          event.timeline_group === GroupCode.PICKED_UP ||
          event.timeline_group === GroupCode.OUT_FOR_DELIVERY ||
          event.timeline_group === GroupCode.IN_TRANSIT
      );
    case GroupCode.DELIVERED:
      return historyEndPoint;
  }
});
</script>
