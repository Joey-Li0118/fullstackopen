import { useState } from 'react'

//UNICAFE
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      {/* <button onClick={() => handleClick({ value: good, func: setGood }) } >good </button> */}
      <button onClick={()=> handleClick(good, setGood)} >good </button>
      <button onClick={()=> handleClick(neutral, setNeutral)} >neutral </button>
      <button onClick={()=> handleClick(bad, setBad) } >bad </button>
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>


    </div>
  )
}

const Statistics = (props) => {
  if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return <div>feedback needed</div>
  }

  return <table>
      <tbody>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
    <StatisticLine text="average" value ={((props.good) + (-1*props.bad)) / (props.good + props.neutral + props.bad)} />
    <StatisticLine text="positive" value ={props.good/(props.good + props.neutral + props.bad) * 100 + '%'} />
      </tbody>
    </table>
  }


const StatisticLine = ({text, value}) => {
  return (
     <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const handleClick =  (value, func) => {
  const newnumber = value + 1
  console.log(value)
  func(newnumber)
  console.log(newnumber)
}

export default App






///////////// part 1 before
// const App = () => {
//   // const-definitions
//   const [ counter, setCounter ] = useState(0)

//   // setTimeout(
//   //   () => setCounter(counter +1),
//   //   1000
//   // ) // auto counter style
//   const [left, setLeft] = useState(0)
//   //can't add a hook inside of any conditional or for loop statements
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(updatedRight + left)
//   }

//   const handleClick = () => {
//     setCounter(counter*counter + counter + 1)
//     console.log('yo')
//   }

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//       <p>You have been on this page for {counter} seconds! </p>
//       <Display counter = {counter}/>
//       <button onClick = {handleClick} > plus </button>
//       <button onClick = {() => setCounter(0)}>reset</button>
//       {/* the event handler is a function call, requires () => */}
//       <Header course={course} />
//       <Content 
//         course = {course}
//       />
//       <Total course = {course} />
//        {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks={allClicks} />
//       <p>total clicks: {total}</p>
//     </div>
//   )
// }


// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Display = ({counter}) => {
//   return (<div>{counter}</div>)
// }

// const Header = ({course}) => {
//   return (<div>
//     <p>{course.name} </p>
//   </div>)
// }
// const Part = ({name, number}) => {
//   return <div>
//   <p> {name}: {number}</p>
//   </div>
// }

// const Content = ({course}) => {
//   return (<div>
//     <Part name = {course.parts[0].name} number = {course.parts[0].exercises} /> 
//     <Part name = {course.parts[1].name} number = {course.parts[1].exercises} /> 
//     <Part name = {course.parts[2].name} number = {course.parts[2].exercises} /> 
//   </div>)
// }

// const Total = ({course}) => {
//   return (
//     <div>
//       <p>Total number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
//     </div>
//   )
// }

// export default App