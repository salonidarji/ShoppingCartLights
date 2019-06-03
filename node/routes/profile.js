var express = require("express");
var router = express.Router();
var Profile = require("../models/profileModel");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    Profile.getUser(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.put("/:id", function(req, res, next) {
  Profile.changePassword(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
