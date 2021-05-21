<template>
    <div>
        <div id="header" class="flex flex-col items-center py-8 max-h-700 w-auto z-50 bg-center">
        <div class="sm:w-96 text-center sm:mt-36 md:mt-32 lg:mt-28 mt-20">
            <div class="mt-5 text-gray-100 text-5xl font-quiksand font-semibold mt-4 mb-2">
                <span class="border-gray-200 flex-row-reverse border-opacity-50 tracking-widest">{{ $t('headerhost_name') }}</span>
            </div>
            <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 p-4">
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-xl sm:text-2xl text-center font-bold sm:p-4 p-2">{{ day }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_day') }}</p>
                </div>
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-xl sm:text-2xl text-center font-bold sm:p-4 p-2">{{ hour }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_hour') }}</p>
                </div>
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-xl sm:text-2xltext-center font-bold sm:p-4 p-2">{{ minute }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_minute') }}</p>
                </div>
                <div>
                    <div class="bg-gray-600 rounded-lg text-gray-50 text-xl sm:text-2xl text-center font-bold sm:p-4 p-2">{{ second }}</div>
                    <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_secound') }}</p>
                </div>
            </div>
            <div class="mt-5 p-4">
                <button v-on:click="showModal()" class="bg-gray-600 text-gray-50 shadow-md px-3 py-4 rounded-md -mt-10 mb-8 focus:ring-4 focus:ring-yellow-200 focus:outline-non">{{ $t('headerhost_invitation') }}</button>
            </div>
        </div>
    </div>



    <div v-if="imageByPass()" class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center h-96">
        <div class="grid sm:grid-cols-1 grid-cols-1">
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                <h2 class="text-gray-600 mt-10 text-3xl font-semibold text-center">{{ personalized.name }}</h2>
                <!-- <div class="flex-none w-80"></div> -->
                <!-- <div class="flex-grow w-auto w-96">
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ personalized.text}}</p>
                </div> -->
            </div>
            <div class="pb-10 flex flex-row justify-center items-center flex-col p-4 gap-4">
                <img v-if="personalized.image" class="flex-shrink h-72 rounded-lg shadow-lg" :src="personalized.image" >
            </div>
        </div> 
    </div>  

    <!-- <div v-if="imageByPass()" class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center h-96">
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
    </div>   -->


    </div>
</template>


<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ulicna from "../assets/personalized/ulicna.jpg"
import halaga from "../assets/personalized/halaga.jpg"
import havadej from "../assets/personalized/havadej.jpg"
import holodnakova from "../assets/personalized/holodnakova.jpg"
import marcinkovci from "../assets/personalized/marcinkovci.jpg"
import palko from "../assets/personalized/palko.jpg"
import tothova from "../assets/personalized/tothova.jpg"
import vargovci from "../assets/personalized/vargovci.jpg"
import pvp from "../assets/personalized/onofrejova.jpg"
import bulikovci from "../assets/personalized/bulikovci.jpg"
import gutyan from "../assets/personalized/gutyan.jpg"
import hurtikovci from "../assets/personalized/hurtikova.jpg"
import sabovci from "../assets/personalized/sabovci.jpg"
import steiner from "../assets/personalized/steiner.jpg"
import steinerovci from "../assets/personalized/steinerovci.jpg"
import vojtko from "../assets/personalized/vojtko.jpg"
import brasko from "../assets/personalized/brasko.jpg"
import svarcovci from "../assets/personalized/svarcovci.jpg"
import matich from "../assets/personalized/matich.jpg"
import sestricka from "../assets/personalized/sestricka.jpg"
import hrinkovci from "../assets/personalized/hrinkovci.jpg"
import ujopeto from "../assets/personalized/ujo.jpg"
import nemecek from "../assets/personalized/nemecek.jpg"
import dresto from "../assets/personalized/dresto.jpg"
import jusko from "../assets/personalized/jusko.jpg"
import petrov from "../assets/personalized/petrov.jpg"
import macky from "../assets/personalized/macky.jpg"
import masaryk from "../assets/personalized/masaryk.jpg"


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
            image: require('@/assets/mima.jpg'),
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
                    this.personalized.name = "Ahoj Michi, tešíme sa na teba! :)"
                }

                if(pass == "billy"){
                    this.personalized.image = null
                    this.personalized.name = "Ahojte Erik a Natálka, tešíme sa na vás! :)"
                }

                else if(pass == "ujopeto"){
                    this.personalized.image = ujopeto
                    this.personalized.name = "Ahoj ujo, tešíme sa na teba! :)"
                }
                else if(pass == "ujoluky"){
                    // this.personalized.image = null
                    this.personalized.name = "Ahoj ujo, tešíme sa na teba! :)"
                    
                }
                else if(pass == "nela"){
                    // this.personalized.image = null
                    this.personalized.name = "Ahojte, tešíme sa na teba! :)"
                    
                }
                else if(pass == "halaga"){
                    this.personalized.image = halaga
                    this.personalized.name = "Ahoj Paťko, tešíme sa na teba! :)"
                }
                else if(pass == "nemecek"){
                    this.personalized.image = nemecek
                    this.personalized.name = "Ahoj Andrej, tešíme sa na teba! :) PS: dokumentácie si zo sebou neber :D"
                }
                else if(pass == "dresto"){
                    this.personalized.image = dresto
                    this.personalized.name = "Ahoj Filip, tešíme sa na teba! PS: bude aj domaca nemusiš víno ani pivo :)"
                }
                else if(pass == "jusko"){
                    this.personalized.image = jusko
                    this.personalized.name = "Ahoj Jakub, tešíme sa na teba! :) PS: bude domaca"
                }
                else if(pass == "petrov"){
                    this.personalized.image = petrov
                    this.personalized.name = "Ahoj Ivan, tešíme sa na teba! :)"
                }
                else if(pass == "macky"){
                    this.personalized.image = macky
                    this.personalized.name = "Ahoj Maťo, tešíme sa na teba! PS: ak neprideš, kuric ta bude strašiť do konca života :)"
                }
                else if(pass == "masaryk"){
                    this.personalized.image = masaryk
                    this.personalized.name = "Ahoj Dado, tešíme sa na teba! :) PS: Dufam že skončiš horšie ako na tejto fotke z chaty :)"
                }
                else if(pass == "hrinkovci"){
                    this.personalized.image = hrinkovci
                    this.personalized.name = "Ahoj babka a dedko, tešíme sa na vás! :)"
                }
                else if(pass == "sestricka"){
                    this.personalized.image = sestricka
                    this.personalized.name = "Ahoj Sestrička, tešíme sa na teba! :)"
                }
                else if(pass == "svarcovci"){
                    this.personalized.image = svarcovci
                    this.personalized.name = "Ahojte Vaness a Maťo, tešíme sa na vás! Veríme, že sa vidíme."
                }
                else if(pass == "matich"){
                    this.personalized.image = matich
                    this.personalized.name = "Ahoj Marečku, tešíme sa na teba! :) Veríme, že si to s nami prídeš užiť."
                }
                else if(pass == "havadej"){
                    this.personalized.image = havadej
                    this.personalized.name = "Ahoj Samko, tešíme sa na teba! :) PS: Pre teba alcohol-free."
                }
                else if(pass == "holodnakova"){
                    this.personalized.image = holodnakova
                    this.personalized.name = "Ahoj Lucka, tešíme sa na teba! :)"
                }
                else if(pass == "marcinkovci"){
                    this.personalized.image = marcinkovci
                    this.personalized.name = "Ahojte Marcinkovci, tešíme sa na vás! :) Verím, že si to s nami prídete užiť."
                }
                else if(pass == "palko"){
                    this.personalized.image = palko
                    this.personalized.name = "Ahoj Jurko, tešíme sa na teba! :) PS: Ak neprídeš, budem ťa strašiť."
                }
                else if(pass == "tothova"){
                    this.personalized.image = tothova
                    this.personalized.name = "Ahoj Kaji, tešíme sa na teba! :) PS: Dúfam, že si ready na žúrku roka ;)"
                }
                else if(pass == "vargovci"){
                    this.personalized.image = vargovci
                    this.personalized.name = "Ahojte, tešíme sa na vás! :)"
                }
                else if(pass == "pvp"){
                    this.personalized.image = pvp
                    this.personalized.name = "Ahojte Kika & Maťo, tešíme sa na vás! :) Inak Kika, PVP nechaj radšej doma :P"
                }
                else if(pass == "bulikovci"){
                    this.personalized.image = bulikovci
                    this.personalized.name = "Ahojte, tešíme sa na vás! :)"
                }
                else if(pass == "gutyan"){
                    this.personalized.image = gutyan
                    this.personalized.name = "Ahoj Adam, tešíme sa na teba! :) PS: Neboj, niekto ťa už na hotel odnesie :P"
                }
                else if(pass == "hurtikovci"){
                    this.personalized.image = hurtikovci
                    this.personalized.name = "Ahojte Adelka a Pavelko :P tešíme sa na vás! :)"
                }
                else if(pass == "sabovci"){
                    this.personalized.image = sabovci
                    this.personalized.name = "Ahojte, tešíme sa na vás! :)"
                }
                else if(pass == "steiner"){
                    this.personalized.image = steiner
                    this.personalized.name = "Ahojte, mrzí nás, že nemôžete dôjsť, ale snáď na nás budete aspoň myslieť :)"
                }
                else if(pass == "steinerovci"){
                    this.personalized.image = steinerovci
                    this.personalized.name = "Ahojte, tešíme sa na vás! :)"
                }
                else if(pass == "vojtko"){
                    this.personalized.image = vojtko
                    this.personalized.name = "Ahoj Lukáško, tešíme sa na teba! :) PS: Snáď aspoň na túto akciu prídeš načas."
                }
                else if(pass == "brasko"){
                    this.personalized.image = brasko
                    this.personalized.name = "Ahoj bráško a švagorko, tešíme sa na teba! :)"
                }
                // else if(pass == ""){
                //     this.personalized.image = 
                //     this.personalized.name = ""
                //     this.personalized.text = ""
                // }
                else {
                    // this.personalized.image = require('@/assets/mima.jpg')
                    return false
                }
                return true
            } catch (e) {
                // this.personalized.image = require('@/assets/mima.jpg')
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
        linear-gradient(0deg, #00000088 30%, #ffffff44 110%), 
        url('~@/assets/help2.jpg');
        clip-path: polygon(100% -64px, 100% 90%, 50% 100%, 0 90%, 0 -64px);
        background-repeat:no-repeat;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        background-size:cover;
        background-position:center;
        /* clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0); */
    }
</style>
