const { Resend } = require("resend")

const resend = new Resend(process.env.RESEND_API_KEY)

module.exports = async (to, summary) => {
  try {
    await resend.emails.send({
      from: "jashgupta77@gmail.com",
      to: to,
      subject: "Sales Insight Report",
      text: summary
    })
  } catch (error) {
    console.error(error)
  }
}