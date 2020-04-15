const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

//create event
router.post("/event", (req, res) => {
  let data = req.body;
  console.log("data", data);
  let name = data["name"];
  let description = data["description"];
  let startDate = data["startDate"];
  let endDate = data["endDate"];
  let funRunPrice = data["funRunPrice"];
  let miniMarathonPrice = data["miniMarathonPrice"];
  let halfMarathonPrice = data["halfMarathonPrice"];
  let sql = `INSERT INTO running_event (title, description, start_date, end_date, event_date, imageUrl, funrun_price, half_price, mini_price, marathon_price, address, organized_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  let values = Object.values(data);
  con.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("running_event record inserted");
    return res.send({ event_created: true });
  });
});

router.get("/event", (req, res) => {
  con.query("SELECT * FROM running_event", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
