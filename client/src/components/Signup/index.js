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
} from "@chakra-ui/react";

const styles = {
  color: "#FF5677",
};

export default function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          bg: "pink.700",
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
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="
              Username"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
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
                bg: "pink.700",
              }}
            >
              {" "}
              Sign up
            </Button>
            <Button
              fontSize={"md"}
              fontWeight={600}
              color={"white"}
              bg={styles.color}
              href={"#"}
              _hover={{
                bg: "pink.700",
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
