var express = require("express");
var router = express.Router();
var Chart = require("../models/chartModel");

router.get("/:id?", function(req, res, next) {
  Chart.getChartData(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
