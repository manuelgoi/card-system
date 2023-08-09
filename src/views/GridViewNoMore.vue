<script setup lang="ts">
import CardBox from "@/components/CardBox.vue";
import VerticalContent from "@/components/VerticalContent.vue";
import VerticalContentTwoCols from "@/components/VerticalContentTwoCols.vue";
import GridCardLayout from "@/components/GridCardLayout/MainComponent.vue";
import { esPrimo } from "@/utils";
</script>

<template>
  <GridCardLayout>
    <CardBox
      v-for="n in 25"
      :key="n"
      :count="n"
      :data-index="n"
      :class="esPrimo(n) && `col-span-1 md:col-span-2`"
    >
      <VerticalContentTwoCols v-if="esPrimo(n)" />
      <VerticalContent v-else />
    </CardBox>
  </GridCardLayout>
</template>
