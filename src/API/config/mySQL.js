const mysql = require("mysql");
const con = mysql.createConnection({
  host: "*******",
  user: "*****",
  password: "*****",
  database: "*****",
});

module.exports = con;
