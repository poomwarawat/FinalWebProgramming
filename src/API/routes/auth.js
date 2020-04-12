const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");
const { registerValidation, loginValidation } = require('../validation');
const Cookies = require('cookies');
const md5 = require('MD5');

router.get("/", (req, res) => {
  res.send(new Date());
});

//handling sign up
router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body)
  
  if (error) {
    return res.send({err : error.details[0].message})
  }

  const {name, lastname, birthday, email, address, city, password, repassword} = req.body
  if(password !== repassword) return res.send({err : "Your password is not match"})

  const hashPassword = md5(password)
  const token = md5(email)

  const sql = `SELECT email FROM users WHERE email = '${email}'`
  //WHERE email = '${email}'
  con.query(sql, (err, result) =>{
    if (err) throw err;
    var mailcheck = ""
    for (var i in result) {
      mailcheck = result[i].email
    }
    if(mailcheck == ""){
      const sql = `INSERT INTO users (firstname, lastname, birthday, email, address, city, password, token, profileurl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const Data = [name, lastname , birthday, email, address, city, hashPassword, token, ""];
      const values = Object.values(Data);
      con.query(sql, values,  (err, result) => {
        if (err) throw err;
        return res.send({regis : true})
      });
    }else{
      return res.send({err : "Email is already!"})
    }
  })
  

});

//handing login

router.post("/login",async (req, res) => {
  const {email, password} = req.body

  const { error } = registerValidation(req.body)
  
  if (error) {
    return res.send({err : error.details[0].message})
  }

  const hashPassword = md5(password)

  const sql = `SELECT email, password, token FROM users WHERE email = '${email}'`
  con.query(sql, (err, result) =>{
    for(var i in result){
      if(email == result[i].email){
        if(hashPassword == result[i].password){
          return res.send({token : result[i].token})
        }else{
          return res.send({err : "Your password not correct!"})
        }
      }
    }
    return res.send({err : "Email not found!"})
  })
});

//handling verify token

router.post('/auth-token', (req, res) =>{
  const token = (req.body.token)
  const sql =  `SELECT * FROM users WHERE token = '${token}'`
  con.query(sql, (err, result) =>{
    for(var i in result){
      return res.send({email : result[i].email, userId : result[i].userId})
    }
  })
})

//handling logout

router.post("/logout", (req, res) => {
  
});

module.exports = router;
