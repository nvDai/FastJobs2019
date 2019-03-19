import * as type from "./mutation-types";

const jobs = {
  namespaced: true,
  state: {
    urgentJobs: []
  },
  getters: {},
  actions: {
    fetchUrgentJobs: async function({ commit }) {
      const { data } = await this._vm.$api.get("/jobs?jobNum=60");

      try {
        let jobs = [];
        data.map(job => {
          jobs.push({
            _jobId: job._id,
            _employerId: job.employer._id,
            jobTitle: job.title,
            companyName: job.employer.name,
            salary: { min: job.salary.min, max: job.salary.max },
            deadline: job.closing_date,
            jobUrl: "/tuyen-dung/viec-lam/",
            logoUrl: job.employer._logo,
            seen: false
          });
        });

        jobs = new Array(Math.ceil(jobs.length / 15))
          .fill("")
          .map(function() {
            return this.splice(0, 15);
          }, jobs.slice());

        commit(type.FETCH_URGENT_JOBS, jobs);
      } catch (e) {
        console.log(e);
      }
    }
  },
  mutations: {
    [type.FETCH_URGENT_JOBS] (state, jobs) {
      state.urgentJobs = jobs;
      console.log("jobs module", state.urgentJobs);
    }
  }
};

export default jobs;
