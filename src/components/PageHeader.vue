<template>
  <div class="relative h-[320px] md:h-[490px] bg-cover mt-[120px] bg-center"
    style="background-image: url('/assets/images/bg.svg');">
    <!-- Desktop Version -->
    <div class="absolute inset-0 flex items-center max-w-7xl mx-auto justify-start hidden lg:flex">
      <div class="relative w-[561px] h-[246px]">
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-[#30110a]/80"></div>

        <!-- Accent Line -->
        <div class="absolute left-0 top-[45px] w-[9px] h-[74px] bg-[#ffba00]"></div>

        <!-- Statement Text -->
        <p class="absolute left-[63px] top-[130px] max-w-96 text-white text-lg font-normal">
          A financial safety net designed for you and everything that matters to you.
        </p>

        <!-- Title Text -->
        <h1 class="absolute left-[64px] top-[37px] text-[#ffba00] font-black text-3xl">
          NBK Bancassurance <br> Intermediary Limited
        </h1>
      </div>
    </div>

    <!-- Mobile Version -->
    <div class="absolute inset-0 bg-cover bg-center lg:hidden" style="background-image: url('/assets/images/bg.svg');">
      <!-- Mobile Background Overlay -->
      <div class="absolute inset-0 bg-[#30110a]/80"></div>

      <!-- Mobile Content Container -->
      <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
        <!-- Title Text -->
        <h1 class="text-[#ffba00] text-2xl font-bold text-center mb-4">
          NBK Bancassurance Intermediary Limited
        </h1>

        <!-- Statement Text -->
        <p class="text-white text-lg text-center">
          A financial safety net designed for you and everything that matters to you.
        </p>


      </div>
    </div>
  </div>
</template>