<template>
    <modal name="newChangeToHost" height="auto" :width="widthActual()">
        <form class="flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-700" v-on:submit="sumbit($event)">
        <h1 class="text-3xl font-bold font-sans text-gray-800 dark:text-gray-300 mb-6">{{ $t('changetohost_name') }}</h1>
        <p v-if="show_err" class="flex flex-col gap-2 text-red-700">
            {{ $t('changetohost_err') }}
        </p>
        <label class="flex flex-col gap-2 text-gray-700">
            {{ $t('changetohost_pass') }}
            <input type="password" v-model="pass" class="text-gray-900 px-2 py-1 rounded-sm focus:ring ring-blue-500 border-gray-300 border focus:outline-none hover:outline-none active:outline-none" name="pass">
            <p v-show="error.pass" class="text-red-600 flex justify-end">{{ error.pass }}</p>
        </label>
        <div class="flex gap-2 mt-3">
            <!-- <button type="submit" class="bg-purple-600 text-gray-50 rounded px-4 py-2">{{ $t('raspv_send') }}</button> -->
            <button  v-on:click.prevent="sumbit()" class="bg-purple-600 text-gray-50 rounded px-4 py-2">{{ $t('changetohost_send') }}</button>
            <button v-on:click.prevent="reset()" class="text-red-500 hover:bg-red-500 hover:text-gray-100 rounded px-4 py-2">{{ $t('changetohost_cancel') }}</button>
        </div>
        </form>
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
    closeModal() {
        this.$modal.hide('newChangeToHost')
    },
    sumbit(e) {    
        // console.log(this.pass)

        var meno = this.pass
        var r=meno.toLowerCase();
        r = r.replace(new RegExp(/\s/g),"");
        r = r.replace(new RegExp(/[àáâãäå]/g),"a");
        r = r.replace(new RegExp(/æ/g),"ae");
        r = r.replace(new RegExp(/[çč]/g),"c");
        r = r.replace(new RegExp(/[š]/g),"s");
        r = r.replace(new RegExp(/[èéêë]/g),"e");
        r = r.replace(new RegExp(/[ìíîï]/g),"i");
        r = r.replace(new RegExp(/ñ/g),"n");                
        r = r.replace(new RegExp(/[òóôõö]/g),"o");
        r = r.replace(new RegExp(/œ/g),"oe");
        r = r.replace(new RegExp(/[ùúûü]/g),"u");
        r = r.replace(new RegExp(/[ýÿ]/g),"y");
        r = r.replace(new RegExp(/\W/g),"");
        console.log(r)
        var names = ["szabovci", "dusan", "varga", "veronika", "nela", "ujopeto", "ujoluky", "nemecek", "dresto", "jusko", "petrov", "macky", "masaryk", "sestricka", "hrinkovci", "ulicna", "billy", "svarcovci", "matich", "halaga", "havadej", "holodnakova", "marcinkovci", "palko", "tothova", "vargovci", "pvp", "bulikovci", "gutyan", "hurtikovci", "sabovci", "steiner", "steinerovci", "vojtko", "brasko"];
        if(names.includes(r)){
            window.location.href = "/host/" + r
        }
        else{
            this.show_err = true
        }
    },
    reset() {
        this.pass = ''
        this.error = {}
        this.$modal.hide('newChangeToHost')
    },
    widthActual() {
        let min = "85%"
        if(window.innerWidth < 500){
            return "95%"
        }
        else if(window.innerWidth < 700){
            return "65%"
        }
        else if(window.innerWidth < 1000){
            return "45%"
        }
        else if(window.innerWidth < 2500){
            return "30%"
        }
        else{
            return "20%"
        }
    },
}
}
</script>
