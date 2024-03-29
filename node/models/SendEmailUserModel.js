const nodemailer = require("nodemailer");
var db = require("../dbConnection");

var SendEmailUser = {
  sendMail: function(item, callback) {
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
      subject: "Password from Forgot Password",
      html: `<p> Your Password is:  ${item.user_password} </p>`
    };

    let info = transporter.sendMail(mailOptions);
    callback(info);
  },

  getUser: function(id, callback) {
    return db.query(
      "select * from user_tbl where user_email=? && is_delete=0 && is_active=1",
      [id],
      callback
    );
  },
  deleteCartByUserId: function(id, callback) {
    return db.query(
      "update cart_tbl set is_delete=1, is_active=0 where fk_user_email_id=?",
      [id],
      callback
    );
  }

  //sendMail().catch(console.error);
};

module.exports = SendEmailUser;
