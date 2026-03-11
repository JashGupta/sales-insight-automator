const Groq = require("groq-sdk")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

async function generateSummary(data){

 const prompt = `
You are a professional sales analyst.

Analyze the following dataset and produce an executive summary.

Dataset:
${JSON.stringify(data)}

Include:
1. Total revenue
2. Best performing region
3. Key insights
4. Business recommendations
`

 const chatCompletion = await groq.chat.completions.create({
   messages: [
     { role: "user", content: prompt }
   ],
   model: "llama-3.1-8b-instant",
   temperature: 0.2,
 })

 return chatCompletion.choices[0].message.content
}

module.exports = generateSummary