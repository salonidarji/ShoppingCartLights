var express = require("express");
var router = express.Router();
var ProductImage = require("../models/productImageModel");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    ProductImage.getProductImage(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    ProductImage.getAllProductImage(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function(req, res, next) {
  console.log("body:" + req.body);
  ProductImage.addProductImage(req.body, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.delete("/:id", function(req, res, next) {
  ProductImage.deleteProductImage(req.params.id, function(err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});
router.put("/:id", function(req, res, next) {
  ProductImage.updateProductImage(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
