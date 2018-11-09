// Required Imports
const express = require("express");
const bodyParser = require("body-parser");
const port = 5000;

// Add auth routes /me and /token for login using JWT most likely

// Add Rest API for users to GET/ POST their complaints and view them on their profile privately

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, console.log("Server running on port 5000"));
