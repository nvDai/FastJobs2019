const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const jobRouter = require("./modules/jobs/router");

const app = express();
const port = process.env.port || 3000;
const mongoDB = "mongodb://localhost:27017/fastjobs";

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader("Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // if (req.headers.origin) {
  //   res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  // }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/jobs", jobRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to DB");
  }
});

app.listen(port, err => {
  if (err) console.error(err);
  console.log("Server is running at ", port);
});
