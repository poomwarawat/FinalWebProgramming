const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

router.post("/friend-list", (req, res) =>{
    const sql = `SELECT * FROM users WHERE userId!=${req.body.userId}`
    con.query(sql, (err, result) => {
        return res.send(result)
    })
})

router.post("/add-friend", (req, res) =>{
    const sql = `INSERT INTO friend (userId,friendId,state) VALUES (${req.body.userId}, ${req.body.friendId}, "add")`
    con.query(sql, (err, result) => {
        if(result){
            return res.send({add : true})
        }
    })
})

//check friend
router.post("/check-friend", (req, res) =>{
    const sql = `SELECT * FROM friend WHERE userId=${req.body.userId} AND friendId=${req.body.friendId}`
    con.query(sql, (err, result) =>{
        for(var i in result){
            if(result[i].state == 'add'){
                return res.send(result[i])
            }
        }
    })
})

//cancel friend request
router.post("/cancel-friend", (req,res) =>{
    const sql = `DELETE FROM friend WHERE userId=${req.body.userId} AND friendId=${req.body.friendId}`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send({cancel : true})
        }
    })
})

//friend request
router.post("/friend-request", (req, res) =>{
    const sql = `SELECT users.userId, users.firstname, users.lastname, users.token, friend.state FROM friend INNER JOIN users ON friend.userID=users.userId WHERE friendId='${req.body.userId}' AND state='add'`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send(result)
        }
    })
})

//confirm request
router.post("/confirm-request", (req, res) =>{
    const sql =`UPDATE friend SET state="friend" WHERE userId=${req.body.friendId} AND friendId=${req.body.userId}`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send({confirm : true})
        }
    })
})

//get my friend
router.post("/myfriend", (req, res) =>{
    const sql = `SELECT users.userId, users.firstname, users.lastname, friend.resId, friend.state, users.token FROM friend INNER JOIN users ON friend.userId=users.userID WHERE state='friend' AND friendId=${req.body.userId}`
    con.query(sql, (err, result) => {
        if(result){
            return res.send(result)
        }
    })
})

router.post("/myfriendme", (req, res) =>{
    const sql = `SELECT users.userId, users.firstname, users.lastname, friend.resId, friend.state, users.token FROM friend INNER JOIN users ON friend.friendId=users.userID WHERE friend.userId=${req.body.userId} AND friend.state='friend'`  
    con.query(sql, (err, result) => {
        if(result){
            console.log(result)
            return res.send(result)
        }
    })
})

module.exports = router;
