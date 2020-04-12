const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

//LIST OF ALL POST
router.get("/posts", (req, res) => {
    
});

//Create a new post
router.post("/posts", (req, res) => {});

//Like post --update like in post
router.put("/post/:id", (req, res) => {});

//Delete post and its comments from database
router.delete("/post/:id", (req, res) => {});

module.exports = router;
