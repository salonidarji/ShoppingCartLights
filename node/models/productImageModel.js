var db = require("../dbconnection");

var ProductImage = {
  getAllProductImage: function(callback) {
    return db.query(
      "Select * from product_image_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getProductImage: function(id, callback) {
    return db.query(
      "select * from product_image_tbl where pk_image_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addProductImage: function(item, callback) {
    return db.query(
      "Insert into product_image_tbl values(?,?,?,?,?)",
      ["null", item.image_url, item.fk_product_id, 1, 0],
      callback
    );
  },
  deleteProductImage: function(id, callback) {
    return db.query(
      "update product_image_tbl set is_delete=1, is_active=0 where pk_image_id=?",
      [id],
      callback
    );
  },
  updateProductImage: function(id, item, callback) {
    return db.query(
      "update product_image_tbl set image_url=? , fk_product_id=? where pk_image_id=?",
      [item.image_url, item.fk_product_id, id],
      callback
    );
  }
};
module.exports = ProductImage;
