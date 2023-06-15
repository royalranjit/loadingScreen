
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from 'react'
import RiseLoader from "react-spinners/RiseLoader"

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
 
  },[])

  return (
    <>
    {
      loading?(<RiseLoader
        color={'#136fd1'}
        loading={loading}
        size={20} />)  :(<h1>I am a developer....</h1>)
      
    }
      
       
    </>
  )
}

export default App
