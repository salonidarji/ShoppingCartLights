var express = require("express");

var router = express.Router();
var payment = require("../models/paymentModel");

router.post("/", function(req, res) {
  payment.makePayment(req.body, info => {
    console.log("payment send");
    res.send(info);
  });
});

router.delete("/:id", function(req, res, next) {
  payment.deleteCartByUserId(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

router.put("/:id", function(req, res, next) {
  payment.paymentVerify(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
