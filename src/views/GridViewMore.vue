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
import CardAttachments, {
  AttachmentSection,
  AttachmentOption,
} from "@/components/ CardAttachments";
import { onMounted } from "vue";
import parseISO from "date-fns/parseISO";
import isValid from "date-fns/isValid";
import utcToZonedTime from "date-fns-tz/utcToZonedTime";
import format from "date-fns-tz/format";

interface DeliveryTimeFront {
  delivery_time_from: Date | null;
  delivery_time_to: Date | null;
}
interface DeliveryTimeBack {
  delivery_time_from: string | null;
  delivery_time_to: string | null;
}
const backModel: DeliveryTimeBack = {
  delivery_time_from: "2023-11-15 11:30",
  delivery_time_to: "2023-12-01 10:05",
};
const frontModel: DeliveryTimeFront = {
  delivery_time_from: null,
  delivery_time_to: null,
};

function getTimeZone(): string {
  const formatter = new Intl.DateTimeFormat();
  const options = formatter.resolvedOptions();
  return options.timeZone;
}
function toUTCDate(date: string): Date | null {
  try {
    const utilDate = parseISO(date);
    if (isValid(utilDate)) {
      const year = utilDate.getFullYear();
      const month = utilDate.getMonth();
      const day = utilDate.getDate();
      const hour = utilDate.getHours();
      const minute = utilDate.getMinutes();
      return new Date(Date.UTC(year, month, day, hour, minute));
    }
    return null;
  } catch {
    return null;
  }
}

function utcToLocalDate(utcString: string, timeZone: string): Date | null {
  const utcDate = toUTCDate(utcString);
  if (utcDate) {
    return utcToZonedTime(utcDate, timeZone);
  }
  return null;
}

function formatToUTC(localDateTime: Date, template: string): string | null {
  try {
    const utcDate = utcToZonedTime(localDateTime, "UTC");
    return format(utcDate, template);
  } catch {
    return null;
  }
}
function processTwo() {
  console.log(">>>>>>>>>>>>>> REQUEST TO BACK");
  console.log(backModel);
  const timeZone = getTimeZone();
  if (backModel.delivery_time_from && backModel.delivery_time_to) {
    frontModel.delivery_time_from = utcToLocalDate(
      backModel.delivery_time_from,
      timeZone
    );
    frontModel.delivery_time_to = utcToLocalDate(
      backModel.delivery_time_to,
      timeZone
    );
    console.log(frontModel);
  }
  console.log(">>>>>>>>>>>>>> POST TO BACK");
  const model: DeliveryTimeBack = {
    delivery_time_from: null,
    delivery_time_to: null,
  };
  if (frontModel.delivery_time_from && frontModel.delivery_time_to) {
    model.delivery_time_from = formatToUTC(
      frontModel.delivery_time_from,
      "yyyy-MM-dd HH:mm:ss"
    );
    model.delivery_time_to = formatToUTC(
      frontModel.delivery_time_to,
      "yyyy-MM-dd HH:mm:ss"
    );
    console.log(model);
  }
}
onMounted(() => {
  processTwo();
});
</script>

<template>
  <div>
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
      <CardAttachments>
        <AttachmentSection label="Transport docs">
          <AttachmentOption
            label="Delivery Notes"
            @show=""
            @delete=""
            @download=""
            no-delete
          />
          <AttachmentOption label="Shipping Labels" />
        </AttachmentSection>
        <AttachmentSection label="POD">
          <AttachmentOption label="VARIABLE" />
        </AttachmentSection>
        <AttachmentSection :attachs="myAttachs" v-slot="{ attach }">
          <AttachmentOption attach />
        </AttachmentSection>
      </CardAttachments>
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
