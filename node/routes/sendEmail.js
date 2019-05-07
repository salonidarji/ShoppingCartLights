var express = require("express");

var router = express.Router();
var SendEmail = require("../models/SendEmailModel");

router.post("/", function(req, res) {
  let user = req.body;
  SendEmail.sendMail(user, info => {
    console.log("node message send");
    res.send(info);
  });
});

module.exports = router;
