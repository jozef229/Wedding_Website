<template>
    <modal name="newRspv" class="rounded-lg" height="auto" :width="widthMax()">
        <div class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center overflow-y-auto">
            <iframe class="w-full " :src="actualSRC()" :width="widthMax()" :height="heighMax()" frameborder="0" marginheight="0" marginwidth="0">Načítava sa…</iframe>

            
            <!-- <div class="flex center">
                <button v-on:click.prevent="reset()" class="bg-gray-600 rounded px-8 py-2 my-4 mx-4 text-white-500 hover:bg-red-500 hover:text-gray-100 rounded px-4 py-2">{{ $t('rsvp_cancel') }}</button>
            </div> -->
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
