import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import thankYou from "../../../images/thankYou.jpg";

export default function DonateModal() {
  const text = useColorModeValue("#FF5677", "#1A202C");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        bg="#FF5677"
        variant="outline"
        color={"white"}
        maxWidth={160}
        _hover={{
          textDecoration: "none",
          color: "white",
          bg: "#187498",
          cursor: "pointer",
        }}
        onClick={onOpen}
      >
        Donate
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={text}>
          <ModalHeader my={4} color={"white"}>
            Coming soon...
          </ModalHeader>
          <ModalCloseButton />
          <Image alt={"You are important"} src={thankYou} height={250}></Image>
          <ModalBody py={6} color={"white"}>
            Thanks for clicking, you are a legend! We are in the process of
            implementing donations. Please come back here soon.{" "}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
