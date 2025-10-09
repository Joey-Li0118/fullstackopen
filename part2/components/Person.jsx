const Person = ({peeps, onDelete}) => {
  return <div>{peeps.map((person) => {
        return <div key = {person.id}>
          <li>{person.name} {person.number} <button onClick={()=> onDelete(person.id)}>Delete</button> </li> 
          </div>
      })} </div>
}


export default Person