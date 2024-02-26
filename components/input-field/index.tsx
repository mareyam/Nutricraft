import React, { ReactNode } from "react";
import {
  VStack,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

type InputFieldProps = {
  value: string;
  type: string;
  width: string;
  label: string;
  placeholder: string;
  inputRightElement: ReactNode;
  //   setValue: (value: string | number) => void;
  setValue: (value: any) => void;
};
const InputField = ({
  value,
  type,
  width,
  label,
  placeholder,
  inputRightElement,
  setValue,
}: InputFieldProps) => {
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <VStack p="2" w={width} textAlign="left">
      <Text fontSize="12" w="full">
        {label}
      </Text>
      <InputGroup>
        <Input
          onChange={handleChange}
          type={type}
          value={value}
          placeholder={placeholder}
          size="sm"
        />
        <InputRightElement>{inputRightElement}</InputRightElement>
      </InputGroup>
    </VStack>
  );
};

export default InputField;
