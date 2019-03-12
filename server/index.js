const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.port || 6969;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, err => {
  if (err) console.error(err);
  console.log("Server is running at ", port);
});
