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
  actions: {
    fetchJobs: async function({commit, state}, status) {
      const jobs = await this._vm.$api.get('/jobs?jobNum=1');
      console.log('fetchJobs', jobs);
    },
  },
  mutations: {

  }
})
