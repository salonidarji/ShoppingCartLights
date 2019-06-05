var express = require("express");

var router = express.Router();
var EmailVerification = require("../models/EmailVerificationModel");

router.post("/", function(req, res) {
  let user = req.body;
  EmailVerification.sendMail(user, info => {
    console.log("node message send");
    res.send(info);
  });
});

router.put("/:id", function(req, res, next) {
  EmailVerification.verify(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
