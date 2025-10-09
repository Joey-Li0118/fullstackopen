import Part from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Part.jsx'


const Content = ({course}) => {
  return (<div>
     {course.parts.map(part => (
        <Part key={part.id} name={part.name} number={part.exercises} />
      ))}
  </div>)
}

export default Content