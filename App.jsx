import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from "react-router-dom"
import './App.css'

function App() {


  return (
    <>
      <header>
        <div className='one'style={{backgroundColor:"antiquewhite"}}>
          <Link to="/home"  style={{padding:"20px", gap: '10px'}}>Home</Link>
          <Link to="/Contact" style={{padding:"20px", gap: '10px'}}>Contact</Link>
           <Link to="/About" style={{padding:"20px", gap: '10px'}}>About</Link>
           <Link to="/Careers" style={{padding:"20px", gap: '10px'}}>Careers</Link>
          </div>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum, rerum tenetur quidem pariatur quaerat, corporis reiciendis expedita suscipit fugit ipsam optio tempora deleniti ab odio quos earum? Tempora corporis delectus cumque ab culpa.</p>
    </>
  )
}

export default App
