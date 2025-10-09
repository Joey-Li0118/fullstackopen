
// const Total = ({ course }) => {
//   return (
//     <div>
//       {course.parts.map((parts) => {
//         console.log(parts)
//         const total = parts.reduce((sum, part) => {return Number(sum) + Number(part)}, 0);
//         console.log(total)
//         return (
//           <div key={c.id}>
//             <h2>{c.name}</h2>
//             <strong>Total of {total} exercises</strong>
//         </div>
//         );
//       })}
//     </div>
//   );
// };


const Total = ({ course }) => {
const total = course.parts.reduce((sum, part) => {return Number(sum) + Number(part.exercises)}, 0)
  return (
    <div>
        <strong>Total of {total} exercises</strong>
    </div>
    );
};

// So if your function has curly braces, you need to explicitly return.

// In JSX, curly braces { … } mean:
// Evaluate the JavaScript inside the braces and insert the result here.

// reduce takes two arguments a function that gives you access to each item in the array 
export default Total
