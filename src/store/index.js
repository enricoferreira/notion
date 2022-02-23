import Vue from 'vue'
import Vuex from 'vuex'
import {db, auth} from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: db,
    auth: auth,
    loader: false,
  },
  mutations: {
    CHANGE_LOADER(state, payload){
      this.state.loader = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
