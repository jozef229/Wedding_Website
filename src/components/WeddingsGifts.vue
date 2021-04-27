<template>
    <div id="wg" class="bg-local bg-right bg-cover w-full flex flex-col justify-center items-center h-96">
        <div class="grid sm:grid-cols-2 grid-cols-1">
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                
            </div>
            <div class="flex flex-row justify-center items-center flex-col p-4 gap-4">
                <h2 class="text-gray-600 mb-5 mt-5 text-3xl font-semibold text-center">{{ $t('weddinggift_name') }}</h2>
                <div class="flex-none w-80"></div>
                <div class="flex-grow w-auto w-96">
                    <p class="text-gray-600 text-base text-center max-w-lg">{{ $t('weddinggift_text') }}</p>
                </div>
            </div>
        </div> 
    </div>  
</template>

<script>
export default {
}
</script>

<style scoped>
    #wg {
        background-image: url('~@/assets/bg_gifts_3.jpg');
        /* clip-path: polygon(100% 0, 100% calc(100vh - 64px), 50% 100%, 0 calc(100vh - 64px), 0 0); */
        clip-path: polygon(100% 0, 100% 100%, 50% 92%, 0% 100%, 0 0, 50% 8%);
    }
</style>
