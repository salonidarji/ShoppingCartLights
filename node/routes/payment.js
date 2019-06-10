var express = require("express");

var router = express.Router();
var payment = require("../models/paymentModel");

router.post("/", function(req, res) {
  payment.makePayment(req.body, info => {
    console.log("payment send");
    res.send(info);
  });
});

module.exports = router;
