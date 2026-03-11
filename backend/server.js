const express = require("express")
const multer = require("multer")
const cors = require("cors")
require("dotenv").config()

const parseFile = require("./parser")
const generateSummary = require("./ai")
const sendEmail = require("./email")

const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const upload = multer({
 limits: { fileSize: 5 * 1024 * 1024 }
})

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload sales CSV/XLSX and generate AI summary
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               email:
 *                 type: string
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: Summary generated and email sent
 */

app.post("/upload", upload.single("file"), async (req, res) => {

 try {

  if(!req.file){
   return res.status(400).json({error:"File required"})
  }

  const email = req.body.email

  const data = await parseFile(req.file)

  const summary = await generateSummary(data)

  await sendEmail(email, summary)

  res.json({message:"Summary generated and email sent"})

 } catch(error){

  console.error(error)

  res.status(500).json({error:error.message})

 }

})

app.listen(8000,()=>{
 console.log("Server running on port 8000")
})