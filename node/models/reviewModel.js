var db = require("../dbconnection");

var Review = {
  getAllReview: function(callback) {
    return db.query(
      "Select * from review_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getReview: function(id, callback) {
    return db.query(
      "select * from review_tbl where fk_product_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addReview: function(item, callback) {
    return db.query(
      "Insert into review_tbl values(?,?,?,?,?,?)",
      ["null", item.fk_product_id, item.fk_user_id, item.review_detail, 1, 0],
      callback
    );
  },
  deleteReview: function(id, callback) {
    return db.query(
      "update review_tbl set is_delete=1, is_active=0 where pk_review_id=?",
      [id],
      callback
    );
  },
  updateReview: function(id, item, callback) {
    return db.query(
      "update review_tbl set fk_product_id=? , fk_user_id=?, review_detail=? where pk_review_id=?",
      [item.fk_product_id, item.fk_user_id, item.review_detail, id],
      callback
    );
  }
};
module.exports = Review;
