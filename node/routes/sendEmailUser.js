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

module.exports = router;
