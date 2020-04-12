const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");
const moment = require('moment');

//LIST OF ALL POST
router.get("/posts", (req, res) => {});

//Create a new post
router.post("/posts", (req, res) => {
    const sql = `INSERT INTO post (activity_title, userId) VALUES (?, ?)`;
    const Data = [req.body.data, req.body.userId ]
    const value = Object.values(Data)
    con.query(sql, value, (err, result) =>{
        if(err) throw err
        return res.send({post : true})
    })
});
    
//Like post --update like in post
router.put("/post/:id", (req, res) => {});

//Delete post and its comments from database
router.delete("/post/:id", (req, res) => {});

module.exports = router;
