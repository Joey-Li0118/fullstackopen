import { useState } from 'react'

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [array, setArray] = useState([0,0,0,0,0,0,0,0])



  const voteClick = () => {
    const copy = [...array]
    const index = selected
    copy[selected] = array[selected] + 1
    setArray(copy)
  }
  const max = array.indexOf(Math.max(...array))

  return (
    <div>
      <h1>Anecdote</h1>
      {anecdotes[selected]}
      <p>This anecdote has {array[selected]} votes</p>
      <button onClick={() => setSelected(getRndInteger(0,8))}>next anecdote</button>
      <button onClick={voteClick}>vote</button>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[max]}</p>
      <p>This anecdotes has {array[max]} votes!</p>
      
    </div>
  )
}







export default App