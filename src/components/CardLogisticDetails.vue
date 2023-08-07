<template>
  <section class="rounded-md border border-gray-300 text-sm">
    <header class="border border-b-gray-300 px-4 py-2">
      <h3 class="font-medium text-gray-900">Logistics Details</h3>
    </header>
    <main
      class="grid grid-cols-1 divide-y divide-gray-300 md:grid-cols-2 md:divide-x lg:grid-cols-[1fr_1fr_min-content]"
    >
      <!-- Customer info -->
      <div class="flex flex-col">
        <section class="p-4">
          <header class="flex items-center">
            <UserIcon class="mr-2 h-5 w-5 text-gray-400" />
            <p class="flex-1 font-normal text-gray-500">Customer</p>
            <PencilSquareIcon class="h-5 w-5 text-blue-600" />
          </header>
          <main class="mt-2 flex flex-col border-b border-b-gray-300">
            <p class="font-bold text-gray-900">Rigoberto Bermejo</p>
            <p>+34 606 123 456</p>
            <p class="mb-4">rigoberto.bermejo@topo.es</p>
          </main>
        </section>
        <section class="flex flex-col gap-y-1 px-4 font-normal">
          <div class="mt-2 flex items-center">
            <BookOpenIcon class="mr-2 h-5 w-5 text-gray-400" />
            <p class="flex-1">Serv.: T, M, I, RAEE</p>
            <PencilSquareIcon class="h-5 w-5 text-blue-600" />
          </div>
          <div class="flex">
            <CubeIcon class="mr-2 h-5 w-5 text-gray-400" />
            <p class="flex-1">Content: 4 pkgs. - 5 art.</p>
            <PencilSquareIcon class="h-5 w-5 text-blue-600" />
          </div>
          <div class="flex border-b border-b-gray-300">
            <CubeTransparentIcon class="mr-2 h-5 w-5 text-gray-400" />
            <p class="flex-1">Specs.: 189 kg - 0,002 m3</p>
            <PencilSquareIcon class="mb-4 h-5 w-5 text-blue-600" />
          </div>
        </section>
        <section class="px-4">
          <ol role="list" class="mt-4 overflow-hidden">
            <li class="relative">
              <div
                class="absolute left-4 top-4 -ml-[2px] mt-0.5 h-full w-1 bg-gray-300"
                aria-hidden="true"
              />
              <div class="group relative flex w-full items-center">
                <span class="flex h-12 items-center">
                  <span
                    class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white"
                  >
                    PZ
                  </span>
                </span>
                <button class="flex w-full justify-between">
                  <span class="ml-4 flex min-w-0 flex-1 flex-col items-start">
                    <span class="text-sm font-bold">CAT-IN</span>
                  </span>
                </button>
              </div>
            </li>
            <li class="relative">
              <div class="group relative flex w-full items-center">
                <span class="flex h-12 items-center">
                  <span
                    class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white"
                  >
                    DZ
                  </span>
                </span>
                <button class="flex w-full justify-between">
                  <span class="ml-4 flex min-w-0 flex-1 flex-col items-start">
                    <span class="text-sm font-bold">VAL</span>
                  </span>
                </button>
              </div>
            </li>
          </ol>
        </section>
      </div>
      <!-- Address Info -->
      <div class="flex flex-col">
        <section class="p-4">
          <header class="flex items-center">
            <HomeIcon class="mr-2 h-5 w-5 text-gray-400" />
            <p class="flex-1 font-normal text-gray-500">Delivery</p>
            <PencilSquareIcon class="h-5 w-5 text-blue-600" />
          </header>
          <main class="mt-4 flex flex-col">
            <p class="font-bold text-gray-900">
              Calle del tornillo perdido, 114
            </p>
            <p>bajo izquierda</p>
            <p class="mb-4">
              09827, Villaarriba de Almendralejo, Guadalajara, España
            </p>
          </main>
        </section>
        <section class="p-4">
          <header class="flex items-center">
            <BuildingStorefrontIcon class="mr-2 h-5 w-5 text-gray-400" />
            <p class="flex-1 font-normal text-gray-500">Pickup</p>
            <PencilSquareIcon class="h-5 w-5 text-blue-600" />
          </header>
          <main class="mt-4 flex flex-col">
            <p class="font-bold text-gray-900">
              Calle del tornillo perdido, 114
            </p>
            <p>bajo izquierda</p>
            <p class="mb-4">
              09827, Villaarriba de Almendralejo, Guadalajara, España
            </p>
          </main>
        </section>
      </div>
      <!-- Map -->
      <div class="md:col-span-2 lg:col-auto">
        <img
          class="hidden max-h-[350px] max-w-[290px] lg:block"
          :src="mapUrlPortrait"
          alt="Google Map with Marker"
        />
        <img
          class="h-full w-full lg:hidden"
          :src="mapUrlLandScape"
          alt="Google Map with Marker"
        />
      </div>
    </main>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import {
  UserIcon,
  PencilSquareIcon,
  BookOpenIcon,
  CubeIcon,
  CubeTransparentIcon,
  HomeIcon,
  BuildingStorefrontIcon,
} from "@heroicons/vue/24/outline";

const mapUrlPortrait = computed(() => {
  const API_KEY = import.meta.env.VITE_APP_GOOGLE_MAPS_TOKEN;
  const center = { lat: 48.8566, lng: 2.3522 };
  const zoom = 15;
  const size = "290x350";
  const markerLocation = `${center.lat},${center.lng}`;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=${zoom}&size=${size}&markers=${markerLocation}&key=${API_KEY}`;
});
const mapUrlLandScape = computed(() => {
  const API_KEY = import.meta.env.VITE_APP_GOOGLE_MAPS_TOKEN;
  const center = { lat: 48.8566, lng: 2.3522 };
  const zoom = 15;
  const size = "400x150";
  const markerLocation = `${center.lat},${center.lng}`;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=${zoom}&size=${size}&markers=${markerLocation}&key=${API_KEY}`;
});
</script>
