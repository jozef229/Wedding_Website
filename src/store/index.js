import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    covid_agreement: false,
    peoples: []
  },
  mutations: {
    covidAgreement(state) {
      state.covid_agreement = true
    },
    async loadPeople() {
      // return await axios.get('https://stark-eyrie-66508.herokuapp.com/api/post')
      return await axios.get('https://stark-eyrie-66508.herokuapp.com/api/post')
        .then(respone => respone.data)
        .then(json => {
          this.state.peoples = json.data
          // console.log(json.data)
          if (json.status == 'ok') {
            // console.log(json.data)
            this.state.peoples = json.data
          }
        })
    }
  },
  actions: {
  },
  modules: {
  }
})
