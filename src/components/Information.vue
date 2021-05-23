<template>
    <div id="information" class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center">
        <h2 class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ $t('information_name') }}</h2>
        <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('information_text') }}</p>
        <div class="text-gray-600 text-base text-center max-w-lg">
            {{ $t('info_foto') }}
        </div>
        <a class="text-gray-600 font-bold" href="https://drive.google.com/drive/folders/1BVptsbzkzteSmnOjzMW2QQoQNnD76uaJ?usp=sharing">
            {{ $t('transport_hotel_link') }}
        </a>
        <a class="mt-4 text-gray-600 font-bold space-x-4" href="https://fb.me/e/2m6epgavb">
            {{ $t('info_FB') }}
            
        </a>

        <a class="mt-4 text-gray-600 font-bold space-x-4" href="https://fb.me/e/2m6epgavb">
        <svg class="h-10 w-10 text-blue-600 fill-current rounded border-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Twitter</title>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
        </a>
        
        <h2 class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ $t('information_foreigners') }}</h2>
        <div class="text-gray-600 text-base text-center max-w-lg" @click="goSurroundings()">
            {{ $t('info_Surroundings') }}
        </div>
        
        <img class="shadow-md mt-8 my-2 w-4/5 sm:w-2/5" src="@/assets/traveler.jpg" @click="goSurroundings()">
    </div>  
    
</template>

<script>
export default {
    methods:{
        goSurroundings(){
            window.location.href = "/host/" + this.$route.params.pass + "/surroundings"
        },
    }
}
</script>

<style>

</style>
