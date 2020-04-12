const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");
const moment = require('moment');

//LIST OF ALL POST
router.get("/posts", (req, res) => {});

//Create a new post
router.post("/posts", (req, res) => {
    const sql = `INSERT INTO post (activity_title, userId, total_distance, pace_average, description) VALUES (?, ?, ?, ?, ?)`;
    const Data = [req.body.data, req.body.userId, req.body.totalDistance, req.body.paceAverage, req.body.description ]
    const value = Object.values(Data)
    con.query(sql, value, (err, result) =>{
        if(err) throw err
        return res.send({post : true})
    })
});

//get user post
router.post("/get-post", (req, res) =>{
    const sql = `SELECT post.postId, users.profileurl, post.total_distance, post.activity_title, post.description, post.pace_average, post.userId FROM post INNER JOIN users ON post.userId=users.userId`
    con.query(sql, (err, result) =>{
        const post = []
        for(var i in result){
            if(req.body.userId == result[i].userId){
                post.push(result[i])
            }
        }
        return res.send(post)
    })
})

//get all post
router.get('/get-all-post', (req, res) =>{
    const sql = `SELECT post.postId, users.profileurl, post.total_distance, post.activity_title, post.description, post.pace_average, post.userId FROM post INNER JOIN users ON post.userId=users.userId`
    con.query(sql, (err, result) =>{
        return res.send(result)
    })
})
    
//Like post --update like in post
router.put("/post/:id", (req, res) => {});

//Delete post and its comments from database
router.delete("/post/:id", (req, res) => {});

module.exports = router;
