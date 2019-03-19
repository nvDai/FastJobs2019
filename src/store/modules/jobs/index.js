import * as type from './mutation-types';

const jobs = {
  namespaced: true,
  state: {},
  getters: {

  },
  actions: {
    fetchUrgentJobs: async function({commit}) {
      const {data} = await this._vm.$api.get('/jobs?jobNum=1');
      console.log('jobs module', data);
    }
  },
  mutations: {

  }
};

export default jobs;
