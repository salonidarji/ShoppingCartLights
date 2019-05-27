var express = require("express");

var router = express.Router();
var SendEmailUser = require("../models/SendEmailUserModel");

router.post("/", function(req, res) {
  let user = req.body;
  SendEmailUser.sendMail(user, info => {
    console.log("node message send");
    res.send(info);
  });
});

router.get("/:id", function(req, res) {
  SendEmailUser.getUser(req.params.id, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
