const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

//create event
router.post("/event", (req, res) => {
  let data = req.body;
  console.log("data", data);
});

module.exports = router;
