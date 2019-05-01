var express = require("express");
var router = express.Router();
var ProductFeature = require("../models/productFeatureModel");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    ProductFeature.getProductFeature(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    ProductFeature.getAllProductFeature(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  ProductFeature.addProductFeature(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router.delete("/:id", function(req, res, next) {
  ProductFeature.deleteProductFeature(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:id", function(req, res, next) {
  ProductFeature.updateProductFeature(req.params.id, req.body, function(
    err,
    rows
  ) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
