import React, {useState} from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text
} from "@chakra-ui/react";

import {WarningTwoIcon} from "@chakra-ui/icons";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const styles = {
  color: "#FF5677",
};

export default function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        width={160}
        fontSize={"md"}
        fontWeight={600}
        color={"white"}
        bg={styles.color}
        href={"#"}
        _hover={{
          bg: "#187498",
        }}
      >
        Sign up
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader my={4}>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input
                  type="text"
                  placeholder="
              Username"
                  name="username"
                  value={formState.name}
                  onChange={handleChange}
                  size="md"
                  focusBorderColor="#FF5677"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  size="md"
                  focusBorderColor="#FF5677"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                size="md"
                focusBorderColor="#FF5677"
              />
            </FormControl>
          </ModalBody>
          {error && (
            <Text my={4} color={"red"} textAlign="center">
             < WarningTwoIcon/> {error.message}
            </Text>
          )}
          <ModalFooter>
            <Button
              mr={4}
              onClick={handleFormSubmit}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.color}
              href={"#"}
              _hover={{
                bg: "#A7D2CB",
              }}
            >
              Sign up
            </Button>
            <Button
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.color}
              href={"#"}
              _hover={{
                bg: "#A7D2CB",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
