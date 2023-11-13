import  Swal from "sweetalert2"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [text,settext]=useState("")
 const [phone,setphone]=useState("")
 const [email,setemail]=useState("")
 const [name,setname]=useState("")
  const handlesubmit=(e)=>{
  e.preventDefault();
  Swal.fire(
    "Form Submitted",
    `Name:${name} , phonenumber:${phone} , Email:${email}`
  )

 }
  return (
    <>
    <div className="bg-orange-200 h-3/4 w-96"> 
       <h1>Contact Form</h1>
       <form onSubmit={handlesubmit}>
<input  className = "border-2 m-2.5 w-80"     type="text"placeholder='Name' required  onChange={(e)=>{setname(e.target.value)}}/><br />
<input className = "border-2 m-2.5 w-80"    type="text" placeholder='phone number'required onChange={(e)=>{setphone(e.target.value)}}/><br />
<input  className = "border-2  m-2.5 w-80"   type="email"placeholder='Email' required onChange={(e)=>{setemail(e.target.value)}}/><br />

<textarea className=" h-80 border-2  m-2.5 w-80" value={text}   type="text" onChange={(e)=>{
  settext(e.target.value)
}
}  /> <br />
<button  className="border-2 border-black " type="submit">
  Submit
</button>
</form>
    </div>
    </>
  )
}

export default App
