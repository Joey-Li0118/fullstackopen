const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content 
        course = {course}
      />
      <Total course = {course} />
    </div>
  )
}


const Header = ({course}) => {
  return (<div>
    <p>{course.name} </p>
  </div>)
}
const Part = ({name, number}) => {
  return <div>
  <p> {name}: {number}</p>
  </div>
}

const Content = ({course}) => {
  return (<div>
    <Part name = {course.parts[0].name} number = {course.parts[0].exercises} /> 
    <Part name = {course.parts[1].name} number = {course.parts[1].exercises} /> 
    <Part name = {course.parts[2].name} number = {course.parts[2].exercises} /> 
  </div>)
}

const Total = ({course}) => {
  return (
    <div>
      <p>Total number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

export default App