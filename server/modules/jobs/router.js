const express = require("express");
const router = express.Router();
const jobController = require("./controller");

router.get("/", (req, res) => {
  const jobNum = req.query.jobNum || 30;
  jobController
    .getJobs(jobNum)
    .then(jobs => res.send(jobs))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
