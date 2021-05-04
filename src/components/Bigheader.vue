<template>
  <div>
    <div id="header" class="flex flex-col items-center py-8 h-screen max-h-700 min-h-300 w-auto z-50 bg-center">
      <!-- <div class="w-96 text-center sm:mt-36 md:mt-32 lg:mt-28 mt-32"> -->
      <div class="sm:w-96 text-center sm:mt-20 md:mt-20 lg:mt-20 mt-20">
        <div class="text-gray-100 text-2xl font-paris font-semibold italic tracking-widest">{{ $t('bigheader_tongue') }}</div>
        <div class="text-gray-100 text-4xl font-quiksand font-semibold mt-4 mb-2">
          <span class="border-t border-b border-gray-200 flex-row-reverse border-opacity-50 tracking-widest">{{ $t('bigheader_mima') }}</span>
          ♡
          <span class="border-t border-b border-gray-200 flex-row-reverse border-opacity-50 tracking-widest">{{ $t('bigheader_jozo') }}</span>
        </div>
      </div>
    </div>
    <!-- <h2 class="text-center font-bold text-gray-700 py-8 mx-3">{{ $t('bigheader_invitation') }}</h2>
    <div class="grid gap-3 py-4">
      <div ref="trigger3" class="border-r border-gray-200 P-4">
        <p class="text-gray-700 font-bold text-base text-center mb-2">{{ $t('bigheader_ceremony') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_start') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_name') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_ceremony_address') }}</p>
      </div>
      <div ref="trigger4" class="border-l border-gray-100 P-4">
        <p class="text-gray-700 font-bold text-base text-center mb-2">{{ $t('bigheader_reception') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_start') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_name') }}</p>
        <p class="text-center text-base text-gray-700">{{ $t('bigheader_reception_address') }}</p>
      </div>
    </div> -->

    <h2 class="border-t-2 pt-6 mb-6 text-gray-600 text-3xl font-semibold text-center">{{ $t('bigheader_heroes') }}</h2>

    <div class="grid sm:grid-cols-2 grid-cols-1">
      <div ref="trigger" class="flex flex-col justify-start items-center p-4 border border-gray-200">
        <img class="rounded-full shadow-md my-2 w-32 h-32" src="@/assets/mima.jpg" alt="mima">
        <p class="text-gray-700 font-bold text-base mt-2">{{ $t('bigheader_bride') }}</p>
        <p class="text-2xl text-gray-600 font-quiksand my-3 text-center">{{ $t('bigheader_full_name_mima') }}</p>
        <p class="max-w-64 text-center text-sm text-gray-700">{{ $t('bigheader_mima_citation') }}</p>
        <sosial-media-mima class="text-gray-700 text-sm" />
      </div>
      <div ref="trigger2" class="flex flex-col justify-start items-center p-4 border border-gray-200">
        <img class="rounded-full shadow-md my-2 w-32 h-32" src="@/assets/jozo.jpg" alt="jozef">
        <p class="text-gray-700 font-bold text-base mt-2">{{ $t('bigheader_groom') }}</p>
        <p class="text-2xl text-gray-600 font-quiksand my-3 text-center">{{ $t('bigheader_full_name_jozo') }}</p>
        <p class="max-w-64 text-center text-sm text-gray-700">{{ $t('bigheader_jozo_citation') }}</p>
        <sosial-media-jozo class="text-gray-700 text-sm" />
      </div>
    </div>
  </div>
</template>

<script>
import SosialMediaJozo from '@/components/sosial_media/jozo.vue'
import SosialMediaMima from '@/components/sosial_media/mima.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    SosialMediaJozo,
    SosialMediaMima,
  },
  methods: {
    showModal() {
      this.$modal.show('newPost')
    }
  },
  mounted() {
    document.title = "Jožo a Mima"  
    const trigger = [
      this.$refs.trigger3,
      this.$refs.trigger4,
      this.$refs.trigger, 
      this.$refs.trigger2,
      ]
    
    const tl = gsap.timeline()
    const option = {
      scale: .4,
      opacity: .05,
      duration: .75,
      scrub: .4,
    }

    tl.from(trigger[0], option)
    tl.from(trigger[1], option)
    tl.from(trigger[2], option)
    tl.from(trigger[3], option)

    ScrollTrigger.create({
      trigger: '#ceremony',
      animation: tl,
      toggleActions: "restart none pause",
      start: "top center",
      end: "bottom center",

      autoAlpha: 1, 
      ease: "power1.in",
      overwrite: "auto",
    })
  },
}
</script>

<style scoped>
  #header {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t1.jpg');
      animation: chbg 35s infinite alternate;
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;

    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  @keyframes chbg {
  0% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t1.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  5% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t2.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  10% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t3.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  15% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t4.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  20% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t5.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  25% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t6.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  30% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t7.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  35% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t8.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }

  40% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t9.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  45% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t10.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  50% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t11.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  60% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t12.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  70% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t13.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  80% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t14.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  90% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t15.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }
  100% {
    background-image: 
      linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
      url('~@/assets/test_bg/t16.jpg');
      background-repeat:no-repeat;
      -webkit-background-size:cover;
      -moz-background-size:cover;
      -o-background-size:cover;
      background-size:cover;
      background-position:center;
    clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0);
  }

}
  
</style>







