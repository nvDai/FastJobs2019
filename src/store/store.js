import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {

  },
  state: {
    jobs: []
  },
  actions: {
    fetchJobs: async function({commit, state}, status) {
      const jobs = await axios.get('http://127.0.0.1:3000/api/jobs?jobNum=1');
      console.log(jobs);
    }
  },
  mutations: {

  }
})
