const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

router.get("/", (req, res) => {
  res.send(new Date());
});

//handling sign up
router.post("/register", (req, res) => {});

//handing login

router.post("/login", (req, res) => {});

//handling logout

router.post("/logout", (req, res) => {});

module.exports = router;
