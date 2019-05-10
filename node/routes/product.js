var express = require("express");
var router = express.Router();
var Product = require("../models/productModel");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    Product.getProduct(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Product.getAllProduct(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  Product.addProduct(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});
router.delete("/:p_id&:pi_id&:pf_id", function(req, res, next) {
  Product.deleteProduct(
    req.params.p_id,
    req.params.pi_id,
    req.params.pf_id,
    function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    }
  );
});
router.put("/:id", function(req, res, next) {
  Product.updateProduct(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
