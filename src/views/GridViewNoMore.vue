<script setup lang="ts">
import CardBox from "@/views/CardBox.vue";
import VerticalContent from "@/views/VerticalContent.vue";
import VerticalContentTwoCols from "@/views/VerticalContentTwoCols.vue";
import GridCardLayout from "@/views/GridCardLayout.vue";
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
