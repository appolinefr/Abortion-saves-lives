import {
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

export default function InfoPageHero() {
  return (
    <Container
      maxW={"10xl"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 14, md: 20 }}
      >
        <Heading
          fontWeight={300}
          fontSize={{ base: "3xl", sm: "3xl", md: "4xl" }}
          lineHeight={"130%"}
        >
          With the&nbsp;
          <Text as={"span"} fontStyle={"italic"}>
            Termination of Pregnancy Act 2021,&nbsp;
          </Text>{" "}
          <Text as={"span"} color={"#FF5677"}>
            abortion&nbsp;
          </Text>
          has finally been decriminalised in South Australia.
        </Heading>
      </Stack>
    </Container>
  );
}
