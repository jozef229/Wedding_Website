<template>
  <div id="galery" class="flex justify-center items-center gap-10 flex-col my-6 mt-8">
    <h2 class="text-gray-600 text-3xl font-semibold text-center">{{ $t('gallery_name') }}</h2>
    <div class="md:w-6/12 w-full">
      <iframe class="w-full " id="ytplayer" type="text/html" width="640" height="360" :src="'https://www.youtube.com/embed/Jx4MU9yxlFU?autoplay=0&origin=http://example.com'" frameborder="0"></iframe>
    </div>
    <div ref="galery2" class="sm:mx-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
      <div class="test transform"
        v-for="image in images" :key="image">
        <div class="py-8 px-8 sm:py-4 sm:px-4">
          <img class="w-full h-full rounded-lg object-cover object-top" :src="image" alt="jozef-mima">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      images: [
        require('@/assets/galery/4.jpg'),
        require('@/assets/galery/5.jpg'),
        require('@/assets/galery/6.jpg'),
        require('@/assets/galery/7.jpg'),
        require('@/assets/galery/8.jpg'),
        require('@/assets/galery/9.jpg'),
        require('@/assets/galery/10.jpg'),
        require('@/assets/galery/11.jpg'),
        require('@/assets/galery/1.jpg'),
        require('@/assets/galery/2.jpg'),
      ]
    }
  },
  mounted() {
    // const target = this.$refs.galery.childNodes
    const tl = gsap.timeline({})

    // gsap.utils.toArray(target).forEach(element => {
    //   tl.from(element, {
    //     y: 12,
    //     scale: .6,
    //     opacity: 0,
    //     // duration: .8,
    //     scrub: .8,
    //   })    
    // })

    ScrollTrigger.create({
      trigger: this.$refs.galery,
      animation: tl,
      start: "top center",
      end: "+=50",

      autoAlpha: 1, 
      ease: "power1.in",
      overwrite: "auto",
    })
  },
}
</script>
