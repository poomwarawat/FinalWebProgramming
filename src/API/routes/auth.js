const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");
const { registerValidation } = require('../validation');
const bcrypt = require('bcryptjs');

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

  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  const token = await bcrypt.hash(email, salt)

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

router.post("/login", (req, res) => {

});

//handling logout

router.post("/logout", (req, res) => {
  
});

module.exports = router;
