import { useRef, useState } from "react";

import {
  Box,
  Flex,
  chakra,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

import { BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialButton = ({ children, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      color={"white"}
      rounded={"full"}
      w={14}
      h={14}
      variant="ghost"
      cursor={"pointer"}
      as={"a"}
      href={href}
      isExternal
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#FF5677",
        color: "white",
      }}
    >
      {children}
    </chakra.button>
  );
};

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard("appolinecogan@gmail.com");
  const form = useRef();
  const [button, setButton] = useState("Send");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7hh9zgm",
        "template_43qhnkr",
        form.current,
        "vy0_3laHotgJKbdM5"
      )
      .then(setButton("Message sent!"), (error) => {
        console.log(error.text);
      });
    event.target.reset();
  };

  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ sm: 5, md: 10, lg: 16 }}
        bg="#187498"
      >
        <Box w={{ base: "md", md: "xl", lg: "3xl" }}>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <span onClick={onCopy}>
                    <SocialButton>
                      <MdEmail size={"30px"} />
                    </SocialButton>
                  </span>
                </Tooltip>
                <SocialButton href={"https://github.com/appolinefr"}>
                  <FaGithub size={"30px"} />
                </SocialButton>
                <SocialButton
                  href={"https://www.linkedin.com/in/appoline-cogan-91b777236/"}
                >
                  <FaLinkedin size={"30px"} />
                </SocialButton>
              </Stack>
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                w={{ base: "md", md: "lg", lg: "xl" }}
              >
                <VStack spacing={5}>
                  <form ref={form} onSubmit={sendEmail}>
                    <FormLabel>Name</FormLabel>
                    <InputGroup mb={2}>
                      <InputLeftElement children={<BsPerson />} />
                      <Input
                        name="user_name"
                        placeholder="Your Name"
                        size="md"
                        type="name"
                        focusBorderColor="#FF5677"
                        _placeholder={{ opacity: 1, color: "gray.400" }}
                      />
                    </InputGroup>
                    <FormLabel>Email</FormLabel>
                    <InputGroup my={2}>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        _placeholder={{ opacity: 1, color: "gray.400" }}
                        name="user_email"
                        size="md"
                        focusBorderColor="#FF5677"
                      />
                    </InputGroup>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      type="email"
                      placeholder="Your Message"
                      _placeholder={{ opacity: 1, color: "gray.400" }}
                      name="user_message"
                      rows={6}
                      focusBorderColor="#FF5677"
                    />
                    <Input
                      my={2}
                      type={"submit"}
                      value={button}
                      bg="#FF5677"
                      color="white"
                      _hover={{
                        bg: "gray.300",
                        color: "gray.800",
                      }}
                    />
                  </form>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
