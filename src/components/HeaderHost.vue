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
        <div class="grid sm:grid-cols-1 grid-cols-1">
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                <h2 class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ personalized.name }}</h2>
                <!-- <div class="flex-none w-80"></div> -->
                <!-- <div class="flex-grow w-auto w-96">
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ personalized.text}}</p>
                </div> -->
            </div>
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                <img class="flex-shrink h-72 rounded-lg shadow-lg" :src="personalized.image" alt="Prvý pokus">
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
import halaga from "../assets/personalized/halaga.png"
import havadej from "../assets/personalized/havadej.png"
import holodnakova from "../assets/personalized/holodnakova.png"
import marcinkovci from "../assets/personalized/marcinkovci.png"
import palko from "../assets/personalized/palko.png"
import tothova from "../assets/personalized/tothova.png"
import vargovci from "../assets/personalized/vargovci.png"
import onofrejova from "../assets/personalized/onofrejova.png"
import bulikovci from "../assets/personalized/bulikovci.png"
import gutyan from "../assets/personalized/gutyan.png"
import hurtikova from "../assets/personalized/hurtikova.png"
import sabovci from "../assets/personalized/sabovci.png"
import steiner from "../assets/personalized/steiner.png"
import steinerovci from "../assets/personalized/steinerovci.png"
import vojtko from "../assets/personalized/vojtko.png"
import brasko from "../assets/personalized/brasko.png"


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
                else if(pass == "halaga"){
                    this.personalized.image = halaga
                    this.personalized.name = "Ahoj dakujeme ze prides halaga"
                }
                else if(pass == "havadej"){
                    this.personalized.image = havadej
                    this.personalized.name = "Ahoj dakujeme ze prides havadej"
                }
                else if(pass == "holodnakova"){
                    this.personalized.image = holodnakova
                    this.personalized.name = "Ahoj dakujeme ze prides holodnakova"
                }
                else if(pass == "marcinkovci"){
                    this.personalized.image = marcinkovci
                    this.personalized.name = "Ahoj dakujeme ze prides marcinkovci"
                }
                else if(pass == "palko"){
                    this.personalized.image = palko
                    this.personalized.name = "Ahoj dakujeme ze prides palko"
                }
                else if(pass == "tothova"){
                    this.personalized.image = tothova
                    this.personalized.name = "Ahoj dakujeme ze prides tothova"
                }
                else if(pass == "vargovci"){
                    this.personalized.image = vargovci
                    this.personalized.name = "Ahoj dakujeme ze prides vargovci"
                }
                else if(pass == "onofrejova"){
                    this.personalized.image = onofrejova
                    this.personalized.name = "Ahoj dakujeme ze prides onofrejova"
                }
                else if(pass == "bulikovci"){
                    this.personalized.image = bulikovci
                    this.personalized.name = "Ahoj dakujeme ze prides bulikovci"
                }
                else if(pass == "gutyan"){
                    this.personalized.image = gutyan
                    this.personalized.name = "Ahoj dakujeme ze prides gutyan"
                }
                else if(pass == "hurtikova"){
                    this.personalized.image = hurtikova
                    this.personalized.name = "Ahoj dakujeme ze prides hurtikova"
                }
                else if(pass == "sabovci"){
                    this.personalized.image = sabovci
                    this.personalized.name = "Ahoj dakujeme ze prides sabovci"
                }
                else if(pass == "steiner"){
                    this.personalized.image = steiner
                    this.personalized.name = "Ahoj dakujeme ze prides steiner"
                }
                else if(pass == "steinerovci"){
                    this.personalized.image = steinerovci
                    this.personalized.name = "Ahoj dakujeme ze prides steinerovci"
                }
                else if(pass == "vojtko"){
                    this.personalized.image = vojtko
                    this.personalized.name = "Ahoj dakujeme ze prides vojtko"
                }
                else if(pass == "brasko"){
                    this.personalized.image = brasko
                    this.personalized.name = "Ahoj dakujeme ze prides brasko"
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
