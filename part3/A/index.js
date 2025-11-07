const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]




morgan.token('responseinfo', function getinfo(req, rdes) { return JSON.stringify(req.body) })

app.use(morgan(':method :url :status :response-time ms :responseinfo'))


app.post('/api/persons', (request, response) => {
  const person = request.body
   if (!(person.name && person.number)) {
    return response.status(400).json({error: "content missing"});
  }
  const existingPerson = persons.find(people => people.name === person.name);
  const id = Math.random(0, 100000).toString()
  if (existingPerson) {
    return response.status(400).json({error: "Person already exists"});
  } 
    person.id = id
    persons.push(person)
    response.json(person)
// The name or number is missing
// The name already exists in the phonebook
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  response.json(person)
  if (person) { // if note exists then ok otherwise either undefined or null 
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
