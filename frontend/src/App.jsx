import {useState} from "react"
import axios from "axios"

function App(){

const [file,setFile]=useState(null)
const [email,setEmail]=useState("")
const [status,setStatus]=useState("")

const submit = async ()=>{

 setStatus("Generating insight...")

 const formData = new FormData()

 formData.append("file",file)
 formData.append("email",email)

 try{

  await axios.post("http://localhost:8000/upload",formData)

  setStatus("Insight sent to email")

 }catch{

  setStatus("Error occurred")

 }

}

return(

<div style={{padding:"40px"}}>

<h2>Sales Insight Automator</h2>

<input type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<input
placeholder="Recipient Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={submit}>
Generate Insight
</button>

<p>{status}</p>

</div>

)

}

export default App