// // 1 import react
// // 2 create a function (same as the name of your file)
// // 3 return some JSX
// // 4 export that function

// import React from "react";
// import Table from 'react-bootstrap/Table';

// const RosterTable = () => {

//     <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>name</th>
//         <th>region</th>
//         <th>headCoach</th>
//         <th>sponsor</th>
//         <th>solo</th>
//         <th>mid</th>
//         <th>jungle</th>
//         <th>support</th>
//         <th>hunter</th>
//       </tr>
//     </thead>
//     <tbody>
//         {
//             teams.roster.map(team => (
//               <tr key={team.id}>
//               <td>{team.name}</td>
//               <td>{team.region.name}</td>
//               <td>{team.headCoach}</td>
//               <td>{team.sponsor}</td>
//               <td>{team.solo}</td>
//               <td>{team.mid}</td>
//               <td>{team.jungle}</td>
//               <td>{team.support}</td>
//               <td>{team.hunter}</td>
  
//             </tr>
//             ))
//         }
  
//     </tbody>
//   </Table>
// }

// export default RosterTable 