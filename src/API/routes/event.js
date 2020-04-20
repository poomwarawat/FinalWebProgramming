const express = require("express");
const router = express.Router();
const con = require("../config/mySQL");

//create event
router.post("/event", (req, res) => {
  let data = req.body;
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
    let sql = `CREATE TABLE  event_${result.insertId} (userId int, bib_number int NOT NULL AUTO_INCREMENT, PRIMARY KEY (bib_number))`;
    con.query(sql, (err, result) => {
      return res.send({ event_created: true });
    });
  });
});

router.get("/event", (req, res) => {
  con.query("SELECT * FROM running_event", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/event/:id", (req, res) => {
  let eventId = req.params.id;
  let sql = `SELECT * FROM running_event WHERE eventId = ${eventId}`;

  con.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/event-checkout", (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO users_event (userId, eventId, category, paymentState) VALUES (?, ?, ?, ?)`;
  let value = Object.values(data);
  value.push(0);
  con.query(sql, value, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post("/event-status", (req, res) => {
  let data = req.body;
  let userId = data["userId"];
  let eventId = data["eventId"];
  let sql = `SELECT * FROM users_event WHERE userId = ? AND eventId = ?`;
  con.query(sql, [userId, eventId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.put("/event-checkout", (req, res) => {
  let sql = `UPDATE runrena.users_event SET payment_amount = ${req.body.price}, date_payment = "${req.body.date}", time = "${req.body.time}", paymentState  = 1 WHERE userId = ${req.body.userId} AND eventId = ${req.body.eventId}`;
  con.query(sql, () => {});
  res.send("put status of event join");
});
module.exports = router;

router.get("/payment-state", (req, res) => {
  let sql = `SELECT  userId, running_event.eventId, 
  category, paymentState , 
  payment_amount, date_payment,
  time, running_event.funrun_price, running_event.half_price, running_event.mini_price, running_event.marathon_price
  FROM runrena.users_event 
  INNER JOIN runrena.running_event 
  ON users_event.eventId  = runrena.running_event.eventId`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.put("/payment-state", (req, res) => {
  let sql = `UPDATE runrena.users_event SET paymentState = ${req.body.state} WHERE userId = ${req.body.userId} AND eventId = ${req.body.eventId} `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    if (req.body.state === "2") {
      let sql = `INSERT INTO event_${req.body.eventId} (userId) VALUES (${req.body.userId})`;
      con.query(sql, (err, result) => {});
    } else {
      let sql = `DELETE FROM event_${req.body.eventId} WHERE userId = ${req.body.userId}`;
      con.query(sql, (err, result) => {});
    }
    res.send();
  });
});

router.post("/event-bib", (req, res) => {
  let sql = `SELECT bib_number FROM event_${req.body.eventId} WHERE userId = ${req.body.userId}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//query admin dashboard
router.get("/earning_daily", (req, res) => {
  let sql = `SELECT SUM(payment_amount) FROM runrena.users_event  WHERE date_payment  = CURDATE() AND paymentState = 2`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
router.get("/event-month", (req, res) => {
  let sql = "SELECT COUNT(eventId) FROM runrena.running_event WHERE MONTH(event_date) = MONTH(CURDATE())";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});
router.get("/participants", (req, res) => {
  let sql = "SELECT COUNT (DISTINCT userId) FROM runrena.users_event";
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

router.get("/event-checkout", (req, res) => {
  let sql = `SELECT COUNT(paymentState), paymentState FROM runrena.users_event GROUP BY paymentState;`;
  con.query(sql, (err, result) => {
    res.send(result);
  });
});

router.get("/event-report/:id", (req, res) => {
  let eventId = req.params.id;
  let sql = `SELECT event_${eventId}.userId, bib_number, firstname, lastname,  email FROM runrena.event_${eventId} INNER JOIN runrena.users ON event_${eventId}.userId = users.userId`;
  con.query(sql, (err, result) => {
    res.send(result);
  });
});
