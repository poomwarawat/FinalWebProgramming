const mysql = require("mysql");
const con = mysql.createConnection({
  host: "******s",
  user: "*****",
  password: "*****",
  database: "*****",
});

module.exports = con;
