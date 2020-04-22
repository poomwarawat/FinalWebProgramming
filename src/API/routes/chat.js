const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

router.get(`/add-chat-box`, (req, res) => {
    const sql = `INSERT INTO chatbox (userId, friendId) VALUES (${req.query.userId}, ${req.query.friendId})`
    con.query(sql, (err, result) => {
        return res.send({chat : true})
    })
})

router.get(`/get-chat-box`, (req, res) => {
    const sql = `SELECT chatbox.id, users.firstname, users.lastname, users.token FROM chatbox INNER JOIN users ON chatbox.friendId=users.userId WHERE chatbox.userId=${req.query.userId}`    
    con.query(sql, (err, result) => {
        console.log(result)
        return res.send(result)
    })
})

router.get(`/find-friend`, (req, res) => {
    const sql = `SELECT * FROM users WHERE userId=${req.query.friendId}`
    con.query(sql, (err, result) => {
        return res.send(result)
    })
})

router.get(`/delete-chat-room`, (req, res) =>{
    console.log(req.query)
    const sql = `DELETE FROM chatbox WHERE id=${req.query.chatId}`
    con.query(sql, (err, result) => {
        return res.send({delete : true})
    })
})

module.exports = router;
