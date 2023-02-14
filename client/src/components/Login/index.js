import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Text,
  Input,
  InputGroup,
  Link,
  InputLeftElement,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function LoginModal(props) {
  const text = useColorModeValue("#FF5677", "#1A202C");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Button
        onClick={onOpen}
        as={Link}
        fontSize={"md"}
        fontWeight={600}
        color={"white"}
        bg={"#187498"}
        _hover={{
          textDecoration: "none",
          color: "gray.800",
          bg: "gray.300",
          cursor: "pointer",
        }}
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={text}>
          <ModalHeader my={4} color={"white"}>
            Log into your account
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"white"} pb={6}>
            <FormControl mt={4} color={"gray.800"}>
              <FormLabel>Email</FormLabel>
              <InputGroup mt={4} color={"gray.800"}>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  size="md"
                  color={"gray.800"}
                  borderColor={"gray.400"}
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  focusBorderColor="#FF5677"
                  value={formState.email}
                  onChange={handleChange}
                />
              </InputGroup>
              <FormLabel mt={4}>Password</FormLabel>
              <Input
                mt={2}
                name="password"
                type="password"
                placeholder="Password"
                size="md"
                borderColor={"gray.400"}
                _placeholder={{ opacity: 1, color: "gray.500" }}
                focusBorderColor="#FF5677"
                value={formState.password}
                onChange={handleChange}
              />
              <Button
                type={"submit"}
                onClick={handleFormSubmit}
                my={4}
                fontSize={"md"}
                fontWeight={600}
                color={"white"}
                bg={"#FF5677"}
                _hover={{
                  bg: "#187498",
                }}
              >
                Login
              </Button>
            </FormControl>
            {error && (
              <Text my={4} color={"red"}>
                {error.message}
              </Text>
            )}
            <Text
              color={"gray.600"}
              as={"a"}
              href={"/"}
              _hover={{
                textDecoration: "underline",
                color: "#FF5677",
              }}
            >
              No account? Back to main page to sign up
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
