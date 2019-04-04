import * as types from "./mutation-types";

const jobs = {
  namespaced: true,
  state: {
    urgentJobs: [],
    attractiveJobs: [],
    highSalaryJobs: [],
  },
  getters: {},
  actions: {
    fetchUrgentJobs: async function({ commit }) {
      const { data } = await this._vm.$api.get('/jobs?jobNum=60');

      try {
        let jobs = [];
        data.map(job => {
          jobs.push({
            _jobId: job._id,
            _employerId: job.employer._id,
            jobTitle: job.title,
            companyName: job.employer.name,
            salary: job.salary,
            deadline: job.deadline,
            jobUrl: "/tuyen-dung/viec-lam/",
            logoUrl: job.employer._logo,
            views: job._views
          });
        });

        jobs = new Array(Math.ceil(jobs.length / 15))
          .fill("")
          .map(function() {
            return this.splice(0, 15);
          }, jobs.slice());

        commit(types.FETCH_URGENT_JOBS, jobs);
      } catch (e) {
        console.log(e);
      }
    },
    fetchAttractiveJobs: async function({ commit }) {
      const { data } = await this._vm.$api.get('/jobs?jobNum=30');

      try {
        let jobs = [];
        data.map(job => {
          jobs.push({
            _jobId: job._id,
            _employerId: job.employer._id,
            jobTitle: job.title,
            companyName: job.employer.name,
            locations: job.locations,
            salary: job.salary,
            deadline: job.deadline,
            jobUrl: "/tuyen-dung/viec-lam/",
            logoUrl: job.employer._logo,
            views: job._views
          });
        });
        commit(types.FETCH_ATTRACTIVE_JOBS, jobs);
      } catch (e) {
        console.log(e);
      }
    },
    fetchHighSalaryJobs: async function({ commit }) {
      const { data } = await this._vm.$api.get('/jobs?jobNum=30');

      try {
        let jobs = [];
        data.map(job => {
          jobs.push({
            _jobId: job._id,
            _employerId: job.employer._id,
            jobTitle: job.title,
            companyName: job.employer.name,
            locations: job.locations,
            salary: job.salary,
            deadline: job.deadline,
            jobUrl: "/tuyen-dung/viec-lam/",
            logoUrl: job.employer._logo,
            views: job._views
          });
        });
        commit(types.FETCH_HIGH_SALARY_JOBS, jobs);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    [types.FETCH_URGENT_JOBS] (state, jobs) {
      state.urgentJobs = jobs;
    },
    [types.FETCH_ATTRACTIVE_JOBS] (state, jobs) {
      state.attractiveJobs = jobs;
    },
    [types.FETCH_HIGH_SALARY_JOBS] (state, jobs) {
      state.highSalaryJobs = jobs;
    }
  }
};

export default jobs;
