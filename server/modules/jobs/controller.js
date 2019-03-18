const jobModel = require('./model');

const getJobs = (jobNum) => new Promise((resolve, reject) => {
  jobModel
    .find()
    .limit(+jobNum) //limit param must be numeric
    .then(data => resolve(data))
    .catch(err => reject(err));
});

module.exports = {
  getJobs
};
