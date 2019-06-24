var db = require("../dbconnection");

var Faq = {
  getAllFaq: function(callback) {
    return db.query(
      "Select * from faq_tbl where is_delete=0 && is_active=1",
      callback
    );
  },
  getFaq: function(id, callback) {
    return db.query(
      "select * from faq_tbl where pk_faq_id=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  addFaq: function(item, callback) {
    return db.query(
      "Insert into faq_tbl values(?,?,?,?,?,?)",
      ["null", item.faq_question, item.faq_answer, item.fk_user_id, 1, 0],
      callback
    );
  },
  deleteFaq: function(id, callback) {
    return db.query(
      "update faq_tbl set is_delete=1, is_active=0 where pk_faq_id=?",
      [id],
      callback
    );
  },
  updateFaq: function(id, item, callback) {
    return db.query(
      "update faq_tbl set faq_question=? , faq_answer=?, fk_user_id=? where pk_faq_id=?",
      [item.faq_question, item.faq_answer, item.fk_user_id, id],
      callback
    );
  }
};
module.exports = Faq;
