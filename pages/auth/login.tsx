import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import InputField from "@/components/input-field";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Box w="full" alignItems="center">
      <Heading>Sign up</Heading>
      <InputField
        type="text"
        value={name}
        setValue={setName}
        width="xs"
        label="Name"
        placeholder="Enter your name"
        inputRightElement={<FaUser />}
      />
      <InputField
        type="number"
        value={number}
        setValue={setNumber}
        width="xs"
        label="number"
        placeholder="Enter your number"
        inputRightElement={<FaUser />}
      />
      <InputField
        value={email}
        type="email"
        setValue={setEmail}
        width="xs"
        label="email"
        placeholder="Enter your email"
        inputRightElement={<FaUser />}
      />
      <InputField
        value={password}
        type="password"
        setValue={setPassword}
        width="xs"
        label="password"
        placeholder="Enter your password"
        inputRightElement={<FaUser />}
      />
    </Box>
  );
};

export default Login;
