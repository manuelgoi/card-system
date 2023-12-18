<template>
  <div>
    <video
      ref="webcam"
      autoplay
      class="h-full w-full border border-gray-500 p-2"
    />
  </div>
</template>
<script setup lang="ts">
import { BrowserQRCodeReader, BrowserCodeReader } from "@zxing/browser";
import { onMounted, ref } from "vue";

const webcam = ref<HTMLVideoElement | null>(null);
const selectedDeviceId = ref<string>();

onMounted(async () => {
  console.log("MOUNTED", navigator.mediaDevices);
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(async function (stream) {
        if (webcam.value) {
          webcam.value.srcObject = stream;
          webcam.value.play();
          /*
          const videoInputDevices =
            await BrowserCodeReader.listVideoInputDevices();
          console.log(videoInputDevices);
          selectedDeviceId.value = videoInputDevices[3].deviceId;
          const qrCodeReader = new BrowserQRCodeReader();
          await qrCodeReader.decodeFromVideoDevice(
            selectedDeviceId.value,
            webcam.value,
            handleScannSuccess
          );

           */
        }
      });
  }
});

function handleScannSuccess(result, error, controls) {
  // console.log(error);
  // console.log(result);
  // console.log(controls);
}
</script>
