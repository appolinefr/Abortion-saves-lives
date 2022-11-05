import React from "react";
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
} from "@chakra-ui/react";

import { MdOutlineEmail } from "react-icons/md";

const styles = {
  color: "#FF5677",
};

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        as={"a"}
        fontSize={"md"}
        fontWeight={600}
        color={"white"}
        bg={styles.color}
        href={"#"}
        _hover={{
          bg: "#A7D2CB",
        }}
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader my={4}>Log into your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input
                  type="email"
                  placeholder="Email"
                  size="md"
                  focusBorderColor="#FF5677"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                size="md"
                focusBorderColor="#FF5677"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              mr={4}
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.color}
              href={"#"}
              _hover={{
                bg: "#A7D2CB",
              }}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
