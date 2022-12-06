import React from "react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
} from "@chakra-ui/react";

import thankYou from "../../../images/thankYou.jpg";

export default function DonateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="#FF5677"
        variant="outline"
        color={"white"}
        maxWidth={160}
        _hover={{
          color: "#FF5677",
          bg: "white",
          borderColor: "#FF5677",
        }}
        onClick={onOpen}
      >
        Donate
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#FF5677">
          <ModalHeader my={4} color={"white"}>
            Coming soon...
          </ModalHeader>
          <ModalCloseButton />
          <Image alt={"You are important"} src={thankYou} height={250}></Image>
          <ModalBody pb={6} bg="white">
            Thanks for clicking, you are a legend! We are in the process of
            implementing donations. Please come back here soon.{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
