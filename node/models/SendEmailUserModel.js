const nodemailer = require("nodemailer");
var db = require("../dbConnection");

var SendEmailUser = {
  sendMail: function(item, callback) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "akshay.rexontechnologies@gmail.com", // generated ethereal user
        pass: "Rexon@Designer" // generated ethereal password
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
  }

  //sendMail().catch(console.error);
};

module.exports = SendEmailUser;
