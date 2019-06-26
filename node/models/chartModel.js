var db = require("../dbConnection");

var Chart = {
  getChartData: function(callback) {
    return db.query(
      "select sum(od.detail_qty * od.detail_price) from order_tbl o , order_detail_tbl od where o.pk_order_id = od.fk_order_id && o.order_date > DATE_FORMAT(CURDATE() -6,'%m/%d/%y') Group By o.order_date"
    );
  }
};
