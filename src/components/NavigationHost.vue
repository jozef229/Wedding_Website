<template>
  <nav class="flex items-center justify-between flex-wrap gap-2 px-8 py-4 bg-gray-900 bg-opacity-90  fixed top-0 w-full z-10 overflow-y-auto">
    <div class="block">
      <button v-if="!isOpen && cw && clientWidth()" @click="isOpen = !isOpen" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" stroke="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>

      <button v-if="isOpen && cw && clientWidth()" @click="isOpen = !isOpen" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-3 w-3"  viewBox="0 0 20 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      

    </div>
    <div v-if="isOpen" class="align-middle w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow text-lg text-center">
        <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" href="/">{{ $t('navigationhost_introduction') }}</a> 
        <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="goto('information')">{{ $t('navigationhost_info') }}</a>
        <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="goto('transport_program')">{{ $t('navigationhost_program') }}</a>


        <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="goto('wg')">{{ $t('navigationhost_weddings_gift') }}</a>
        <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="goto('transport_hotel')">{{ $t('navigationhost_accommodation_and_transport') }}</a>
        <!-- <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="goto('photo_after_weddings')">{{ $t('navigationhost_photo_after_weddings') }}</a>
        <a class="px-4 border-gray-600 lg:border-r-2 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="goto('insert_photo_weddings')">{{ $t('navigationhost_insert_photo_weddings') }}</a> -->
        <a class="px-4 text-gray-300 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline" @click="showModal()">{{ $t('navigationhost_rsvp') }}</a>
      </div>
      <!-- <div class="locale-changer"> -->
        <!-- <select v-model="$i18n.locale" class="text-gray-300 bg-gray-900 " > -->
            <!-- <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option> -->
        <!-- </select> -->
      <!-- </div> -->
    </div>
  </nav>
</template>


<script>
export default {
  name: 'locale-changer',
  data() {
    return {
      isOpen: true,
      cw: true,
      langs: ['en', 'sk'],
    }
  },
  created() {
  window.addEventListener("resize", this.clientWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.clientWidth);
  },
  methods: {
    goto(el) {
      // document.getElementById(el).scrollIntoView();
      if(window.innerWidth <= 1024){
        this.isOpen = false
      }
      
      const yOffset = -60; 
      const element = document.getElementById(el);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
      
    },
    showModal() {
      this.$modal.show('newRspv')
      // if(this.$i18n.locale == 'en'){
      //   window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScFcxPfZyZOEdWMRdCPqKbP5gUdWT811KlnINPG4yi8o3sxWA/viewform?usp=sf_link"
      //   }
      // else {
      //   window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSecxP8S8pK8POWUQJBiAi3wQY3__z0pzCDtne8l6NbjfMuCbw/viewform?usp=sf_link "
      // }
    },
    clientWidth(){
      // console.log(window.innerWidth)
      if(window.innerWidth > 1024){
        this.cw = false
        this.isOpen = true
        return false
      }
      else{
        this.cw = true
        if(this.previous_size == window.innerWidth){
          this.previous_size = window.innerWidth
        }
        else{
          this.previous_size = window.innerWidth
          this.isOpen = false
        }
        return true
      }
    }
  }
}
</script>
