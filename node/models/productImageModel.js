var db = require("../dbconnection");

var ProductImage = {
  getAllProductImage: function(callback) {
    return db.query(
      "Select *  from product_image_tbl pi, product_tbl p where pi.fk_product_id=p.pk_product_id && pi.is_active=1 && p.is_active=1 && pi.is_delete=0 && p.is_delete=0",
      callback
    );
  },
  getProductImage: function(id, callback) {
    return db.query(
      "select * from product_image_tbl where fk_product_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addProductImage: function(item, callback) {
    return db.query(
      "Insert into product_image_tbl values(?,?,(select max(pk_product_id) from product_tbl),?,?)",
      ["null", item.image_url.replace("C:\fakepath ", ""), 1, 0],
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
