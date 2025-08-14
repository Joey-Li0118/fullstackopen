import { useState, useEffect } from 'react'
import './App.css'
import countryServices from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/countries/src/services/countries.js'
import Country from "/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Country.jsx"

function App() {
  const [country, setCountry] = useState("")
  const [dataBase, setDataBase] = useState([])
 
  const dataRetrieval = () => {
    countryServices.getAll().then((response) => {console.log(response[0])
      setDataBase(response)}) 
  }

  const searchChange = (event) => {
  setCountry(event.target.value);
};

// Inside your component (before return):
const filteredDataBase = dataBase.filter((object) =>
  object.name.common.toLowerCase().includes(country.toLowerCase())
);

  useEffect(dataRetrieval, []) 

  return (
    <div>
      Find Countries: <input value = {country} onChange={searchChange}/>  
      {country !== "" && <Country data={filteredDataBase} />}
    </div>
  )
}

export default App
