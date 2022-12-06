import { useRef, useState } from "react";

import {
  Box,
  Flex,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";

import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

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
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    color={"white"}
                    icon={<MdEmail />}
                    _hover={{
                      bg: "#FF5677",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>
                <Link href="https://github.com/appolinefr" target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    color={"white"}
                    icon={<BsGithub />}
                    _hover={{
                      bg: "#FF5677",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/appoline-cogan-91b777236/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    color={"white"}
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "#FF5677",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
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
                      />
                    </InputGroup>
                    <FormLabel>Email</FormLabel>
                    <InputGroup my={2}>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="user_email"
                        size="md"
                        focusBorderColor="#FF5677"
                      />
                    </InputGroup>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      type="email"
                      placeholder="Your Message"
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
                        bg: "#A7D2CB",
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
