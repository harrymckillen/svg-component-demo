import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    completeness: 90
  },
  mutations: {
    INCREMENT(state, amount) {
      amount = parseInt(amount);
      if ((state.completeness + amount) > 100) state.completeness = 100;
      else state.completeness = state.completeness + amount;
    },
    DECREMENT(state, amount) {
      amount = parseInt(amount);
      if ((state.completeness - amount) < 0) state.completeness = 0;
      else state.completeness = state.completeness - amount;
    }
  },
  actions: {
    incrementCount({ commit }, amount) {
      commit("INCREMENT", amount);
    },
    decrementCount({ commit }, amount) {
      commit("DECREMENT", amount);
    }
  },
  getters: {
    getCompleteness(state) {
      return state.completeness;
    }
  }
})
