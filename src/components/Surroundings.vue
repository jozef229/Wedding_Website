<template>
    <div id="surroundings" class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center">
        <h2 class="text-gray-600 mb-5 mt-20 text-3xl font-semibold text-center">{{ $t('surroundings_name_PM') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/PM.jpg">
        <p v-html="$t('surroundings_PM')" class=" mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_PK') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/PK.jpg">
        <p v-html="$t('surroundings_PK')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_SVP') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/SVP.jpg">
        <p v-html="$t('surroundings_SVP')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_PS') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/PS.jpg">
        <p v-html="$t('surroundings_PS')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_SH') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/SH.jpg">
        <p v-html="$t('surroundings_SH')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_KH') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/KH.jpg">
        <p v-html="$t('surroundings_KH')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_SOP') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/SOP.jpg">
        <p v-html="$t('surroundings_SOP')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_SNVB') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/SNVB.jpg">
        <p v-html="$t('surroundings_SNVB')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_VT') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/VT.jpg">
        <p v-html="$t('surroundings_VT')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_BCKS') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/BCKS.jpg">
        <p v-html="$t('surroundings_BCKS')" class="mt-5 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
        <h2 class="text-gray-600 mb-5 mt-10 text-3xl font-semibold text-center">{{ $t('surroundings_name_BAR') }}</h2>
        <img class="rounded-lg shadow-md my-2 w-4/5 lg:w-2/5" src="@/assets/surroundings/BAR.jpg">
        <p v-html="$t('surroundings_BAR')" class="mt-5 mb-10 text-gray-600 text-base text-justify lg:max-w-3xl w-auto mx-8 sm:mx-16"></p>

        
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
          //  ps http://www.stm-ke.sk/index.php/sk/pobocky-2/solivar-pri-presove
        // op https://www.slovenskeopalovebane.sk/
        }
    },
    mounted() {
        let pass = this.$route.params.pass
        if(pass == "alma"){
            this.$i18n.locale = 'en'
        }
        else if(pass == "thily"){
            this.$i18n.locale = 'en'
            
        }
        else if(pass == "jacques"){
            this.$i18n.locale = 'en'
        }
        else if(pass == "ele"){
            this.$i18n.locale = 'en'
        }
        else{
            this.$i18n.locale = 'sk'
        }
        document.title = "Jožo a Mima" 
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

