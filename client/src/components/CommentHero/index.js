import {
  Box,
  Heading,
  Container,
  Stack,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

const styles = {
  pink: "#FF5677",
};

export default function CommentHero() {
  return (
    <>
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
            fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
            lineHeight={"130%"}
          >
            Share your&nbsp;
            <Text as="span" color={styles.pink}>abortion</Text>
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
