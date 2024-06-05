import { Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";

const Parent = () => {
  const [isOpen, setIsOpen] = useState<string>("");
  return (
    <>
      <Child1 isOpen={isOpen} />
      <Child2 />
    </>
  );
};

export default Parent;

const Child1 = (isOpen: string) => {
  const [isOpenC1, setIsOpenC1] = useState<string>("");
  return <Button onClick={() => setIsOpenC1("new value")} />;
};

const Child2 = () => {
  const [isOpenC2, setIsOpenC2] = useState<any>("");
  return <Button onClick={() => setIsOpenC2("new val 2")} />;
};
