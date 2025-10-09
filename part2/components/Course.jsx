import Header from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Header.jsx'
import Content from'/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Content.jsx'
import Total from '/Users/joeyli/Documents/Everything/Personal Projects/fullstackopen/part2/components/Total.jsx'


const Course = ({ course }) => {
  return (
    <>
      {course.map(c => (
        <div key={c.id}>
          <Header course={c} />
          <Content course={c} />
          <Total course = {c} />

        </div>
      ))}

    </>
  );
};


export default Course