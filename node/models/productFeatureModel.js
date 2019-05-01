var db = require("../dbconnection");

var ProductFeature = {
  getAllProductFeature: function(callback) {
    return db.query(
      "Select * from product_feature_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getProductFeature: function(id, callback) {
    return db.query(
      "select * from product_feature_tbl where pk_product_feature_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addProductFeature: function(item, callback) {
    return db.query(
      "Insert into product_feature_tbl values(?,?,?,?,?,?)",
      [
        "null",
        item.fk_feature_id,
        item.fk_product_id,
        item.feature_value,
        1,
        0
      ],
      callback
    );
  },
  deleteProductFeature: function(id, callback) {
    return db.query(
      "update product_feature_tbl set is_delete=1, is_active=0 where pk_product_feature_id=?",
      [id],
      callback
    );
  },
  updateProductFeature: function(id, item, callback) {
    return db.query(
      "update product_feature_tbl set fk_feature_id=?,fk_product_id=?,feature_value=? where pk_product_feature_id=?",
      [item.fk_feature_id, item.fk_product_id, item.feature_value, id],
      callback
    );
  }
};
module.exports = ProductFeature;
