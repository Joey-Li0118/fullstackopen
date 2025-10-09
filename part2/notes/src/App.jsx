import { useState, useEffect } from 'react'
import Note from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Notes.jsx'
import axios from 'axios'
import noteService from './services/notes.js'
import Notification from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Notification.jsx'
import Footer from "/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Footer.jsx"



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('...new note here')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some  happened...')

  // useEffect(() => {
  //   console.log('effect')
  //   axios.get('http://localhost:3001/notes').then(
  //     response => {
  //       console.log('promise fulfilled')
  //       setNotes(response.data)
  //     })
  // }, [])
  // console.log('render', notes.length, 'notes')
  const hook = () => {
  console.log('effect')
  // axios
  //   .get('http://localhost:3001/notes')
  //   .then(response => {
  //     console.log('promise fulfilled')
  //     setNotes(response.data)
  //   })
  noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }

  useEffect(hook, []) //use this function whenever something changes 
  //empty array ^ specifies to run only once 
  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    // axios.put(url, changedNote).then(response => {
    //   setNotes(notes.map(note => note.id === id ? response.data : note))
    // })
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id === id ? returnedNote : note))
      }) .catch(error => {
      setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() < 0.5,
    id: String(notes.length + 1),
  }
  //  axios
  //   .post('http://localhost:3001/notes', noteObject)
  //   .then(response => {
  //     console.log(response)
  //     setNotes(notes.concat(noteObject))
  //     setNewNote('')
  //   })
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
}
   
  const handleChange = (event) => {
    console.log(event.target.value) //event is what the change is
    setNewNote(event.target.value) //target is where this event came from,
    //  value is what was the event doing
  }

  const notesToShow = showAll //if show all show all notes
    ? notes //if not show all show only important
    : notes.filter(note => note.important === true)


  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
       <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange={handleChange}/>
        <button type="submit">save</button>
      </form>   
      <Footer/>
    </div>
  )
}

export default App