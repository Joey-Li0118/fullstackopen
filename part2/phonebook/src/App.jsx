import { useState } from 'react'
import Person from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Person.jsx'
import Form from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Form.jsx'
import Filter from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Filter.jsx'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '???'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const change = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)

  }

  const newphonewhodis = (event) => {
     event.preventDefault()
    console.log(event.target.value)
    setNumber(event.target.value)
  }
  
  
  const searchFilter = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setFilter(event.target.value)
  }

 const filteredPeople = 
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const submission = (event) => {
    event.preventDefault()
    const newperson = {name: newName, number: newNumber}
    const alreadyExists = persons.some((person) => person.name === newperson.name);

    if (alreadyExists) {
      window.alert(`${newName} is already added to phonebook`);
      return; // exit early — do NOT add to state
    }
    setPersons(persons.concat(newperson))
    setNewName('')
    setNumber('')
  }    

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter form = {filter} filter = {searchFilter}/>
        <Form name = {newName} namechange = {change} number = {newNumber} numberchange = {newphonewhodis} submit = {submission}/>
      <h2>Numbers</h2>
      <ul>
      <Person peeps = {filteredPeople}/>
      </ul>
    </div>
  )
}

export default App