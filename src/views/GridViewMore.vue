<script setup lang="ts">
import CardBoxViewMore from "@/components/CardBoxViewMore.vue";
import VerticalContent from "@/components/VerticalContent.vue";
import VerticalContentTwoCols from "@/components/VerticalContentTwoCols.vue";
import GridCardLayout from "@/components/GridCardLayout.vue";
import GridMiniCardLayout from "@/components/GridMiniCardLayout.vue";
import Minicard from "@/components/Minicard.vue";
import { esPrimo } from "@/utils";
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
      <CardBoxViewMore
        v-for="n in 25"
        :key="n"
        :count="n"
        :data-index="n"
        :class="esPrimo(n) && `col-span-1 md:col-span-2`"
      >
        <VerticalContentTwoCols v-if="esPrimo(n)" />
        <VerticalContent v-else />
      </CardBoxViewMore>
    </GridCardLayout>
  </div>
</template>
