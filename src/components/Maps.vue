<template>
  <div id="location" class=" mt-3">
    <div class="my-3">
      <h2 class="text-gray-600 text-3xl font-semibold text-center">{{ $t('maps_address') }}</h2>
      <!-- <p class="text-gray-500 text-lg text-center">{{ $t('maps_full_address') }}</p> -->
    </div>

    <!-- <h2 class="text-center font-bold text-gray-700 py-8 mx-3">{{ $t('bigheader_invitation') }}</h2> -->
    <div class="grid gap-3 py-4">
      <div ref="trigger3" class="border-r border-gray-200 P-4">
        <!-- <p class="text-gray-700 font-bold text-base text-center mb-2">{{ $t('bigheader_ceremony') }}</p> -->
        <p class="text-center text-base text-gray-700">{{ $t('maps_ceremony_start') }}</p>
        <!-- <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_name') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_address') }}</p> -->
      </div>
      <!-- <div ref="trigger4" class="border-l border-gray-100 P-4">
        <p class="text-gray-700 font-bold text-base text-center mb-2">{{ $t('bigheader_reception') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_start') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_name') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_address') }}</p>
      </div> -->
    </div>

    <!-- <iframe class="w-full h-96" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9V08O4DyPkcRiI18g07e1os&key=AIzaSyBB7-8kCFQadmanSMHH4oepuJDjnsxa0fg" allowfullscreen="" loading="lazy"></iframe> -->
    <iframe class="w-full h-96" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJez6pv2LtPkcRqIohgRlaAFY&key=AIzaSyBB7-8kCFQadmanSMHH4oepuJDjnsxa0fg" allowfullscreen="" loading="lazy"></iframe>
    
  </div>
</template>



