<template>
  <div class="p-6 my-4 border border-gray-200 rounded-2xl max-w-lg mx-2 sm:mx-2 md:mx-auto lg:mx-auto xl:mx-auto" v-show="!this.$store.state.covid_agreement">
    <div class="max-w-2xl text-left">
      {{ $t('info_covid') }}
    </div>
    <div class="">
      <button v-on:click="agreeCovid()" class="bg-purple-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 mt-5">{{ $t('info_understand') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    agreeCovid() {
      this.$store.commit('covidAgreement')
    }
  }
}
</script>
