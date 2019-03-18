const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const jobRouter= require('./modules/jobs/router');

const app = express();
const port = process.env.port || 3000;
const mongoDB = 'mongodb://localhost:27017/fastjobs';

app.use("/api/jobs", jobRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connect(mongoDB, { useNewUrlParser: true }, (err) => {
  if (err) console.error(err);
  else console.log("Connected to DB");
});

app.listen(port, err => {
  if (err) console.error(err);
  console.log("Server is running at ", port);
});
