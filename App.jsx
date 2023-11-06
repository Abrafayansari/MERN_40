import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let myDate =new Date()
  
const[number,setNumber]=useState(0)
const[history,setHistory]=useState([])
  return (
    <>
    <div>
      <h2>
        My Name is Rafay
      </h2>
      <button onClick={function(){
setNumber(number+1)  (console.log(myDate.toString()));       
      }}>
        {number}
      </button>
      <br />
      <button onClick={function(){
setNumber(0)
      }}>Reset</button>
    </div>
    </>
  )
}

export default App
