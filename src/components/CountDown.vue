<template>
  <div id="countdown" class="bg-local bg-center bg-cover w-full flex flex-col justify-center items-center h-96">
    <h2 class="text-gray-100 text-opacity-95 font-bold text-lg my-6">{{ $t('countdown_countdown') }}</h2>

    <div class="grid grid-cols-4 gap-6">
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ day }}</div>
        <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_day') }}</p>
      </div>
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ hour }}</div>
        <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_hour') }}</p>
      </div>
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ minute }}</div>
        <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_minute') }}</p>
      </div>
      <div>
        <div class="bg-gray-50 text-gray-500 text-2xl text-center font-bold p-4">{{ second }}</div>
        <p class="text-center text-gray-50 text-opacity-75">{{ $t('countdown_secound') }}</p>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      countDownDate: '',
      picker: ''
    }
  },
  methods: {
    dataPicker: function() {
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
  #countdown {
    background-image: url('~@/assets/bg_countdown2.jpeg');
  }
</style>
