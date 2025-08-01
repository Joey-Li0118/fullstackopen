import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [country, setCountry] = useState("")
  
  const searchChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setCountry(event.target.value)
  }
  return (
    <div>
      Search: <input value = {country} onChange={searchChange}/>  
    </div>
  )
}

export default App
