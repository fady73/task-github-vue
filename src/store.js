import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
    users: [],
    selectedName: '',


  },
  actions: {
    loadUsers ({ commit }) {
      axios
        .get('https://api.github.com/users?since=0')
        .then(r => r.data)
        .then(users => {
        commit('SET_COINS', users)
        })
    }
  },
  mutations: {
    SET_COINS (state, users) {
      state.users = users
    }
 
  }
})