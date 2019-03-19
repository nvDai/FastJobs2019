import Vue from 'vue'
import Vuex from 'vuex'
import jobs from './modules/jobs/index';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    JOBS: jobs
  },
  state: {
    jobs: []
  },
  actions: {},
  mutations: {

  }
})
