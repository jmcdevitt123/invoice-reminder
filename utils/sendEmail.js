const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io", // Use Mailtrap or other SMTP provider
    port: 2525,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Invoice Reminder" <no-reply@invoicereminder.site>',
    to,
    subject,
    text,
  });
};

module.exports = sendEmail;
