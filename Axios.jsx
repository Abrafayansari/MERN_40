import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

const App = () => {
  const [posts,setposts]=useState([])
  async function fetchposts(){ axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((result)=>setposts(result.data))
  .catch((e)=>console.error(e))
  }
  
  return (<>
  <div>
    {/* {JSON.stringify(posts)} */}
    <button onClick={fetchposts}>
      Get post
    </button>
    {posts.map(function (posts){
      return<> <div key={posts}>{ posts?.title}</div>
      <div key={posts}>{ posts?.id}</div>
    </>
    })}
  </div>
  </>
 
  )
  }
export default App