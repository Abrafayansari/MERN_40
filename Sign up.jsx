import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'
// import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
function App() {
const handle = (e)=>{
  e.preventDefault();
  Swal.fire(
    "you signed up"
  )
}
  return (
    <>
    <div className="text-gray-600 flex ">
      <form onSubmit={handle}>
  <h1 className=" m-2 text-3xl font-bold mb-[60px] ml-28">Join Us</h1>
<h4>Fullname</h4>
<input  required className="border-2 m-2 border-black w-80 rounded-[12px]" type="text"  placeholder=  'Fullname' 

/>
<h4>Email</h4>
<input required className="border-2 m-2 border-black w-80 rounded-[12px]" type="email" placeholder='email'/>
<h4>password</h4>
<input required className="border-2 m-2 border-black w-80 rounded-[12px]" type="password" placeholder='password' /><br />
<button type='submit'
className="ml-28 text-black w-24 p-2 bg-blue-600 w-28 mt-28 border-2 border-black rounded-[19px]">Sign up</button>
      </form> 
    </div>

   </>
  )
}

export default App
