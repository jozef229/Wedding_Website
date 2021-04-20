<template>
  <div id="our-story" ref="panel" class="flex justify-center items-center flex-col overflow-hidden">
    
    <img class="w-32 h-32" src="@/assets/our-story.png" alt="our-story">
    <p class="text-center text-gray-600 font-base max-w-sm mt-2">{{ $t('ourstory_quote') }}</p> 
    <div id='time-line' class="flex flex-col gap-8 my-8 text-right">
      <div ref="snapOne" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="meet.image" alt="Prvé stretnutie">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('ourstory_name_1') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-right">{{ $t('ourstory_date_1') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('ourstory_text_1') }}</p>
        </div>
      </div>
      <div ref="snapTwo" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="awkward_mima.image" alt="Trápne chvýle 1.">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('ourstory_name_2') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-left">{{ $t('ourstory_date_2') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('ourstory_text_2') }}</p>
        </div>
      </div>
      <div ref="snapTree" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="awkward_jozo.image" alt="Trápne chvýle 2.">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('ourstory_name_3') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-right">{{ $t('ourstory_date_3') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('ourstory_text_3') }}</p>
        </div>
      </div>
      <div ref="snapFour" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="dance.image" alt="Spojenie">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('ourstory_name_4') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-left">{{ $t('ourstory_date_4') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('ourstory_text_4') }}</p>
        </div>
      </div>
      <div ref="snapFive" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="first.image" alt="Začiatok vzťahu">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('ourstory_name_5') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-right">{{ $t('ourstory_date_5') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('ourstory_text_5') }}</p>
        </div>
      </div>
      <div ref="snapSix" class="snap-right two flex md:flex-row justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="request_hand.image" alt="Prvý pokus">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-left">{{ $t('ourstory_name_6') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-left">{{ $t('ourstory_date_6') }}</p>
          <p class="text-gray-600 text-base text-center md:text-left max-w-lg">{{ $t('ourstory_text_6') }}</p>
        </div>
      </div>
      <div ref="snapSeven" class="flex md:flex-row-reverse justify-center items-center flex-col gap-4">
        <div class="flex-grow w-80"></div>
        <img class="flex-shrink w-32 h-32 rounded-full shadow-lg" :src="relation.image" alt="Žiadosť o ruku">
        <div class="snap-text flex-grow w-80">
          <p class="font-bold text-base text-center md:text-right">{{ $t('ourstory_name_7') }}</p>
          <p class="text-gray-500 text-xs my-2 text-center md:text-right">{{ $t('ourstory_date_7') }}</p>
          <p class="text-gray-600 text-base text-center md:text-right max-w-lg">{{ $t('ourstory_text_7') }}</p>
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
      meet: {
        image: require('@/assets/story/meet.png')
      },
      awkward_mima: {        
        image: require('@/assets/story/awkward_mima.png')
      },
      awkward_jozo: {        
        image: require('@/assets/story/awkward_jozo.png')
      },
      dance: {        
        image: require('@/assets/story/dance.png')
      },
      first: {        
        image: require('@/assets/story/first.png')
      },
      request_hand: {        
        image: require('@/assets/story/story1.png')
      },
      relation: {
        image: require('@/assets/story/story2.png')
      }
    }
  },
  methods: {},
  mounted() {
    const tl = gsap.timeline()
    tl.from(this.$refs.snapOne, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.snapTwo, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.snapTree, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.snapFour, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.snapFive, {
      x: -100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.snapSix, {
      x: 100,
      opacity: 0,
      duration: 0.3,
      scale: .8,
      scrub: .5
      })
    tl.from(this.$refs.snapSeven, {
      x: -100,
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
