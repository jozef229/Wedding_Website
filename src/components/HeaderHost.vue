<template>
    <div>
        <div id="header" class="flex flex-col items-center py-8 h-screen max-h-700 w-auto z-50 bg-center">
        <div class="w-96 text-center sm:mt-36 md:mt-32 lg:mt-28 mt-32">
            <div class="mt-20 text-gray-100 text-5xl font-quiksand font-semibold mt-4 mb-2">
                <span class="border-gray-200 flex-row-reverse border-opacity-50 tracking-widest">{{ $t('headerhost_name') }}</span>
            </div>
            <div class="mt-20 grid grid-cols-4 gap-6">
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-2xl text-center font-bold p-4">{{ day }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_day') }}</p>
                </div>
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-2xl text-center font-bold p-4">{{ hour }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_hour') }}</p>
                </div>
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-2xl text-center font-bold p-4">{{ minute }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_minute') }}</p>
                </div>
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-2xl text-center font-bold p-4">{{ second }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_secound') }}</p>
                </div>
            </div>
            <div class="mt-20">
                <button v-on:click="showModal()" class="bg-gray-600 text-gray-50 shadow-md px-3 py-4 rounded-md -mt-10 mb-8 focus:ring-4 focus:ring-yellow-200 focus:outline-non">{{ $t('headerhost_invitation') }}</button>
            </div>
        </div>
    </div>





    <div v-if="imageByPass()" class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center h-96">
        <div class="grid sm:grid-cols-2 grid-cols-1">
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                <img class="flex-shrink h-64 rounded-lg shadow-lg" :src="personalized.image" alt="Prvý pokus">
            </div>
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                <h2 class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ personalized.name }}</h2>
                <div class="flex-none w-80"></div>
                <div class="flex-grow w-auto w-96">
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ personalized.text}}</p>
                </div>
            </div>
        </div> 
    </div>  


    </div>
</template>


<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ulicna from "../assets/personalized/ulicna.png"

gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        countDownDate: '',
        showPersonalized: true,
        personalized: {        
            image: require('@/assets/mima.png'),
            text: ''
        },
        picker: ''
        }
    },
    methods: {
        imageByPass: function() {
            try {
                let pass = this.$route.params.pass
                if(pass == "ulicna"){
                    this.personalized.image = ulicna
                    this.personalized.name = "Dakujeme michi ze si tu"
                    this.personalized.text = "Dakujeme michi ze si tu"
                }
                // else if(pass == ""){
                //     this.personalized.image = 
                //     this.personalized.name = ""
                //     this.personalized.text = ""
                // }
                else {
                    this.personalized.image = require('@/assets/mima.png')
                    return false
                }
                return true
            } catch (e) {
                this.personalized.image = require('@/assets/mima.png')
                return false
            }
        },
        dataPicker: function() {

            document.title = "Jožo a Mima"  
            this.picker = setInterval(() => {
                const now = new Date().getTime();
                const distance = this.countDownDate - now;
        
                this.day   = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.hour    = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minute  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.second  = Math.floor((distance % (1000 * 60)) / 1000);
        
                if (distance < 0 ) {
                clearInterval(this.picker);
                }
            }, 1000);
        },    
        showModal() {
            this.$modal.show('newRspv')
            // console.log(this.$i18n.locale)
            // if(this.$i18n.locale == 'en'){
            //     window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScFcxPfZyZOEdWMRdCPqKbP5gUdWT811KlnINPG4yi8o3sxWA/viewform?usp=sf_link"
            //     }
            // else {
            //     window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSecxP8S8pK8POWUQJBiAi3wQY3__z0pzCDtne8l6NbjfMuCbw/viewform?usp=sf_link"
            // }
        }
    },
    beforeDestroy() {
        clearInterval(this.picker)
    },
    mounted() {
        this.countDownDate = new Date("August 7, 2021 15:00:00").getTime();
        this.dataPicker();
    },
}
</script>

<style scoped>
    #header {
        background-image: 
        linear-gradient(0deg, #00000088 20%, #ffffff44 100%), 
        url('~@/assets/bg_party.png');
        clip-path: polygon(100% -64px, 100% 90%, 50% 100%, 0 90%, 0 -64px);
        /* clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0); */
    }
</style>
