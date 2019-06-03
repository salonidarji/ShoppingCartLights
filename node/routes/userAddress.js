var express = require("express");
var router = express.Router();
var UserAddress = require("../models/userAddressModel");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    UserAddress.getUserAddress(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    UserAddress.getAllUserAddress(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  UserAddress.addUserAddress(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router.delete("/:address_id/:id", function(req, res, next) {
  UserAddress.deleteUserAddress(req.params.address_id, req.params.id, function(
    err,
    count
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:id", function(req, res, next) {
  UserAddress.updateUserAddress(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
