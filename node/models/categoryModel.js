var db = require("../dbconnection");

var Category = {
  getAllCategory: function(callback) {
    return db.query(
      "Select * from category_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getProductByCategory: function(id, callback) {
    return db.query(
      "select * from product_tbl p ,product_image_tbl pi where p.fk_category_id=? && p.pk_product_id=pi.fk_product_id && p.is_delete=0 && p.is_active=1 && pi.is_delete=0 && pi.is_active=1 && pi.is_cover=1",
      [id],
      callback
    );
  },
  addCategory: function(item, callback) {
    return db.query(
      "Insert into category_tbl values(?,?,?,?,?)",
      ["null", item.category_name, item.fk_parent_id, 1, 0],
      callback
    );
  },
  deleteCategory: function(id, callback) {
    return db.query(
      "update category_tbl set is_delete=1, is_active=0 where pk_category_id=?",
      [id],
      callback
    );
  },
  updateCategory: function(id, item, callback) {
    return db.query(
      "update category_tbl set category_name=? , fk_parent_id=? where pk_category_id=?",
      [item.category_name, item.fk_parent_id, id],
      callback
    );
  }
};
module.exports = Category;
