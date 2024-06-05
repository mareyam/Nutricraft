import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Todo = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState<any>([]);

  const submit = (e: any) => {
    e.preventDefault();
    const newName = { id: Date.now(), name: name };
    setList([...list, newName]);
    setList("");
  };
  const edit = (index: number) => {
    const selectedName = list[index].name;
    setName(selectedName);
    const update = list.filter((_, i) => i != index);
    setList(update);
  };
  const deletee = (index: number) => {
    const update = list.filter((_, i) => i != index);
    setList(update);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <Button type="submit">add</Button>
      </form>
      {list?.map((item: any, index: number) => (
        <>
          <p>{item.name}</p>
          <button onClick={() => edit(index)}>edit</button>
          <button onClick={() => deletee(index)}>de</button>
        </>
      ))}
    </div>
  );
};

export default Todo;
