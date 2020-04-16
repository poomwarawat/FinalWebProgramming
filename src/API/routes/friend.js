const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

router.post("/friend-list", (req, res) =>{
    const sql = `SELECT firstname, lastname, userId FROM users WHERE userId!=${req.body.userId}`
    con.query(sql, (err, result) => {
        return res.send(result)
    })
})

router.post("/add-friend", (req, res) =>{
    return res.send("Hello")
    // const sql = `INSERT INTO friend (userId,friendId,state) VALUES (${req.query.userId}, ${req.query.friendId}, "add")`
    // con.query(sql, (err, result) => {
    //     if(result){
    //         return res.send({add : true})
    //     }
    // })
})

//check friend
router.get("/check-friend", (req, res) =>{
    const sql = `SELECT * FROM friend WHERE userId=${req.query.userId} AND friendId=${req.query.friendId}`
    con.query(sql, (err, result) =>{
        for(var i in result){
            if(result[i].state == 'add'){
                return res.send(result[i])
            }
        }
    })
})

//cancel friend request
router.get("/cancel-friend", (req,res) =>{
    const sql = `DELETE FROM friend WHERE userId=${req.query.userId} AND friendId=${req.query.friendId}`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send({cancel : true})
        }
    })
})

//friend request
router.get("/friend-request", (req, res) =>{
    const sql = `SELECT users.userId, users.firstname, users.lastname, users.token, friend.state FROM friend INNER JOIN users ON friend.userID=users.userId WHERE friendId='${req.query.userId}' AND state='add'`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send(result)
        }
    })
})

//confirm request
router.get("/confirm-request", (req, res) =>{
    const sql =`UPDATE friend SET state="friend" WHERE userId=${req.query.friendId} AND friendId=${req.query.userId}`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send({confirm : true})
        }
    })
})

//get my friend
router.get("/myfriend", (req, res) =>{
    const sql = `SELECT users.userId, users.firstname, users.lastname, friend.resId, friend.state, users.token FROM friend INNER JOIN users ON friend.userId=users.userID WHERE state='friend' AND friendId=${req.query.userId}`
    con.query(sql, (err, result) => {
        if(result){
            return res.send(result)
        }
    })
})

router.get("/myfriendme", (req, res) =>{
    const sql = `SELECT users.userId, users.firstname, users.lastname, friend.resId, friend.state, users.token FROM friend INNER JOIN users ON friend.friendId=users.userID WHERE friend.userId=${req.query.userId} AND friend.state='friend'`  
    con.query(sql, (err, result) => {
        if(result){
            return res.send(result)
        }
    })
})

//delete friend
router.get("/delete-friend", (req, res) =>{
    const sql = `DELETE FROM friend WHERE resId=${req.query.resId}`
    con.query(sql, (err, result) =>{
        if(result){
            return res.send({delete : true})
        }
    })
})

module.exports = router;
