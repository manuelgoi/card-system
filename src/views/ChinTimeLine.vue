<template>
  <div class="grid grid-cols-1 sm:grid-cols-[3fr_min-content]">
    <div class="min-h-[300px] bg-amber-500 sm:h-screen" />
    <div class="p-4 sm:min-w-[450px]">
      <TimeLine
        class="rounded-md border border-gray-300 p-2"
        :groups="timeGroupsEndPoint as Array<TimeGroup>"
        :history="historyEndPoint as unknown as Array<TimeEvent>"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import TimeLine from "@/components/TimeLine";
import timeGroupsEndPoint from "@/stores/timeGroups.json";
import historyEndPoint from "@/stores/history.json";
import type { TimeGroup, TimeEvent } from "@/components/TimeLine";
</script>
