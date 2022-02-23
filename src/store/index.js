import Vue from 'vue'
import Vuex from 'vuex'
import {db, auth} from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: db,
    auth: auth
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
