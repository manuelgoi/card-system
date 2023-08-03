<template>
  <div
    class="relative cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-0"
  >
    <div class="h-1 w-10 bg-black"></div>
    <span
      class="absolute left-0 top-0 h-1 w-10 rotate-45 transform bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
    ></span>
    <span
      class="absolute left-0 top-0 h-1 w-10 -rotate-45 transform bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
    ></span>
  </div>
</template>
