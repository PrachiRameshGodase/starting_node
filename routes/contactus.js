const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/contactus", (req, res, next) => {
  console.log(JSON.stringify(req.body));
  res.send("<h1>Form successfuly filled</h1>");
});
module.exports = router;
