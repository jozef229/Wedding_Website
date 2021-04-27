<template>
    <modal name="newRspv" class="rounded-lg" height="80%" :width="widthActual()">
        <div class="flex center">
            <button v-on:click.prevent="reset()" class="hover:bg-red-500 hover:text-gray-100 rounded px-4 py-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </div>
        <div class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center overflow-y-auto">
            <iframe class="w-full " :src="actualSRC()" style="width:100%; height:95%;position:absolute;top:40px;left:0px;right:0px;bottom:0px"  height="100%" width="100%" frameborder="0" marginheight="0" marginwidth="0">Načítava sa…</iframe>

            
        </div>
    </modal>
</template>

<script>
export default {
data() {
    return {
        pass: '',
        err: '',
        show_err: false,
        error: {}
    }
},
methods: {
    heighMax(){
        let min = 250
        if(window.innerHeight < 100){
            min = 100
        }
        return window.innerHeight - min
    },
    widthMax(){
        let min = 550
        if(window.innerWidth < 1000){
            min = 50
        }
        if(window.innerWidth < 400){
            min = 20
        }
        return window.innerWidth - min
    },
    heighActual() {
        if(window.innerWidth < 500){
            return "95%"
        }
        else if(window.innerWidth < 700){
            return "75%"
        }
        else{
            return "65%"
        }
    },
    widthActual() {
        if(window.innerWidth < 500){
            return "95%"
        }
        else if(window.innerWidth < 700){
            return "75%"
        }
        else{
            return "65%"
        }
    },
    actualSRC(){
        if(this.$i18n.locale == 'sk'){
            return "https://docs.google.com/forms/d/e/1FAIpQLSecxP8S8pK8POWUQJBiAi3wQY3__z0pzCDtne8l6NbjfMuCbw/viewform?embedded=true"
        }
        else {
            return "https://docs.google.com/forms/d/e/1FAIpQLScFcxPfZyZOEdWMRdCPqKbP5gUdWT811KlnINPG4yi8o3sxWA/viewform?embedded=true"
            
        }
    },
    closeModal() {
        this.$modal.hide('newRspv')
    },
    sumbit(e) {    
        // console.log(this.pass)
        // if(this.pass == "TesimSaNaSvadbu"){
        //     if(window.localStorage.i18nextLng == 'en'){
        //         window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSecxP8S8pK8POWUQJBiAi3wQY3__z0pzCDtne8l6NbjfMuCbw/viewform?usp=sf_link"
        //     }
        //     else {
        //         window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScFcxPfZyZOEdWMRdCPqKbP5gUdWT811KlnINPG4yi8o3sxWA/viewform?usp=sf_link"
        //     }
        //     // e.preventDefault();      
        // }
        // else{
        //     this.show_err = true
        // }
        this.pass = ''
        this.error = {}
        this.$modal.hide('newRspv')
    },
    reset() {
        this.pass = ''
        this.error = {}
        this.$modal.hide('newRspv')
    }
}
}
</script>
