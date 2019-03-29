import Vue from 'vue'
import Vuex from 'vuex'

import state from '../store/modules/status'
import mutations from '../store/modules/mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

export default store