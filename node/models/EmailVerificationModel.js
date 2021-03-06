const nodemailer = require("nodemailer");
var db = require("../dbconnection");

var EmailVerification = {
  sendMail: function(item, callback) {
    let url = "http://localhost:4200/verification/" + item.user_email;
    const rand = Math.floor(Math.random() * 9999);
    console.log("rand: " + rand);

    db.query("update user_tbl set verification_code=? where user_email=?", [
      rand,
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
      html: `<p><h3> Verification code: ${rand} </h3><br/><h3> <a href="${url}">Verify Here </a></h3> </p>`
    };

    let info = transporter.sendMail(mailOptions);
    callback(info);
  },

  //sendMail().catch(console.error);

  verify: function(id, item, callback) {
    return db.query(
      "update user_tbl set is_verified=1 where user_email=? && verification_code=?",
      [id, item.verification_code],
      callback
    );
  }
};

module.exports = EmailVerification;
