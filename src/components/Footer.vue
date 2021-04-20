<template>
  <div class="bg-gray-800 h-40 p-5 text-xl">
    <h3 class="text-center text-gray-100 tracking-wider">
      <router-link :to="{name: 'Anniversary'}">{{ $t('footer_mima') }} <span class="animate-pulse">❤</span> {{ $t('footer_jozo') }}</router-link>
    </h3>    
    <sosial-media-jozo class="text-gray-100" />
    <p class="text-center text-gray-300 text-lg mt-3">{{ $t('footer_make') }} <a href="https://www.facebook.com/jofy.varga/"> {{ $t('footer_nick') }}</a></p>
  </div>
</template>

<script>
import SosialMediaJozo from '@/components/sosial_media/jozo.vue'

export default {
  components: {
    SosialMediaJozo
  }  
}
</script>
