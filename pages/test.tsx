/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";

export default function Example() {
  return (
    <ul className="max-w-sm max-h-sm p-4 border-2 border-purple">
      {people.map((item: any, index: number) => (
        <div
          key={index}
          className="flex w-full p-4 justify-between hover:bg-metal px-4 rounded-lg text-white"
        >
          <div className="flex">
            <div className="rounded-full border border-purple  size-10" />
            <div className="block ">
              <p className="text-metal font-medium text-sm">{item.name}</p>
              <p className="text-metal font-thin text-sm">{item.phone}</p>
            </div>
          </div>
          <p className="text-white hidden hover:block">Call</p>
        </div>
      ))}
    </ul>
  );
}

const people = [
  {
    name: "John Doe",
    imageUrl: "https://example.com/john.jpg",
    url: "https://example.com/profile/john",
    title: "Software Engineer",
    phone: "+1234567890",
  },
  {
    name: "Jane Smith",
    imageUrl: "https://example.com/jane.jpg",
    url: "https://example.com/profile/jane",
    title: "Product Manager",
    phone: "+1987654321",
  },
  {
    name: "Bob Johnson",
    imageUrl: "https://example.com/bob.jpg",
    url: "https://example.com/profile/bob",
    title: "UX Designer",
    phone: "+1122334455",
  },
];

// import React, { useState } from "react";
// import { Table, Thead, Tbody, Tr, Th, Td, Input } from "@chakra-ui/react";

// const initialData = [
//   {
//     name: "John",
//     amount: 1000,
//   },
//   {
//     name: "Alice",
//     amount: 1500,
//   },
//   {
//     name: "Bob",
//     amount: 2000,
//   },
//   {
//     name: "Emma",
//     amount: 1200,
//   },
// ];

// const Test = () => {
//   const [data, setData] = useState(initialData);
//   const [enteredAmount, setEnteredAmount] = useState(0);

//   const handleChange = (event: any) => {
//     setEnteredAmount(parseInt(event.target.value));
//   };

//   const handleDeduction = () => {
//     let remainingDeduction = enteredAmount;
//     const updatedData = data.map((item) => {
//       const deductedAmount = Math.min(item.amount, remainingDeduction);
//       remainingDeduction -= deductedAmount;
//       return {
//         ...item,
//         amount: item.amount - deductedAmount,
//       };
//     });
//     setData(updatedData);
//   };

//   return (
//     <>
//       <Input
//         placeholder="Enter amount to deduct"
//         mb={4}
//         value={enteredAmount}
//         onChange={handleChange}
//       />
//       <button onClick={handleDeduction}>Deduct Amount</button>
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Name</Th>
//             <Th>Amount</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {data.map((item, index) => (
//             <Tr key={index}>
//               <Td>{item.name}</Td>
//               <Td>{item.amount}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </>
//   );
// };

// export default Test;
