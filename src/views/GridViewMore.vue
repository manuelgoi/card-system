<script setup lang="ts">
import CardBoxViewMore from "@/components/CardBoxViewMore.vue";
import VerticalContent from "@/components/VerticalContent.vue";
import VerticalContentTwoCols from "@/components/VerticalContentTwoCols.vue";
import GridCardLayout from "@/components/GridCardLayout";
import GridMiniCardLayout from "@/components/GridMiniCardLayout.vue";
import Minicard from "@/components/Minicard.vue";
import { esPrimo } from "@/utils";
import CardLogisticDetails from "@/components/CardLogisticDetails.vue";
import CardTags from "@/components/CardTags.vue";
</script>

<template>
  <div>
    <GridMiniCardLayout>
      <Minicard />
      <Minicard />
      <Minicard />
      <Minicard />
    </GridMiniCardLayout>
    <GridCardLayout>
      <CardLogisticDetails
        class="row-span-3 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-1"
      />
      <CardTags />
      <CardBoxViewMore id="1bis">
        <VerticalContent id="3" />
      </CardBoxViewMore>
      <CardBoxViewMore
        v-for="n in 25"
        :key="n"
        :id="n.toString()"
        :data-index="n"
        :class="esPrimo(n) && `col-span-1 md:col-span-2`"
      >
        <VerticalContentTwoCols v-if="esPrimo(n)" />
        <VerticalContent v-else />
      </CardBoxViewMore>
    </GridCardLayout>
  </div>
</template>
