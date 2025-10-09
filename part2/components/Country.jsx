import { useState } from "react"
import CountryContent from "./CountryContent"


const Country = ({data}) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    
    const showCountry = (country) => {
        setSelectedCountry(country)
            // return <CountryContent country = {event.target}/>

    }

    if (data.length > 10) {
        return <h4>Too many results, give further specifications to your search </h4>
    } 
    if (data.length === 1) {
        return <CountryContent country = {data[0]}/>
    }
    return(<div>
    {data.map(country => (
      <div key={country.cca3}>
        <li>
          {country.name.common}
          <button onClick={() => showCountry(country)}>Show</button>
        </li>
      </div>
    ))}
      {selectedCountry && <CountryContent country={selectedCountry} />}
  </div>
)
}

export default Country