// import React from 'react'
// import { userContext, lastName } from '../App';
// function ChildC({ userName }) {
//   console.log("username", userName)
//   return (
//     <>
//       <userContext.Consumer>
//         {(value) => {
//           return (
//             <lastName.Consumer>
//               {
//                 (item) => {
//                   return (
//                     <div>
//                       Context value: {value} and lastname is:{item}
//                     </div>
//                   )
//                 }
//               }
//             </lastName.Consumer>

//           );
//         }}
//       </userContext.Consumer>
//       <div>Hello, my name is {userName}</div>
//     </>

//   )
// }

// export default ChildC