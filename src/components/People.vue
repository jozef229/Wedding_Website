<template>
  <div id="people" class="bg-center bg-cover flex flex-col justify-center items-center mt-4 mb-10">
    <!-- <div class="flex justify-center items-center bg-gray-500 text-gray-100 font-bold text-sm rounded-full ring-4 ring-gray-50 w-32 h-32 -mt-16">
      <p>{{ $t('people_message_from_friends') }}</p>
    </div> -->
    <!-- <div class="border-gray-200  px-8 my-4">
      <p class="text-gray-100 text-lg font-bold border-gray-400 border-b-4 -my-1 mb-6">{{ $t('people_family_friends_guests') }}</p>
    </div> -->

    <h2 class="mt-8 mb-10 text-gray-100 text-3xl font-semibold text-center">{{ $t('people_message_from_friends') }}</h2>

    <div class="grid grid-rows-3 grid-cols-1 lg:grid-cols-2 grid-flow-row gap-y-4 sm:gap-x-10 mb-32 sm:px-10 px-2  overflow-y-auto h-auto scroll-snap-x">
      
      <div class="flex flex-row gap-3 bg-gray-900 bg-opacity-60 p-4 rounded-md sm:w-72 sm:w-96 h-40 shadow-lg"
        v-for="people in this.$store.state.peoples.slice(item_min, item_max)" :key='people.id'>

        <img class="animate-pulse rounded-full sm:w-16 h-16 p-1 m-1 ring ring-pink-600" src="https:\/\/simpuslerep.com\/data\/img\/display-picture\/user\/no-image.png" :alt="people.name">        
        <div class="flex justify-between flex-col">
          <div class=" max-h-20 overflow-y-auto">
            <p class="text-base text-gray-300">{{ people.post }}</p>
          </div>
          <div class="my-2">
            <p class="text-base text-gray-200 font-semibold">{{ people.name }}</p>
            <p class="text-xs text-gray-400 font-semibold">- {{ $t( people.religion ) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="grid grid-rows-3 grid-flow-col gap-y-4 gap-x-10 mb-32 px-10  overflow-x-auto  w-96 lg:w-4/5 scroll-snap-x">
      
      <div class="flex flex-row gap-3 bg-pink-900 bg-opacity-60 p-3 rounded-md w-80 lg:w-96 shadow-lg"
        v-for="people in this.$store.state.peoples" :key='people.id'>

        <img class="animate-pulse rounded-full w-16 h-16 p-1 m-1 ring ring-pink-600" :src="people.image" :alt="people.nama">        
        <div class="flex justify-between flex-col">
          <div class=" max-h-20 overflow-y-auto">
            <p class="text-base text-gray-300">{{ people.pesan }}</p>
          </div>
          <div class="my-2">
            <p class="text-base text-gray-200 font-semibold">{{ people.nama }}</p>
            <p class="text-xs text-gray-400 font-semibold">- {{ people.kategory }}</p>
          </div>
        </div>
      </div>
    </div> -->

      <div  class="grid sm:grid-cols-2 grid-cols-1">
        <button v-if="0 != this.item_min" v-on:click="previousPost()" class="sm:mr-2 bg-gray-600 text-gray-50 shadow-md px-3 py-4 rounded-md -mt-10 mb-8 w-40 focus:ring-4 focus:ring-black-200 focus:outline-non">
          <div class="flex">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div class="flex-1">
            {{ $t('people_previous') }} 
            </div>
          </div>
        </button>

        <button v-if="0 == this.item_min" class="opacity-0 sm:ml-2 bg-gray-600 text-gray-50 shadow-md px-3 py-4 w-40 rounded-md -mt-10 mb-8 focus:ring-4 focus:ring-black-200 focus:outline-non">
          <div class="flex">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="opacity-100 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex-1">
              {{ $t('people_refresh') }}
            </div>
          </div>
        </button>
      
        <button v-if="this.$store.state.peoples.length > item_max" v-on:click="nextPost()" class="sm:ml-2 bg-gray-600 text-gray-50 shadow-md px-3 py-4 w-40 rounded-md -mt-10 mb-8 focus:ring-4 focus:ring-black-200 focus:outline-non">
          <div class="flex">
            <div class="flex-1">
              {{ $t('people_next') }}
            </div>
            <div class="flex-1 flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>

        <button v-if="this.$store.state.peoples.length <= item_max" class="opacity-0 sm:ml-2 bg-gray-600 text-gray-50 shadow-md px-3 py-4 sm:w-40 rounded-md -mt-10 mb-8 focus:ring-4 focus:ring-black-200 focus:outline-non">
          <div class="flex">
            <div class="flex-1">
              {{ $t('people_refresh') }}
            </div>
            <div class="flex-1 flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </button>

      </div>
      

      <div>
        <button v-on:click="showModal()" class="bg-gray-600 text-gray-50 shadow-md px-3 py-4 rounded-md -mt-10 mb-8 focus:ring-4 focus:ring-yellow-200 focus:outline-non">{{ $t('people_post') }}</button>
      </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      item_min: 0,
      item_max: 6,
    }
  },
  mounted() {
    this.$store.commit('loadPeople')
    // console.log(this.$store.state.peoples)
  },
  methods: {
    showModal() {
      this.$modal.show('newPost')
    },
    previousPost(){
      this.item_min = this.item_min - 6
      this.item_max = this.item_max - 6
    },
    nextPost(){
      this.item_min = this.item_min + 6
      this.item_max = this.item_max + 6
    },
    refresh(){
      this.item_min = 0
      this.item_max = 6
    }
  },
}
</script>

<style scoped>
  #people {
    background-image: url('~@/assets/bg-message.jpg');    
    clip-path: polygon(100% -64px, 100% 90%, 50% 100%, 0 90%, 0 -64px);
    /* clip-path: polygon(15% 0, 85% 0, 100% 10%, 100% 90%, 50% 100%, 0 90%, 0 10%); */
  }
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
  }

  ::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border: solid 3px #202020;
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
</style>
