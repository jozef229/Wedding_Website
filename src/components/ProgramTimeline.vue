<template>
  <div id="transport_program" ref="panel" class="flex justify-center items-center flex-col overflow-hidden">
    <h2 class="mt-8 text-gray-600 text-3xl font-semibold text-center">{{ $t('programtimeline_head') }}</h2>
    <div id='time-line' class="flex flex-col gap-8 my-8 text-right">
      
      <div ref="p1" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/church.png" alt="Program1">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('programtimeline_name_1') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('programtimeline_text_1') }}</p>
        </div>
      </div>
      <div ref="p1x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p2" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/map.png" alt="Program2">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('programtimeline_name_2') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('programtimeline_text_2') }}</p>
        </div>
      </div>
      <div ref="p2x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p3" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/stiffening.png" alt="Program3">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('programtimeline_name_3') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('programtimeline_text_3') }}</p>
        </div>
      </div>
      <div ref="p3x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p4" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/eat.png" alt="Program4">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('programtimeline_name_4') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('programtimeline_text_4') }}</p>
        </div>
      </div>
      <div ref="p4x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p5" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/music.png" alt="Program5">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('programtimeline_name_5') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('programtimeline_text_5') }}</p>
        </div>
      </div>
      <div ref="p5x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p6" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/photos.png" alt="Program6">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('programtimeline_name_6') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('programtimeline_text_6') }}</p>
        </div>
      </div>
      <div ref="p6x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p7" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/eat.png" alt="Program7">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('programtimeline_name_7') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('programtimeline_text_7') }}</p>
        </div>
      </div>
      <div ref="p7x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p8" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/list.png" alt="Program8">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('programtimeline_name_8') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('programtimeline_text_8') }}</p>
        </div>
      </div>
      <div ref="p8x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p9" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/girl.png" alt="Program9">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('programtimeline_name_9') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('programtimeline_text_9') }}</p>
        </div>
      </div>
      <div ref="p9x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>
    
      <div ref="p10" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/drink.png" alt="Program10">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('programtimeline_name_10') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('programtimeline_text_10') }}</p>
        </div>
      </div>
      <div ref="p10x" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p11" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/love.png" alt="Program11">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('programtimeline_name_11') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('programtimeline_text_11') }}</p>
        </div>
      </div>
      <!-- <div ref="p11" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4 -mt-6 -mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#484848">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
      </div>

      <div ref="p8" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-24 h-24 rounded-full shadow-2xl" src="@/assets/wedding_icon/music.png" alt="Program8">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('programtimeline_name_8') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('programtimeline_text_8') }}</p>
        </div>
      </div> -->

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
    }
  },
  methods: {},
  mounted() {
    const tl = gsap.timeline()
    tl.from(this.$refs.p1, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p1x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p2, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p2x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p3, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p3x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p4, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p4x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p5, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p5x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p6, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p6x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p7, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p7x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p8, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p8x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p9, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p9x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p10, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.p10x, {
      x: -100,
      opacity: 0,
      duration: 0.1,
      scale: .8,
      scrub: .5
      }, "<")
    tl.from(this.$refs.p11, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })

    ScrollTrigger.create({
      trigger: this.$refs.panel,
      animation: tl,
      toggleActions: "restart none pause",
      start: "top center",
      end: "+=150",

      autoAlpha: 1, 
      ease: "power1.in",
      overwrite: "auto",
    })
  },
}
</script>
