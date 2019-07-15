const nodemailer = require("nodemailer");
var db = require("../dbconnection");

var payment = {
  paymentVerify: function(id, item, callback) {
    db.query("update order_tbl set payment_id=? where fk_user_id=?", [
      id,
      item.user_email
    ]);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "salonidarji3335@gmail.com", // generated ethereal user
        pass: "1941333lavishka" // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: "akshay.rexontechnologies@gmail.com",
      to: item.user_email,
      subject: "Email Verification",
      html: `<p><h3> Your order is placed successfully.</h3> Payment Id: ${id} </p>`
    };

    let info = transporter.sendMail(mailOptions);
    callback(info);
  }

  //paymentVerify().catch(console.error);
};

module.exports = payment;
