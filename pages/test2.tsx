import React from 'react'

const test2 = () => {
  return (
    <div>test2</div>
  )
}

export default test2// import { Button } from "@chakra-ui/react";
// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [namesList, setNamesList] = useState<any>([]);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     // Create a new object with an id and name
//     const newName = { id: Date.now(), name: name };
//     setNamesList([...namesList, newName]);
//     setName("");
//   };

//   const handleEdit = (index: number) => {
//     const selectedName = namesList[index].name;
//     setName(selectedName);
//     const updatedList = namesList.filter((_: any, i: number) => i !== index);
//     setNamesList(updatedList);
//   };

//   const handleDelete = (index: number) => {
//     const updatedList = namesList.filter((_: any, i: number) => i !== index);
//     setNamesList(updatedList);
//   };

//   return (
//     <div>
//       <h1>Add Names</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <Button type="submit">Add Name</Button>
//       </form>
//       <ul>
//         {namesList.map((item: any, index: number) => (
//           <li key={item.id}>
//             {item.name}
//             <Button onClick={() => handleEdit(index)}>Edit</Button>
//             <Button onClick={() => handleDelete(index)}>Delete</Button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
