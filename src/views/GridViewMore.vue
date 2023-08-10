<script setup lang="ts">
import CardBoxViewMore from "@/components/CardBoxViewMore.vue";
import VerticalContent from "@/components/VerticalContent.vue";
import VerticalContentTwoCols from "@/components/VerticalContentTwoCols.vue";
import GridCardLayout from "@/components/GridCardLayout";
import GridMiniCardLayout from "@/components/GridMiniCardLayout.vue";
import MiniCard from "@/components/MiniCard.vue";
import { esPrimo } from "@/utils";
import CardLogisticDetails from "@/components/CardLogisticDetails.vue";
import CardTags from "@/components/CardTags.vue";
import CardTeam from "@/components/CardTeam.vue";
import PepeLol from "@/components/TimeLine/PepeLol.vue";
</script>

<template>
  <div>
    <PepeLol />
    <GridMiniCardLayout>
      <MiniCard />
      <MiniCard />
      <MiniCard />
      <MiniCard />
    </GridMiniCardLayout>
    <GridCardLayout :row-height="200" v-slot="{ rowHeight }">
      <CardLogisticDetails
        :row-height="rowHeight"
        class="row-span-5 md:col-span-2 md:row-span-4 lg:col-span-3 lg:row-span-2"
      />
      <CardTags :row-height="rowHeight" />
      <CardTeam :row-height="rowHeight" />
      <CardBoxViewMore
        v-for="n in 25"
        :key="n"
        :id="n.toString()"
        :row-height="rowHeight"
        :data-index="n"
        :class="['row-span-2', { 'col-span-1 md:col-span-2': esPrimo(n) }]"
      >
        <VerticalContentTwoCols v-if="esPrimo(n)" />
        <VerticalContent v-else />
      </CardBoxViewMore>
    </GridCardLayout>
  </div>
</template>
