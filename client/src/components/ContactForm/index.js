import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Input,
  Container,
  Button,
  Flex,
  Heading,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Text,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function FormContact() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={"#A7D2CB"}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading ml={8}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 5, lg: 5 }} color="white">
                    Fill up the form to get in touch
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="50px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ variant: "ghost", cursor: "default" }}
                        leftIcon={<MdPhone color={"#FF5677"} size="20px" />}
                      >
                        +61 466068066
                      </Button>
                      <Button
                        size="md"
                        height="50px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ variant: "ghost", cursor: "default" }}
                        leftIcon={<MdEmail color={"#FF5677"} size="20px" />}
                      >
                        a-s-l@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="50px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ variant: "ghost", cursor: "default" }}
                        leftIcon={
                          <MdLocationOn color={"#FF5677"} size="20px" />
                        }
                      >
                        Melbourne, Australia
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#FF5677" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#FF5677" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#FF5677" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl isRequired>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            value={input}
                            onChange={handleInputChange}
                            focusBorderColor="#FF5677"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            value={input}
                            onChange={handleInputChange}
                            focusBorderColor="#FF5677"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          focusBorderColor="#FF5677"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          my={6}
                          as={"a"}
                          fontSize={"md"}
                          fontWeight={600}
                          color={"white"}
                          bg={"#FF5677"}
                          href={"#"}
                          _hover={{
                            bg: "pink.700",
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
