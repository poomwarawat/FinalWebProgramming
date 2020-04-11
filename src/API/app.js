const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const con = require("./config/mySQL");
const multer = require("multer");
const upload = multer();
//----app setup
app.use(cors());
app.set("view engine", "pug");
app.enable("trust proxy");
app.use(bodyParser.urlencoded({ extended: true }));
//---- for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("public"));

//connect with mysql database
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected with database");
});

app.get("/", (req, res) => {
  res.send("test");
  console.log("register");
});

app.post("/runrena", (req, res) => {
  let dataRegister = req.body;

  var sql =
    "INSERT INTO users (firstname, lastname, birthday, email, city, password, token , address) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ";
  let values = Object.values(dataRegister);
  console.log("values", values);
  con.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
