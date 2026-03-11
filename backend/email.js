const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,             
  connectionTimeout: 10000,  
  greetingTimeout: 10000,
  socketTimeout: 10000,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

module.exports = async (to, summary) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: to,
    subject: "Sales Insight Report",
    text: summary
  })
}