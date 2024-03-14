import nodemailer from "nodemailer";

const mail = (token) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "balaworkcc@gmail.com",
      pass: "niah mtpx rfrj sklb",
    },
  });

  let details = {
    from: "balaworkcc@gmail.com",
    to: "balasivam28@gmail.com",
    subject: "Password-Reset",
    text: `Click the following link to reset your password: http://localhost:5173/reset-pass?token=${token}`,
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log("mail not send");
    } else {
      console.log("mail sent successfully");
    }
  });
};

export default mail;