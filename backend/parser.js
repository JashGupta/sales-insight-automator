const csv = require("csv-parser")
const XLSX = require("xlsx")
const stream = require("stream")

function parseCSV(buffer){

 return new Promise((resolve,reject)=>{

  const results=[]

  const readable=new stream.Readable()
  readable.push(buffer)
  readable.push(null)

  readable
   .pipe(csv())
   .on("data",(data)=>results.push(data))
   .on("end",()=>resolve(results))
   .on("error",reject)

 })

}

function parseXLSX(buffer){

 const workbook = XLSX.read(buffer,{type:"buffer"})

 const sheet = workbook.Sheets[workbook.SheetNames[0]]

 return XLSX.utils.sheet_to_json(sheet)

}

module.exports = async (file)=>{

 if(file.originalname.endsWith(".csv"))
  return await parseCSV(file.buffer)

 if(file.originalname.endsWith(".xlsx"))
  return parseXLSX(file.buffer)

 throw new Error("Invalid file format")

}