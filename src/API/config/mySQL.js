const mysql = require("mysql");
const con = mysql.createConnection({
  host: "**********44",
  user: "*****",
  password: "*****",
  database: "*****",
});

module.exports = con;
