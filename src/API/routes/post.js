const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");
//GET POST FROM DATABASE

//LIST OF ALL POST
router.get("/posts", (req, res) => {});

//Create a new post
router.post("/posts", (req, res) => {});

//Delete post

module.exports = router;
