import { useState } from 'react'
import Person from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Person.jsx'
import Form from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Form.jsx'
import Filter from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Filter.jsx'
import phoneService from './services/phonebook.js'
import { useEffect } from 'react'
import Footer from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Footer.jsx'
import Notification from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const personAssignment = () => {
    phoneService.getAll().then(initialPersons => {
        setPersons(initialPersons)
      })
  }

  useEffect(personAssignment, [])

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

  const deleteButton = (id) => {
    const personToDelete = persons.find(p => p.id === id);  // you still have access here
    if (window.confirm('Are you sure you want to delete this person from the phonebook?')) {
      phoneService.del(id).then(() => {
      phoneService.getAll().then(updatedPersons => {setPersons(updatedPersons);
    });    }).catch(error => {
        setErrorMessage(`${personToDelete.name} was already removed from server`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
      return
  }
}

  const submission = (event) => {
    event.preventDefault()
    const newperson = {name: newName, number: newNumber}
    // const alreadyExists = persons.some((person) => person.name === newperson.name);
    const existingPerson = persons.find(person => person.name === newName);
    if (newperson.name === '') {
      window.alert("Try again")
      return
    }
   if (existingPerson) {
  if (
    window.confirm(
      `${newName} is already added to phonebook, are you sure you want to replace?`
    )
  ) {
    phoneService
      .update(existingPerson.id, newperson)
      .then(returnedPerson => {
        setPersons(
          persons.map(person =>
            person.name === newperson.name ? returnedPerson : person
          )
        );
      })
      .catch(error => {
        setErrorMessage(`${newName} was already removed from server`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setPersons(persons.filter(n => n.name !== newName));
      });
      return
  }

      return; // exit early — do NOT add to state
    }
    phoneService.create(newperson).then(returnedPerson =>  {
      setPersons(persons.concat(returnedPerson)) 
      setNewName('')
      setNumber('')
      setErrorMessage(`Added ${newperson.name}`)
    })
  }    

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 flex flex-col items-center p-6">
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 mt-8">
    <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Phonebook</h2>

    <Notification message={errorMessage} />

    <div className="flex flex-col gap-4 mb-6">
      <Filter form={filter} filter={searchFilter} />
      <Form
        name={newName}
        namechange={change}
        number={newNumber}
        numberchange={newphonewhodis}
        submit={submission}
      />
    </div>

    <h2 className="text-xl font-semibold text-purple-700 mb-3">Saved Contacts</h2>
    <ul className="divide-y divide-gray-200">
      <Person peeps={filteredPeople} onDelete={deleteButton} />
    </ul>
  </div>

  <Footer />
</div>

  )
}


export default App